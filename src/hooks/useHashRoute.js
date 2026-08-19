import { useCallback, useEffect, useState } from 'react'

const PARAM = 'project'

function readSlugFromHash() {
  const hash = window.location.hash.replace(/^#/, '')
  const params = new URLSearchParams(hash)
  return params.get(PARAM)
}

export function useHashRoute() {
  const [slug, setSlug] = useState(readSlugFromHash)

  useEffect(() => {
    const onHashChange = () => setSlug(readSlugFromHash())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const open = useCallback((nextSlug) => {
    window.location.hash = `${PARAM}=${nextSlug}`
  }, [])

  const close = useCallback(() => {
    const url = new URL(window.location.href)
    url.hash = ''
    window.history.pushState(null, '', url.pathname + url.search)
    setSlug(null)
  }, [])

  return { slug, open, close }
}
