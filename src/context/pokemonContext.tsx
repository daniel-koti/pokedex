import { ReactNode, createContext, useState } from 'react'
import { Pokemon as PokemonProps } from '@/shared/pokemon'

interface PokemonContextProps {
  currentPokemon: PokemonProps | null
  updateCurrentPokemon: (pokemon: PokemonProps) => void
}

export const PokemonContext = createContext({} as PokemonContextProps)

export function PokemonProvider({ children }: { children: ReactNode }) {
  const [currentPokemon, setCurrentPokemon] = useState<PokemonProps | null>(
    null,
  )

  function updateCurrentPokemon(currentPokemon: PokemonProps) {
    setCurrentPokemon(currentPokemon)
  }

  return (
    <PokemonContext.Provider
      value={{
        currentPokemon,
        updateCurrentPokemon,
      }}
    >
      {children}
    </PokemonContext.Provider>
  )
}
