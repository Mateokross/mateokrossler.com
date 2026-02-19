import { readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { createServer } from 'vite'

const distIndexPath = resolve(process.cwd(), 'dist/index.html')

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

  await writeFile(distIndexPath, hydratedHtml, 'utf-8')
} finally {
  await vite.close()
}
