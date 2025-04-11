// hooks/useVoiceSearch.ts
import { useState, useCallback } from "react"

interface SpeechRecognitionEvent extends Event {
  results: {
    [index: number]: {
      [index: number]: {
        transcript: string;
      };
    };
  };
}

interface SpeechRecognitionErrorEvent extends Event {
  error: string;
}

interface SpeechRecognition extends EventTarget {
  continuous: boolean;
  lang: string;
  interimResults: boolean;
  maxAlternatives: number;
  onstart: (() => void) | null;
  onend: (() => void) | null;
  onerror: ((event: SpeechRecognitionErrorEvent) => void) | null;
  onresult: ((event: SpeechRecognitionEvent) => void) | null;
  start: () => void;
  stop: () => void;
}

declare global {
  interface Window {
    SpeechRecognition: new () => SpeechRecognition;
    webkitSpeechRecognition: new () => SpeechRecognition;
  }
}

const useVoiceSearch = () => {
  const [listening, setListening] = useState(false)

  const isSupported = typeof window !== "undefined" && (
    "SpeechRecognition" in window || "webkitSpeechRecognition" in window
  )

  const startListening = useCallback((onResult: (text: string) => void) => {
    if (!isSupported) {
      alert("Voice search is not supported on this browser.")
      return
    }
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

    if (!SpeechRecognition) {
      alert("Speech recognition is not supported in this browser.")
      return
    }

    const recognition = new SpeechRecognition()
    recognition.continuous = false
    recognition.lang = "en-US"
    recognition.interimResults = false
    recognition.maxAlternatives = 1

    let silenceTimeout: NodeJS.Timeout

    recognition.onstart = () => {
      setListening(true)

     
      silenceTimeout = setTimeout(() => {
        recognition.stop()
      }, 5000)
    }

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      clearTimeout(silenceTimeout)
      const transcript = event.results[0][0].transcript
      onResult(transcript)
      recognition.stop()
    }

    recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
      console.error("Speech recognition error:", event)
      clearTimeout(silenceTimeout)
      setListening(false)
    }

    recognition.onend = () => {
      clearTimeout(silenceTimeout)
      setListening(false)
    }

    recognition.start()
  }, [isSupported])

  return { startListening, listening, isSupported }
}

export default useVoiceSearch
