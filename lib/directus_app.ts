import { createDirectus, rest, staticToken } from '@directus/sdk'

import { CustomDirectusTypes } from '@/types/directus'

const directus_app = createDirectus<CustomDirectusTypes>(
  process.env.NEXT_PUBLIC_DIRECTUS_URL as string
)
  .with(staticToken(process.env.DIRECTUS_TOKEN as string))
  .with(rest())

export const directus_nocache = createDirectus<CustomDirectusTypes>(
  process.env.NEXT_PUBLIC_DIRECTUS_URL as string
)
  .with(staticToken(process.env.DIRECTUS_TOKEN as string))
  .with(rest({ onRequest: options => ({ ...options, cache: 'no-store' }) }))

export const directus_revalidate_hourly = createDirectus<CustomDirectusTypes>(
  process.env.NEXT_PUBLIC_DIRECTUS_URL as string
)
  .with(staticToken(process.env.DIRECTUS_TOKEN as string))
  .with(
    rest({ onRequest: options => ({ ...options, next: { revalidate: 3600 } }) })
  )

export default directus_app
