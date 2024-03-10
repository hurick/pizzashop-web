import { z } from 'zod'

const envSchema = z.object({
  MODE: z.enum(['dev', 'test', 'prod']),
  VITE_API_URL: z.string(),
  VITE_ENABLE_API_DELAY: z.string().transform((value) => value === 'true'),
})

export const env = envSchema.parse(import.meta.env)
