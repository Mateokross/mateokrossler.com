import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ButtonDesignLab from './ButtonDesignLab'
import './index.css'

const createAudioPlayer = (sourcePath, volume = 0.55) => {
  let baseAudio = null

  return () => {
    if (typeof window === 'undefined' || typeof Audio === 'undefined') {
      return
    }

    if (!baseAudio) {
      baseAudio = new Audio(sourcePath)
      baseAudio.preload = 'auto'
      baseAudio.volume = volume
    }

    const clip = baseAudio.cloneNode()
    clip.volume = baseAudio.volume
    clip.play().catch(() => {})
  }
}

const playButtonSound = createAudioPlayer('/sounds/button.ogg', 0.58)
const playToggleSound = createAudioPlayer('/sounds/toggle.ogg', 0.55)

const getPage = () => {
  const path = window.location.pathname
  const hash = window.location.hash

  if (path === '/button-lab' || hash === '#/button-lab') {
    return 'button-lab'
  }

  return 'home'
}

function Root() {
  const [page, setPage] = useState(getPage)

  useEffect(() => {
    const handleRouteChange = () => setPage(getPage())

    window.addEventListener('popstate', handleRouteChange)
    window.addEventListener('hashchange', handleRouteChange)

    return () => {
      window.removeEventListener('popstate', handleRouteChange)
      window.removeEventListener('hashchange', handleRouteChange)
    }
  }, [])

  useEffect(() => {
    if (page !== 'home') {
      return undefined
    }

    const handleClickSound = (event) => {
      if (!(event.target instanceof Element)) {
        return
      }

      const toggleControl = event.target.closest('input[type="checkbox"]')
      if (toggleControl && !toggleControl.hasAttribute('disabled')) {
        playToggleSound()
        return
      }

      const buttonControl = event.target.closest('button')
      if (!buttonControl || buttonControl.hasAttribute('disabled')) {
        return
      }

      playButtonSound()
    }

    document.addEventListener('click', handleClickSound)
    return () => {
      document.removeEventListener('click', handleClickSound)
    }
  }, [page])

  if (page === 'button-lab') {
    return <ButtonDesignLab />
  }

  return <App />
}

const mountApp = () => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Root />
    </React.StrictMode>
  )
}

mountApp()
