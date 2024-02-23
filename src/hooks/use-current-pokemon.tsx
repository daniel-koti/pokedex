import { PokemonContext } from '@/context/pokemonContext'
import { useContext } from 'react'

export function useCurrentPokemon() {
  const { currentPokemon, updateCurrentPokemon } = useContext(PokemonContext)

  return {
    currentPokemon,
    onUpdateCurrentPokemon: updateCurrentPokemon,
  }
}
