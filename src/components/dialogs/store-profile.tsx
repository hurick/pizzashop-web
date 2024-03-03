import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { Loader2 } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import {
  getManagedRestaurant,
  GetManagedRestaurantResponse,
} from '@/api/restaurant/get-restaurant'
import { updateProfile } from '@/api/profile/update-profile'

import { Button } from '../ui/button'
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Textarea } from '../ui/textarea'

const StoreProfileSchema = z.object({
  name: z.string().min(1),
  description: z.string().nullable(),
})

type StoreProfile = z.infer<typeof StoreProfileSchema>

export const StoreProfile = () => {
  const queryClient = useQueryClient()

  const { data: managedRestaurant } = useQuery({
    queryKey: ['managed-restaurant'],
    queryFn: getManagedRestaurant,
    staleTime: Infinity,
  })

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<StoreProfile>({
    resolver: zodResolver(StoreProfileSchema),
    values: {
      name: managedRestaurant?.name ?? '',
      description: managedRestaurant?.description ?? '',
    },
  })

  const updateManagedRestaurantCache = ({
    name,
    description,
  }: StoreProfile) => {
    const cached = queryClient.getQueryData<GetManagedRestaurantResponse>([
      'managed-restaurant',
    ])

    if (cached) {
      queryClient.setQueryData<GetManagedRestaurantResponse>(
        ['managed-restaurant'],
        {
          ...cached,
          name,
          description,
        },
      )
    }

    return { cached }
  }

  const { mutateAsync: updateProfileFn } = useMutation({
    mutationFn: updateProfile,
    onMutate({ name, description }) {
      const { cached } = updateManagedRestaurantCache({ name, description })
      return { previousProfileData: cached }
    },
    onError(_error, _variables, context) {
      context?.previousProfileData &&
        updateManagedRestaurantCache(context.previousProfileData)
    },
  })

  const handleNewStoreProfileData = async ({
    name,
    description,
  }: StoreProfile) => {
    try {
      await updateProfileFn({ name, description })
      toast.success('Perfil atualizado com sucesso')
    } catch (error) {
      toast.error('Ocorreu um erro ao atualizar o perfil')
    }
  }

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Perfil da loja</DialogTitle>
        <DialogDescription>
          Atualize as informações do seu estabelecimento visíveis ao seu cliente
        </DialogDescription>
      </DialogHeader>

      <form action="POST" onSubmit={handleSubmit(handleNewStoreProfileData)}>
        <div className="space-y-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="name">
              Nome
            </Label>
            <Input {...register('name')} id="name" className="col-span-3" />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="description">
              Descrição
            </Label>
            <Textarea
              {...register('description')}
              id="description"
              className="col-span-3"
            />
          </div>
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="ghost" type="button">
              Cancelar
            </Button>
          </DialogClose>
          <Button disabled={isSubmitting} variant="success" type="submit">
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 animate-spin" />
                Salvar
              </>
            ) : (
              'Salvar'
            )}
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  )
}
