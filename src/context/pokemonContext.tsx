import { ReactNode, createContext, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Pokemon as PokemonProps } from '@/shared/pokemon'
import { getGlobalPokemons } from '@/services/pokemons/get-global-pokemons.service'

interface PokemonContextProps {
  allPokemons: PokemonProps[]
  isLoading: boolean
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

  const { data, error, isLoading } = useQuery({
    queryKey: ['all-pokemons'],
    queryFn: getGlobalPokemons,
    staleTime: 1000 * 60 * 5, // 5 minutes
  })

  const isLoadingFinished = !!(!isLoading && data && !error)

  return (
    <PokemonContext.Provider
      value={{
        isLoading,
        allPokemons: isLoadingFinished ? data?.allPokemonsFounded : [],
        currentPokemon,
        updateCurrentPokemon,
      }}
    >
      {children}
    </PokemonContext.Provider>
  )
}
