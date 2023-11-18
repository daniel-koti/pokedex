import { Pokemon } from '@/services/Pokemon.service'
import { getOffset } from '@/utils/getOffset'
import { useInfiniteQuery } from '@tanstack/react-query'

const pokemon = new Pokemon()

export function usePokemons() {
  return useInfiniteQuery({
    queryKey: ['pokemons'],
    queryFn: ({ pageParam }) => pokemon.getPokemons(pageParam),
    initialPageParam: '0',
    getNextPageParam: (page) =>
      getOffset(page.next ? page.next : '') || undefined,
  })
}
