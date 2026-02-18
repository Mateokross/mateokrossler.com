import { useEffect, useMemo, useRef, useState } from 'react'

const content = {
  en: {
    intro: [
      'Leading Product & Data at Powerbeans, an AI media and AdTech startup. 6+ years of experience building products.',
      'Extremely curious. Hobby photographer. Fan of nature, traveling, cinema, and reading.'
    ],
    buttons: {
      work: 'Work',
      skills: 'Skills',
      photography: 'Photography'
    },
    work: [
      'Recent achievements:',
      '- Scaled an AI audio player to 40M+ plays',
      '- Designed a news carousel (2x engagement)',
      '- Redesigned mobile UX (+55% CTR)',
      'Previously:',
      '- Launched a lending and invoice financing API at AREX Markets (B2B fintech)',
      '- Led design and rollout of sales systems for 3 countries at Kavak (ecommerce) (+13% sales).',
      '- Developed a virtual fair platform with 10,000+ international users.',
      'I enjoy turning ideas into real products, working closely with design, data, and engineering.',
      'Learn more on my LinkedIn.'
    ],
    photography: [
      "I published some of my pictures on Unsplash, where I've accumulated more than 9M views and 100K downloads.",
      'They have been used on 100+ websites, including the official site of the city of Berlin. Some people made art with them, Buzzfeed used a couple on their quizzes, and a beer company put one on their labels.',
      'See photos on Unsplash.'
    ],
    skills: [
      'Product & Strategy',
      '- Product discovery & roadmap ownership',
      '- 0→1 launches and growth optimization',
      '- User research & experimentation',
      '- KPI definition & metric design',
      '- Agile methodologies, Scrum, Kanban',
      '- Design Thinking',
      '- Prioritization frameworks',
      'Leadership & Operating Style',
      '- Cross-functional alignment across design, data, engineering and business',
      '- Influencing without authority',
      '- Systems thinking',
      '- Structured decision-making under ambiguity',
      '- Clear written documentation & async communication',
      '- High ownership in fast-moving environments',
      'AI & Automation',
      '- LLM integration (OpenAI, X AI, OpenRouter)',
      '- AI product design & evaluation',
      '- Prompt design',
      '- AI audio generation (ElevenLabs)',
      '- Workflow automation (Zapier, Make, n8n)',
      'Data & Analytics',
      '- SQL, MongoDB, BigQuery, AWS Athena',
      '- Data modeling & event schema design',
      '- Data pipeline design',
      '- Business Intelligence (Looker, Tableau, Microstrategy)',
      '- Cohort & retention analysis',
      'Software Development',
      '- HTML, CSS, JavaScript, React',
      '- Node.js, PHP, Python',
      '- Google Apps Script',
      '- API design',
      '- GitHub',
      'UX & Design',
      '- UX-first product thinking',
      '- Interface & interaction design',
      '- Wireframing & rapid prototyping (Figma)',
      '- Usability testing',
      'Developer Experience',
      '- API-first product thinking',
      '- Developer portals',
      '- Technical documentation',
      '- Documentation style guidelines',
      '- DX optimization',
      'Cloud & Hosting',
      '- AWS S3',
      '- Netlify',
      '- Vercel',
      '- Cloudflare',
      'Collaboration & PM Tools',
      '- Jira, Confluence, Atlassian',
      '- Notion',
      '- Trello',
      '- ClickUp',
      '- Figma',
      'Creative Tools',
      '- Photoshop',
      '- Illustrator',
      '- InDesign',
      '- Premiere'
    ],
    standby: 'Standby'
  },
  es: {
    intro: [
      'Liderando Producto y Data en Powerbeans, una startup de IA y AdTech. +6 años construyendo productos digitales.',
      'Extremadamente curioso. Fotógrafo de hobby. Fan de la naturaleza, viajar, el cine y la lectura.'
    ],
    buttons: {
      work: 'Trabajo',
      skills: 'Habilidades',
      photography: 'Fotografía'
    },
    work: [
      'Logros recientes:', 
      '- Escalé un reproductor de audio IA a +40M reproducciones',
      '- Diseñé un carrusel de noticias (2x engagement)',
      '- Rediseñé la UX mobile (+55% CTR)',
      'Anteriormente:',
      '- Lancé una API de préstamos y financiamiento de facturas en AREX Markets (fintech B2B)',
      '- Lideré el diseño y despliegue de sistemas comerciales para 3 países en Kavak (ecommerce) (+13% ventas).',
      '- Desarrollé una plataforma de ferias virtuales con más de 10,000 usuarios internacionales.',
      'Disfruto convertir ideas en productos reales, trabajando de cerca con diseño, data e ingeniería.',
      'Conoce más en mi LinkedIn.'
    ],
    photography: [
      'Publiqué algunas fotos en Unsplash, donde acumulé más de 9 millones de vistas y 100 mil descargas.',
      'Están siendo usadas en >100 páginas web, incluyendo el sitio oficial de la ciudad de Berlín. Hay gente que las usó para hacer arte, Buzzfeed usó algunas en sus quizzes, y una empresa de cerveza puso una en sus etiquetas.',
      'Ver fotos en Unsplash.'
    ],
    skills: [
      'Producto y Estrategia',
      '- Descubrimiento de producto y gestión de roadmap',
      '- Lanzamientos 0→1 y optimización de crecimiento',
      '- Investigación de usuarios y experimentación',
      '- Definición de KPIs y diseño de métricas',
      '- Metodologías ágiles, Scrum, Kanban',
      '- Design Thinking',
      '- Frameworks de priorización',
      'Liderazgo y Estilo Operativo',
      '- Alineamiento con diseño, data, ingeniería y negocio',
      '- Influencia sin autoridad',
      '- Pensamiento sistémico',
      '- Toma de decisiones estructurada en contextos ambiguos',
      '- Documentación clara y comunicación asíncrona',
      '- Alto ownership en entornos de ritmo acelerado',
      'IA y Automatización',
      '- Integración de LLM (OpenAI, X AI, OpenRouter)',
      '- Diseño y evaluación de productos IA',
      '- Diseño de prompts',
      '- Generación de audio con IA (ElevenLabs)',
      '- Automatización de workflows (Zapier, Make, n8n)',
      'Datos y Analítica',
      '- SQL, MongoDB, BigQuery, AWS Athena',
      '- Modelado de datos y diseño de esquemas de eventos',
      '- Diseño de pipelines de datos',
      '- Business Intelligence (Looker, Tableau, Microstrategy)',
      '- Análisis de cohorts y retención',
      'Desarrollo de Software',
      '- HTML, CSS, JavaScript, React',
      '- Node.js, PHP, Python',
      '- Google Apps Script',
      '- Diseño de APIs',
      '- GitHub',
      'UX y Diseño',
      '- Pensamiento de producto con enfoque UX-first',
      '- Diseño de interfaces e interacción',
      '- Wireframing y prototipado rápido (Figma)',
      '- Pruebas de usabilidad',
      'Experiencia de Desarrollador',
      '- Pensamiento de producto API-first',
      '- Portales para desarrolladores',
      '- Documentación técnica',
      '- Guías de estilo para documentación',
      '- Optimización de DX',
      'Cloud y Hosting',
      '- AWS S3',
      '- Netlify',
      '- Vercel',
      '- Cloudflare',
      'Herramientas de Colaboración y PM',
      '- Jira, Confluence, Atlassian',
      '- Notion',
      '- Trello',
      '- ClickUp',
      'Herramientas Creativas',
      '- Photoshop',
      '- Illustrator',
      '- InDesign',
      '- Premiere'
    ],
    standby: 'En espera'
  }
}

const PHOTOGRAPHY_LINKS = {
  en: {
    inline: [
      {
        label: 'art',
        href: 'https://www.instagram.com/ruthannfineart/reel/Cg4-T2rlxbL/'
      },
      {
        label: 'official site',
        href: 'https://www.berlin.de/sen/kultur/kulturpolitik/'
      },
      {
        label: 'quizzes',
        href: 'https://www.buzzfeed.com/fluffyghost682/if-you-can-guess-these-places-from-a-single-photo#:~:text=Mateo%20Krossler%20on%20Unsplash'
      },
      {
        label: 'their labels',
        href: 'https://untappd.com/b/noiseless-sa-01-tropical-neipa/4232965'
      },
      {
        label: 'See photos on Unsplash.',
        href: 'https://unsplash.com/@mateokross'
      }
    ]
  },
  es: {
    inline: [
      {
        label: 'arte',
        href: 'https://www.instagram.com/ruthannfineart/reel/Cg4-T2rlxbL/'
      },
      {
        label: 'sitio oficial',
        href: 'https://www.berlin.de/sen/kultur/kulturpolitik/'
      },
      {
        label: 'quizzes',
        href: 'https://www.buzzfeed.com/fluffyghost682/if-you-can-guess-these-places-from-a-single-photo#:~:text=Mateo%20Krossler%20on%20Unsplash'
      },
      {
        label: 'sus etiquetas',
        href: 'https://untappd.com/b/noiseless-sa-01-tropical-neipa/4232965'
      },
      {
        label: 'Ver fotos en Unsplash.',
        href: 'https://unsplash.com/@mateokross'
      }
    ]
  }
}

const WORK_LINKS = {
  en: [
    {
      label: 'mobile UX',
      href: 'https://www.linkedin.com/feed/update/urn:li:activity:7320465409940344832/'
    },
    {
      label: 'news carousel',
      href: 'https://www.linkedin.com/posts/mateokrossler_dise%C3%B1amos-para-la-calle-el-subte-y-los-platos-activity-7334179486239707136-aAHs'
    },
    {
      label: 'AREX Markets',
      href: 'https://www.fintechfutures.com/embedded-finance/bankable-acquires-embedded-finance-platform-arex-markets'
    },
    {
      label: 'Kavak',
      href: 'https://www.lanacion.com.ar/economia/negocios/kavak-levanta-us300-millones-en-una-ronda-liderada-por-andreesen-horowitz-nid17022026/'
    },
    {
      label: 'Learn more on my LinkedIn.',
      href: 'https://www.linkedin.com/in/mateokrossler/?locale=en-US'
    }
  ],
  es: [
    {
      label: 'UX mobile',
      href: 'https://www.linkedin.com/feed/update/urn:li:activity:7320465409940344832/'
    },
    {
      label: 'carrusel de noticias',
      href: 'https://www.linkedin.com/posts/mateokrossler_dise%C3%B1amos-para-la-calle-el-subte-y-los-platos-activity-7334179486239707136-aAHs'
    },
    {
      label: 'AREX Markets',
      href: 'https://www.fintechfutures.com/embedded-finance/bankable-acquires-embedded-finance-platform-arex-markets'
    },
    {
      label: 'Kavak',
      href: 'https://www.lanacion.com.ar/economia/negocios/kavak-levanta-us300-millones-en-una-ronda-liderada-por-andreesen-horowitz-nid17022026/'
    },
    {
      label: 'Conoce más en mi LinkedIn.',
      href: 'https://www.linkedin.com/in/mateokrossler'
    }
  ]
}

const detectLanguage = () => {
  if (typeof navigator === 'undefined') {
    return 'en'
  }

  return navigator.language?.toLowerCase().startsWith('es') ? 'es' : 'en'
}

const PRESS_FEEDBACK_MS = 110

export default function App() {
  const [language, setLanguage] = useState(detectLanguage)
  const [activeView, setActiveView] = useState(null)
  const [pressedView, setPressedView] = useState(null)
  const pressTimeoutRef = useRef(null)

  const copy = content[language]
  const photographyLinks = PHOTOGRAPHY_LINKS[language]
  const workLinks = WORK_LINKS[language]
  const activeLabel = activeView ? copy.buttons[activeView] : copy.standby

  const displayContent = useMemo(() => {
    if (!activeView) {
      return []
    }

    return copy[activeView]
  }, [activeView, copy])

  const displayBlocks = useMemo(() => {
    if (activeView !== 'work' && activeView !== 'skills') {
      return displayContent.map((text) => ({ type: 'paragraph', text }))
    }

    const blocks = []
    let listItems = []

    displayContent.forEach((line) => {
      if (line.startsWith('- ')) {
        listItems.push(line.slice(2))
        return
      }

      if (listItems.length > 0) {
        blocks.push({ type: 'list', items: listItems })
        listItems = []
      }

      blocks.push({ type: 'paragraph', text: line })
    })

    if (listItems.length > 0) {
      blocks.push({ type: 'list', items: listItems })
    }

    return blocks
  }, [activeView, displayContent])

  const renderTextWithLinks = (text, links, keyPrefix) => {
    const lowerText = text.toLowerCase()
    const matches = []

    links.forEach((link) => {
      const target = link.label.toLowerCase()
      let searchIndex = 0

      while (searchIndex < lowerText.length) {
        const matchIndex = lowerText.indexOf(target, searchIndex)
        if (matchIndex === -1) {
          break
        }

        matches.push({
          start: matchIndex,
          end: matchIndex + target.length,
          href: link.href
        })
        searchIndex = matchIndex + target.length
      }
    })

    matches.sort((a, b) => {
      if (a.start !== b.start) {
        return a.start - b.start
      }

      return b.end - b.start - (a.end - a.start)
    })

    const nonOverlapping = []
    let cursor = 0

    matches.forEach((match) => {
      if (match.start >= cursor) {
        nonOverlapping.push(match)
        cursor = match.end
      }
    })

    const parts = []
    let textCursor = 0

    nonOverlapping.forEach((match, index) => {
      if (match.start > textCursor) {
        parts.push(text.slice(textCursor, match.start))
      }

      parts.push(
        <a
          key={`${keyPrefix}-${match.start}-${index}`}
          className="display-link display-link-inline"
          href={match.href}
          target="_blank"
          rel="noreferrer"
        >
          {text.slice(match.start, match.end)}
        </a>
      )

      textCursor = match.end
    })

    if (textCursor < text.length) {
      parts.push(text.slice(textCursor))
    }

    return parts
  }

  useEffect(() => {
    return () => {
      if (pressTimeoutRef.current) {
        window.clearTimeout(pressTimeoutRef.current)
      }
    }
  }, [])

  const triggerPressFeedback = (view) => {
    if (pressTimeoutRef.current) {
      window.clearTimeout(pressTimeoutRef.current)
    }

    setPressedView(view)
    pressTimeoutRef.current = window.setTimeout(() => {
      setPressedView(null)
    }, PRESS_FEEDBACK_MS)
  }

  const renderLanguageControl = (layoutClassName) => (
    <div className={`language-control ${layoutClassName}`}>
      <span className="toggle-label">EN</span>
      <div className="language-checkbox">
        <input
          type="checkbox"
          checked={language === 'es'}
          aria-label="Toggle language"
          onChange={(event) => setLanguage(event.target.checked ? 'es' : 'en')}
        />
      </div>
      <span className="toggle-label">ES</span>
    </div>
  )

  return (
    <>
      <div className="device-shell">
        <main className="layout">
        <section className="left-column">
        <div className="left-content">
          <h1>{'Mateo Krössler'}</h1>
          {copy.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className="actions">
            <div className="action-shell">
              <button
                type="button"
                aria-pressed={activeView === 'work'}
                className={`action-button action-button-work ${activeView === 'work' ? 'is-active' : ''} ${pressedView === 'work' ? 'is-pressed' : ''}`}
                onClick={() => {
                  triggerPressFeedback('work')
                  setActiveView('work')
                }}
              >
                <span className="action-button-text">{copy.buttons.work}</span>
              </button>
              <button
                type="button"
                aria-pressed={activeView === 'skills'}
                className={`action-button action-button-skills ${activeView === 'skills' ? 'is-active' : ''} ${pressedView === 'skills' ? 'is-pressed' : ''}`}
                onClick={() => {
                  triggerPressFeedback('skills')
                  setActiveView('skills')
                }}
              >
                <span className="action-button-text">{copy.buttons.skills}</span>
              </button>
              <button
                type="button"
                aria-pressed={activeView === 'photography'}
                className={`action-button action-button-photography ${activeView === 'photography' ? 'is-active' : ''} ${pressedView === 'photography' ? 'is-pressed' : ''}`}
                onClick={() => {
                  triggerPressFeedback('photography')
                  setActiveView('photography')
                }}
              >
                <span className="action-button-text">{copy.buttons.photography}</span>
              </button>
            </div>
          </div>
        </div>

        <div className="speaker-grille" aria-hidden="true" />

        {renderLanguageControl('desktop-language')}
      </section>

      <section className="display" aria-label="Display panel">
        <div className="display-frame">
          <div className="display-status">
            <span className={`status-dot ${activeView ? 'is-on' : ''}`} aria-hidden="true" />
            <span>{activeLabel}</span>
          </div>
          <div className="display-content">
            {displayBlocks.map((block, index) => {
              if (block.type === 'list') {
                return (
                  <ul className="display-list" key={`${activeView}-${language}-list-${index}`}>
                    {block.items.map((item, itemIndex) => (
                      <li key={`${activeView}-${language}-item-${index}-${itemIndex}`}>
                        {activeView === 'work'
                          ? renderTextWithLinks(item, workLinks, `${language}-${index}-${itemIndex}`)
                          : item}
                      </li>
                    ))}
                  </ul>
                )
              }

              return (
                <p key={`${activeView}-${language}-${index}`}>
                  {activeView === 'photography'
                    ? renderTextWithLinks(block.text, photographyLinks.inline, `${language}-${index}`)
                    : activeView === 'work'
                      ? renderTextWithLinks(block.text, workLinks, `${language}-${index}`)
                      : block.text}
                </p>
              )
            })}
          </div>
        </div>
        </section>
        {renderLanguageControl('mobile-language')}
      </main>
      <div className="device-power-tab" aria-hidden="true" />
      </div>
    </>
  )
}
