import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { createServer } from 'vite'

const siteOrigin = 'https://mateokrossler.com'
const distRoot = resolve(process.cwd(), 'dist')
const distIndexPath = resolve(distRoot, 'index.html')

const routes = [
  {
    pathname: '/',
    outputPath: distIndexPath,
    title: 'Mateo Krossler | Product and Data',
    description: 'Leading Product and Data at Powerbeans, an AI startup. 6+ years building digital products.',
    canonicalPath: '/'
  },
  {
    pathname: '/work',
    outputPath: resolve(distRoot, 'work/index.html'),
    title: 'Work | Mateo Krossler',
    description: 'Product leadership achievements across AI media, fintech, and ecommerce.',
    canonicalPath: '/work'
  },
  {
    pathname: '/skills',
    outputPath: resolve(distRoot, 'skills/index.html'),
    title: 'Skills | Mateo Krossler',
    description: 'Product strategy, data analytics, AI integration, software development, and UX skills.',
    canonicalPath: '/skills'
  },
  {
    pathname: '/photography',
    outputPath: resolve(distRoot, 'photography/index.html'),
    title: 'Photography | Mateo Krossler',
    description: 'Photography highlights, publications, and featured work from Unsplash.',
    canonicalPath: '/photography'
  }
]

const buildStructuredDataScript = ({ title, description, canonicalPath }) => {
  const canonicalUrl = `${siteOrigin}${canonicalPath === '/' ? '/' : canonicalPath}`
  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${siteOrigin}/#person`,
        name: 'Mateo Krossler',
        url: `${siteOrigin}/`,
        jobTitle: 'Product and Data Lead',
        sameAs: [
          'https://www.linkedin.com/in/mateokrossler/',
          'https://unsplash.com/@mateokross'
        ]
      },
      {
        '@type': 'WebSite',
        '@id': `${siteOrigin}/#website`,
        url: `${siteOrigin}/`,
        name: 'Mateo Krossler',
        inLanguage: ['en', 'es'],
        publisher: {
          '@id': `${siteOrigin}/#person`
        }
      },
      {
        '@type': 'WebPage',
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: title,
        description,
        inLanguage: 'en',
        isPartOf: {
          '@id': `${siteOrigin}/#website`
        },
        about: {
          '@id': `${siteOrigin}/#person`
        }
      }
    ]
  }

  return `<script type="application/ld+json">${JSON.stringify(graph)}</script>`
}

const updateHeadMetadata = (html, route) => {
  const canonicalUrl = `${siteOrigin}${route.canonicalPath === '/' ? '/' : route.canonicalPath}`
  const structuredDataScript = buildStructuredDataScript(route)

  let updatedHtml = html.replace(
    /<title>[\s\S]*?<\/title>/i,
    `<title>${route.title}</title>`
  )

  updatedHtml = updatedHtml.replace(
    /<meta\s+name="description"[\s\S]*?\/>/i,
    `<meta name="description" content="${route.description}" />`
  )

  updatedHtml = updatedHtml.replace(
    /<link\s+rel="canonical"[\s\S]*?\/>/i,
    `<link rel="canonical" href="${canonicalUrl}" />`
  )

  if (updatedHtml.includes('application/ld+json')) {
    return updatedHtml.replace(
      /<script\s+type="application\/ld\+json">[\s\S]*?<\/script>/i,
      structuredDataScript
    )
  }

  return updatedHtml.replace('</head>', `    ${structuredDataScript}\n  </head>`)
}

const vite = await createServer({
  appType: 'custom',
  server: {
    middlewareMode: true
  }
})

try {
  const template = await readFile(distIndexPath, 'utf-8')
  const { render } = await vite.ssrLoadModule('/src/entry-server.jsx')

  for (const route of routes) {
    const appHtml = await render({ pathname: route.pathname, language: 'en' })
    const hydratedHtml = template.replace(
      '<div id="root"></div>',
      `<div id="root">${appHtml}</div>`
    )

    const finalHtml = updateHeadMetadata(hydratedHtml, route)

    await mkdir(dirname(route.outputPath), { recursive: true })
    await writeFile(route.outputPath, finalHtml, 'utf-8')
  }
} finally {
  await vite.close()
}
