import { useInView } from 'react-intersection-observer'
import { Pokemon } from '@/components/pokemon'

import { SkeletonPokemon } from './skeleton'
import { usePokemons } from '@/hooks/use-pokemons'
import React, { useEffect } from 'react'
import { CircleDashed } from 'lucide-react'

export type Order = 'higher' | 'heaviest' | 'lower' | 'lighter'

interface PokemonsProps {
  order?: Order
}

export function Pokemons({ order }: PokemonsProps) {
  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
    refetch,
  } = usePokemons(order)

  const { ref, inView } = useInView()

  useEffect(() => {
    if (inView) {
      fetchNextPage()
    }

    if (order && order.length > 0) {
      refetch()
    }
  }, [inView, fetchNextPage, order, refetch])

  useEffect(() => {
    if (!order) {
      refetch()
    }
  }, [order, refetch])

  return (
    <>
      {isLoading || !data ? (
        <SkeletonPokemon />
      ) : error ? (
        <span>Erro ao carregar pokemons</span>
      ) : (
        <div className="sm:md-6 mt-8 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-4">
          {data.pages.map((page) => (
            <React.Fragment key={page.next}>
              {page.pokemons.map((pokemon) => (
                <Pokemon key={pokemon.id} data={pokemon} />
              ))}
            </React.Fragment>
          ))}
        </div>
      )}

      <div className="mt-4">
        <span className="flex items-center gap-2 text-foreground" ref={ref}>
          {isFetchingNextPage || !order ? (
            <>
              Loading more pokemons{' '}
              <CircleDashed className="h-5 w-5 animate-spin text-foreground" />
            </>
          ) : hasNextPage ? (
            ''
          ) : (
            'Nothing more to load'
          )}
        </span>
      </div>
    </>
  )
}
