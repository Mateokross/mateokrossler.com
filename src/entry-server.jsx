import { renderToString } from 'react-dom/server'
import App from './App'

export function render({ pathname = '/', language = 'en' } = {}) {
  return renderToString(<App initialPathname={pathname} initialLanguage={language} />)
}
