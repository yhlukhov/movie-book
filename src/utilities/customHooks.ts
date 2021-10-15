import { useRef, useEffect, useCallback } from 'react'

export const useTimeout = (callback:any, timeout:number) => {
  const ref = useRef(null as null | NodeJS.Timeout)

  const cancel = useCallback(() => {
    if (ref.current) {
      clearTimeout(ref.current)
      ref.current = null
    }
  }, [])

  useEffect(()=>{
    ref.current = setTimeout(callback, timeout)
    return cancel
  })

  return cancel
}