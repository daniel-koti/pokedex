import { getPokemonByName } from '@/services/pokemons/get-pokemon-by-name.service'
import { useQuery } from '@tanstack/react-query'

export function usePokemon(name: string) {
  return useQuery({
    queryKey: ['pokemon'],
    queryFn: () => getPokemonByName(name),
  })
}
