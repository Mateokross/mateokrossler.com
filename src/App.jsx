import { useEffect, useMemo, useRef, useState } from 'react'

const content = {
  en: {
    intro: [
      'Leading Product & Data at Powerbeans, an AI media and AdTech startup. 6+ years of experience building products.',
      'Extremely curious. Hobby photographer. Fan of nature, traveling, cinema, and reading.'
    ],
    buttons: {
      work: 'Work',
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
    standby: 'Standby'
  },
  es: {
    intro: [
      'Liderando Producto y Data en Powerbeans, una startup de IA y AdTech. +6 años construyendo productos digitales.',
      'Extremadamente curioso. Fotógrafo de hobby. Fan de la naturaleza, viajar, el cine y la lectura.'
    ],
    buttons: {
      work: 'Trabajo',
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
const NOISE_DEFAULTS = {
  size: 320,
  opacity: 0.5,
  contrast: 1.72,
  brightness: 1,
  blur: 0
}

export default function App() {
  const [language, setLanguage] = useState(detectLanguage)
  const [activeView, setActiveView] = useState(null)
  const [pressedView, setPressedView] = useState(null)
  const [noiseSettings, setNoiseSettings] = useState(NOISE_DEFAULTS)
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
    if (activeView !== 'work') {
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

  const updateNoiseSetting = (key, value) => {
    setNoiseSettings((current) => ({
      ...current,
      [key]: Number(value)
    }))
  }

  return (
    <>
      <div className="device-shell">
        <main
          className="layout"
          style={{
            '--device-noise-size': `${noiseSettings.size}px`,
            '--device-noise-opacity': noiseSettings.opacity,
            '--device-noise-contrast': noiseSettings.contrast,
            '--device-noise-brightness': noiseSettings.brightness,
            '--device-noise-blur': `${noiseSettings.blur}px`
          }}
        >
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
            </div>
            <div className="action-shell">
              <button
                type="button"
                aria-pressed={activeView === 'photography'}
                className={`action-button action-button-photo ${activeView === 'photography' ? 'is-active' : ''} ${pressedView === 'photography' ? 'is-pressed' : ''}`}
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
                        {renderTextWithLinks(item, workLinks, `${language}-${index}-${itemIndex}`)}
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

      <aside className="noise-tuner" aria-label="Noise tuner">
        <p>Noise Tuner (temporary)</p>
        <label>
          Size
          <input
            type="range"
            min="80"
            max="320"
            step="1"
            value={noiseSettings.size}
            onChange={(event) => updateNoiseSetting('size', event.target.value)}
          />
          <span>{noiseSettings.size}px</span>
        </label>
        <label>
          Opacity
          <input
            type="range"
            min="0.05"
            max="0.7"
            step="0.01"
            value={noiseSettings.opacity}
            onChange={(event) => updateNoiseSetting('opacity', event.target.value)}
          />
          <span>{noiseSettings.opacity.toFixed(2)}</span>
        </label>
        <label>
          Contrast
          <input
            type="range"
            min="0.6"
            max="1.8"
            step="0.01"
            value={noiseSettings.contrast}
            onChange={(event) => updateNoiseSetting('contrast', event.target.value)}
          />
          <span>{noiseSettings.contrast.toFixed(2)}</span>
        </label>
        <label>
          Brightness
          <input
            type="range"
            min="0.6"
            max="1.6"
            step="0.01"
            value={noiseSettings.brightness}
            onChange={(event) => updateNoiseSetting('brightness', event.target.value)}
          />
          <span>{noiseSettings.brightness.toFixed(2)}</span>
        </label>
        <label>
          Blur
          <input
            type="range"
            min="0"
            max="1.4"
            step="0.01"
            value={noiseSettings.blur}
            onChange={(event) => updateNoiseSetting('blur', event.target.value)}
          />
          <span>{noiseSettings.blur.toFixed(2)}px</span>
        </label>
        <button type="button" onClick={() => setNoiseSettings(NOISE_DEFAULTS)}>
          Reset
        </button>
      </aside>
    </>
  )
}
