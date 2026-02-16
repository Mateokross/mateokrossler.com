import { useEffect, useMemo, useRef, useState } from 'react'

const content = {
  en: {
    intro: [
      'Leading Product & Data at Powerbeans, an AI startup. 6+ years of experience building products.',
      'Extremely curious. Hobby photographer. Fan of nature, traveling, cinema, and reading.'
    ],
    buttons: {
      work: 'Work',
      photography: 'Photography'
    },
    work: [
      'Product Manager with 6+ years of experience building B2B and B2C products.',
      'Currently leading product development at PowerBeans, an AI and media startup, where I helped scale an audio player to 1.5B+ views and designed new experiences like a news carousel (2x engagement) and a redesigned mobile UX (+55% CTR).',
      'Previously launched a lending and invoice financing API at AREX Markets (B2B fintech), and led the design and rollout of regional sales systems at Kavak, boosting monthly sales by 13%. I also developed products from scratch as a freelancer, including a virtual fair platform with 10,000+ international users.',
      'I enjoy turning ideas into real products, working closely with design, data, and engineering.'
    ],
    photography: [
      "I published some of my pictures on Unsplash, where I've accumulated more than 6M views and 80K downloads.",
      'They have been used on 100+ websites, including the official site of the city of Berlin. Some people made art with them, Buzzfeed used one on a quiz, and a beer company put one on their labels.'
    ],
    placeholder: 'Select Work or Photography.',
    standby: 'Standby'
  },
  es: {
    intro: [
      'Liderando Producto y Data en Powerbeans, una startup de IA y AdTech. +6 a\u00F1os construyendo productos digitales.',
      'Extremadamente curioso. Fot\u00F3grafo de hobby. Fan de la naturaleza, viajar, el cine y la lectura.'
    ],
    buttons: {
      work: 'Trabajo',
      photography: 'Fotograf\u00EDa'
    },
    work: [
      'Product Manager con m\u00E1s de 6 a\u00F1os de experiencia construyendo productos B2B y B2C.',
      'Actualmente lidero el desarrollo de producto en PowerBeans, una startup de IA y medios, donde ayud\u00E9 a escalar un reproductor de audio a m\u00E1s de 1.5B de visualizaciones y dise\u00F1\u00E9 nuevas experiencias como un carrusel de noticias (2x engagement) y un redise\u00F1o de UX mobile (+55% CTR).',
      'Anteriormente lanc\u00E9 una API de lending y financiaci\u00F3n de facturas en AREX Markets (fintech B2B), y lider\u00E9 el dise\u00F1o e implementaci\u00F3n de sistemas regionales de ventas en Kavak, aumentando las ventas mensuales un 13%. Tambi\u00E9n desarroll\u00E9 productos desde cero como freelancer, incluyendo una plataforma de ferias virtuales con m\u00E1s de 10,000 usuarios internacionales.',
      'Disfruto convertir ideas en productos reales, trabajando de cerca con dise\u00F1o, data e ingenier\u00EDa.'
    ],
    photography: [
      'Publiqu\u00E9 algunas de mis fotos en Unsplash, donde acumul\u00E9 m\u00E1s de 6M de visualizaciones y 80K descargas.',
      'Se han usado en m\u00E1s de 100 sitios web, incluyendo el sitio oficial de la ciudad de Berl\u00EDn. Algunas personas hicieron arte con ellas, Buzzfeed us\u00F3 una en un quiz, y una cervecera puso una en sus etiquetas.'
    ],
    placeholder: 'Selecciona Trabajo o Fotograf\u00EDa.',
    standby: 'En espera'
  }
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
  const activeLabel = activeView ? copy.buttons[activeView] : copy.standby

  const displayContent = useMemo(() => {
    if (!activeView) {
      return []
    }

    return copy[activeView]
  }, [activeView, copy])

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
    <main className="layout">
      <section className="left-column">
        <div className="left-content">
          <h1>{'Mateo Kr\u00F6ssler'}</h1>
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
            {displayContent.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>
      {renderLanguageControl('mobile-language')}
    </main>
  )
}
