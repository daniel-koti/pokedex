import { getGlobalPokemons } from '@/services/pokemons/get-global-pokemons.service'
import { useQuery } from '@tanstack/react-query'

export function useGlobalPokemons() {
  const { data, error, isLoading } = useQuery({
    queryKey: ['global-pokemons'],
    queryFn: getGlobalPokemons,
    staleTime: 1000 * 60 * 60 * 24, // 1 day
  })

  return {
    data,
    error,
    isLoading,
  }
}
