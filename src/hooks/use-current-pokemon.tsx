import { PokemonContext } from '@/context/pokemon-context'
import { useContext } from 'react'

export function useCurrentPokemon() {
  const { currentPokemon, updateCurrentPokemon } = useContext(PokemonContext)

  return {
    currentPokemon,
    onUpdateCurrentPokemon: updateCurrentPokemon,
  }
}
