import { Order } from '@/pages/home/components/pokemons'
import { getPokemons } from '@/services/pokemons/get-pokemons.service'
import { getOffset } from '@/utils/getOffset'
import { useInfiniteQuery } from '@tanstack/react-query'

export function usePokemons(orderBy?: Order) {
  return useInfiniteQuery({
    queryKey: ['pokemons'],
    queryFn: ({ pageParam }) => getPokemons(pageParam, orderBy),
    initialPageParam: '0',
    getNextPageParam: (page) =>
      getOffset(page.next ? page.next : '') || undefined,
  })
}
