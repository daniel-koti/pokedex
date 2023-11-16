import { Pokemon } from '@/components/pokemon'

import { SkeletonPokemon } from './skeleton'
import { usePokemons } from '@/hooks/pokemons/usePokemons'

export function Pokemons() {
  const { data, isLoading, error } = usePokemons()

  return (
    <>
      {isLoading || !data ? (
        <SkeletonPokemon />
      ) : error ? (
        <span>Erro ao carregar pokemons</span>
      ) : (
        <div className="mt-8 grid grid-cols-3 gap-12">
          {data?.pokemons.map((pokemon) => (
            <Pokemon key={pokemon.id} data={pokemon} />
          ))}
        </div>
      )}
    </>
  )
}
