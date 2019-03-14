import { useState, useEffect } from 'react'

interface FetchError {
  status: number;
}

interface FetchState<T> {
  loading: boolean;
  error?: FetchError;
  data?: T;
}

export const useRequest = <T extends any>(url: string): FetchState<T> => {
  const [state, setState] = useState<FetchState<T>>({ 
    loading: true 
  })

  useEffect(() => {
    (async () => {
      const response = await fetch(url)
      console.log('[fetch] Fetching data from ', url)
      if (response.ok) {
        const data = await response.json()
        setState({ loading: false, data })
      } else {
        setState({ error: { status: response.status }, loading: false })
      }
    })()
  }, [url])

  return state
}