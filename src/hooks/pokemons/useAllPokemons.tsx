import { useContext } from 'react'
import { PokemonContext } from '@/context/pokemonContext'

export function useAllPokemons() {
  const { allPokemons } = useContext(PokemonContext)

  return {
    allPokemons,
  }
}
