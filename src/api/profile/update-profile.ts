import { api } from '@/lib/axios'

export interface UpdateProfileResponse {
  name: string
  description: string | null
}

export const updateProfile = async ({
  name,
  description,
}: UpdateProfileResponse) => {
  const response = await api.put<UpdateProfileResponse>('/profile', {
    name,
    description,
  })

  return response.data
}
