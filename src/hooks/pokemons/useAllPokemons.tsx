import { useContext } from 'react'
import { PokemonContext } from '@/context/pokemonContext'

export function useAllPokemons() {
  const { allPokemons, updateCurrentPokemon, currentPokemon, isLoading } =
    useContext(PokemonContext)

  return {
    allPokemons,
    updateCurrentPokemon,
    currentPokemon,
    isLoadingGlobalPokemons: isLoading,
  }
}
