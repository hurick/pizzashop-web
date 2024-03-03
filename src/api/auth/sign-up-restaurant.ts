import { api } from '@/lib/axios'

export interface SignUpRestaurantBody {
  restaurantName: string
  managerName: string
  email: string
  phone: string
}

export const signUpRestaurant = async ({
  restaurantName,
  managerName,
  email,
  phone,
}: SignUpRestaurantBody) => {
  await api.post('/restaurants', { restaurantName, managerName, email, phone })
}
