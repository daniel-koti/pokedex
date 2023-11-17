import { useInView } from 'react-intersection-observer'
import { Pokemon } from '@/components/pokemon'

import { SkeletonPokemon } from './skeleton'
import { usePokemons } from '@/hooks/pokemons/usePokemons'
import React, { useEffect } from 'react'
import { CircleDashed } from 'lucide-react'

export function Pokemons() {
  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = usePokemons()

  const { ref, inView } = useInView()

  useEffect(() => {
    if (inView) {
      fetchNextPage()
    }
  }, [inView, fetchNextPage])

  return (
    <>
      {isLoading || !data ? (
        <SkeletonPokemon />
      ) : error ? (
        <span>Erro ao carregar pokemons</span>
      ) : (
        <div className="mt-8 grid grid-cols-3 gap-12">
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
          {isFetchingNextPage ? (
            <>
              Loading more pokemons{' '}
              <CircleDashed className="h-5 w-5 animate-spin text-foreground" />
            </>
          ) : hasNextPage ? (
            'Load pokemons'
          ) : (
            'Nothing more to load'
          )}
        </span>
      </div>
    </>
  )
}
