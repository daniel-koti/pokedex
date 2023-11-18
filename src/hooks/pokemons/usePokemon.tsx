import { Pokemon } from '@/services/Pokemon.service'
import { useQuery } from '@tanstack/react-query'

const pokemon = new Pokemon()

export function usePokemon(name: string) {
  return useQuery({
    queryKey: ['pokemon'],
    queryFn: () => pokemon.getPokemon(name),
  })
}
