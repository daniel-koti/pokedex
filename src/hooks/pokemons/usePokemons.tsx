import { getPokemons } from '@/services/pokemons/fetch'
import { useQuery } from '@tanstack/react-query'

export function usePokemons() {
  return useQuery({
    queryKey: ['pokemons'],
    queryFn: getPokemons,
  })
}
