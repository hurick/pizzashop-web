import { api } from '@/lib/axios'

export interface GetManagedRestaurantResponse {
  id: string
  name: string
  createdAt: Date | null
  updatedAt: Date | null
  managerId: string | null
  description: string | null
}

export const getManagedRestaurant = async () => {
  const response = await api.get<GetManagedRestaurantResponse>(
    '/managed-restaurant',
  )

  return response.data
}
