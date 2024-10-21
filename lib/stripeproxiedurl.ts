import { getSession } from 'next-auth/react'

const buildProxiedUrl = (finalUrl: string, email: string, id: string) => {
  const proxyUrl = process.env.NEXT_PUBLIC_PROXY_URL
  return (
    finalUrl &&
    email &&
    id &&
    `${proxyUrl}?url=${finalUrl}&email=${email}&id=${id}`
  )
}

export { buildProxiedUrl }
