import { Order } from '@/pages/home/components/pokemons'
import { Pokemon } from '@/services/Pokemon.service'
import { getOffset } from '@/utils/getOffset'
import { useInfiniteQuery } from '@tanstack/react-query'

const pokemon = new Pokemon()

export function usePokemons(orderBy?: Order) {
  return useInfiniteQuery({
    queryKey: ['pokemons'],
    queryFn: ({ pageParam }) => pokemon.getPokemons(pageParam, orderBy),
    initialPageParam: '0',
    getNextPageParam: (page) =>
      getOffset(page.next ? page.next : '') || undefined,
  })
}
