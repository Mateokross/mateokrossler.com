import React, { useEffect, useLayoutEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { PostHogProvider } from '@posthog/react'
import App from './App'
import './index.css'

const posthogOptions = {
  api_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST,
  defaults: '2026-01-30'
}

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

function Root() {
  useLayoutEffect(() => {
    if (typeof document === 'undefined') {
      return
    }

    document.body.classList.remove('page-loading')
    document.body.classList.add('page-ready')
  }, [])

  useEffect(() => {
    if (typeof document === 'undefined' || typeof window === 'undefined') {
      return undefined
    }

    let frameId = null

    const syncViewportHeight = () => {
      frameId = null
      const viewportHeight = window.visualViewport?.height ?? window.innerHeight
      document.documentElement.style.setProperty('--app-viewport-height', `${Math.round(viewportHeight)}px`)
    }

    const scheduleSync = () => {
      if (frameId !== null) {
        return
      }

      frameId = window.requestAnimationFrame(syncViewportHeight)
    }

    scheduleSync()

    window.addEventListener('resize', scheduleSync)
    window.addEventListener('orientationchange', scheduleSync)
    window.visualViewport?.addEventListener('resize', scheduleSync)
    window.visualViewport?.addEventListener('scroll', scheduleSync)

    return () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId)
      }

      window.removeEventListener('resize', scheduleSync)
      window.removeEventListener('orientationchange', scheduleSync)
      window.visualViewport?.removeEventListener('resize', scheduleSync)
      window.visualViewport?.removeEventListener('scroll', scheduleSync)
    }
  }, [])

  useEffect(() => {
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
  }, [])

  return <App />
}

const mountApp = () => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <PostHogProvider
        apiKey={import.meta.env.VITE_PUBLIC_POSTHOG_KEY}
        options={posthogOptions}
      >
        <Root />
      </PostHogProvider>
    </React.StrictMode>
  )
}

const waitForFonts = () => {
  if (typeof document === 'undefined' || !('fonts' in document)) {
    return Promise.resolve()
  }

  const FONT_WAIT_TIMEOUT_MS = 2200
  const requiredFaces = [
    document.fonts.load("400 1rem 'Archivo'"),
    document.fonts.load("700 1rem 'Archivo'"),
    document.fonts.load("900 1rem 'Doto'")
  ]

  return Promise.race([
    Promise.allSettled(requiredFaces),
    new Promise((resolve) => {
      window.setTimeout(resolve, FONT_WAIT_TIMEOUT_MS)
    })
  ])
}

waitForFonts().finally(mountApp)
