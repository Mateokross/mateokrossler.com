import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ButtonDesignLab from './ButtonDesignLab'
import './index.css'

const createUiClickPlayer = () => {
  let audioContext = null
  let noiseBuffer = null

  const createNoiseBuffer = (context) => {
    const frameCount = Math.floor(context.sampleRate * 0.03)
    const buffer = context.createBuffer(1, frameCount, context.sampleRate)
    const data = buffer.getChannelData(0)

    for (let index = 0; index < frameCount; index += 1) {
      data[index] = (Math.random() * 2 - 1) * (1 - index / frameCount)
    }

    return buffer
  }

  return () => {
    if (typeof window === 'undefined') {
      return
    }

    const AudioContextClass = window.AudioContext || window.webkitAudioContext
    if (!AudioContextClass) {
      return
    }

    if (!audioContext) {
      audioContext = new AudioContextClass()
      noiseBuffer = createNoiseBuffer(audioContext)
    }

    if (audioContext.state === 'suspended') {
      audioContext.resume().catch(() => {})
    }

    const now = audioContext.currentTime
    const masterGain = audioContext.createGain()
    masterGain.gain.setValueAtTime(0.28, now)
    masterGain.connect(audioContext.destination)

    const transient = audioContext.createBufferSource()
    transient.buffer = noiseBuffer
    const transientHighpass = audioContext.createBiquadFilter()
    transientHighpass.type = 'highpass'
    transientHighpass.frequency.setValueAtTime(1800, now)
    const transientBandpass = audioContext.createBiquadFilter()
    transientBandpass.type = 'bandpass'
    transientBandpass.frequency.setValueAtTime(2600, now)
    transientBandpass.Q.setValueAtTime(1.1, now)
    const transientGain = audioContext.createGain()
    transientGain.gain.setValueAtTime(0.0001, now)
    transientGain.gain.exponentialRampToValueAtTime(0.19, now + 0.001)
    transientGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.014)

    transient.connect(transientHighpass)
    transientHighpass.connect(transientBandpass)
    transientBandpass.connect(transientGain)
    transientGain.connect(masterGain)
    transient.start(now)
    transient.stop(now + 0.02)

    const bodyOscillator = audioContext.createOscillator()
    bodyOscillator.type = 'triangle'
    bodyOscillator.frequency.setValueAtTime(190, now)
    bodyOscillator.frequency.exponentialRampToValueAtTime(125, now + 0.042)
    const bodyFilter = audioContext.createBiquadFilter()
    bodyFilter.type = 'lowpass'
    bodyFilter.frequency.setValueAtTime(700, now)
    bodyFilter.Q.setValueAtTime(0.8, now)
    const bodyGain = audioContext.createGain()
    bodyGain.gain.setValueAtTime(0.0001, now)
    bodyGain.gain.exponentialRampToValueAtTime(0.13, now + 0.002)
    bodyGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.052)

    bodyOscillator.connect(bodyFilter)
    bodyFilter.connect(bodyGain)
    bodyGain.connect(masterGain)
    bodyOscillator.start(now + 0.001)
    bodyOscillator.stop(now + 0.058)
  }
}

const playUiClick = createUiClickPlayer()

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
    const handleClickSound = (event) => {
      if (!(event.target instanceof Element)) {
        return
      }

      const control = event.target.closest('button,[role="switch"],input[type="checkbox"]')
      if (!control || control.hasAttribute('disabled')) {
        return
      }

      playUiClick()
    }

    document.addEventListener('click', handleClickSound)
    return () => {
      document.removeEventListener('click', handleClickSound)
    }
  }, [])

  if (page === 'button-lab') {
    return <ButtonDesignLab />
  }

  return <App />
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
)
