import { Pokemon } from '@/components/pokemon'

import { SkeletonPokemon } from './skeleton'
import { usePokemons } from '@/services/hooks/pokemons/userPokemons'

export function Pokemons() {
  const { data, isLoading, error } = usePokemons()
  return (
    <div>
      <strong className="text-foreground">Pokemons</strong>

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
    </div>
  )
}
