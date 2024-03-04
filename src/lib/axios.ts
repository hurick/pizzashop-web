import axios from 'axios'

import { env } from './env'

export const api = axios.create({
  baseURL: env.VITE_API_URL,
  withCredentials: true,
})

if (env.VITE_ENABLE_API_DELAY) {
  const DELAY_TIMER = Math.round(Math.random() * 3000)

  api.interceptors.request.use(async (config) => {
    await new Promise((resolve) => setTimeout(resolve, DELAY_TIMER))
    return config
  })
}
