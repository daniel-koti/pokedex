import { getPokemons } from '@/services/pokemons/fetch'
import { getOffset } from '@/utils/getOffset'
import { useInfiniteQuery } from '@tanstack/react-query'

export function usePokemons() {
  return useInfiniteQuery({
    queryKey: ['pokemons'],
    queryFn: ({ pageParam }) => getPokemons(pageParam),
    initialPageParam: '0',
    getNextPageParam: (page) =>
      getOffset(page.next ? page.next : '') || undefined,
  })
}
