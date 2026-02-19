import { readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { createServer } from 'vite'

const distIndexPath = resolve(process.cwd(), 'dist/index.html')
const structuredDataScript = `<script type="application/ld+json">{"@context":"https://schema.org","@graph":[{"@type":"Person","@id":"https://mateokrossler.com/#person","name":"Mateo Krossler","url":"https://mateokrossler.com/","jobTitle":"Product & Data Lead","sameAs":["https://www.linkedin.com/in/mateokrossler/","https://unsplash.com/@mateokross"]},{"@type":"WebSite","@id":"https://mateokrossler.com/#website","url":"https://mateokrossler.com/","name":"Mateo Krossler","inLanguage":["en","es"],"publisher":{"@id":"https://mateokrossler.com/#person"}}]}</script>`

const vite = await createServer({
  appType: 'custom',
  server: {
    middlewareMode: true
  }
})

try {
  const template = await readFile(distIndexPath, 'utf-8')
  const { render } = await vite.ssrLoadModule('/src/entry-server.jsx')
  const appHtml = await render()

  const hydratedHtml = template.replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`
  )

  const finalHtml = hydratedHtml.includes('application/ld+json')
    ? hydratedHtml
    : hydratedHtml.replace('</head>', `    ${structuredDataScript}\n  </head>`)

  await writeFile(distIndexPath, finalHtml, 'utf-8')
} finally {
  await vite.close()
}
