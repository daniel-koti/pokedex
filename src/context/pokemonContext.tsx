import { ReactNode, createContext, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Pokemon as PokemonProps } from '@/shared/pokemon'
import { Loading } from '@/components/loading'
import { Pokemon } from '@/services/Pokemon.service'

interface PokemonContextProps {
  allPokemons: PokemonProps[]
  currentPokemon: PokemonProps | null
  updateCurrentPokemon: (pokemon: PokemonProps) => void
}

export const PokemonContext = createContext({} as PokemonContextProps)

const pokemon = new Pokemon()

export function PokemonProvider({ children }: { children: ReactNode }) {
  const [currentPokemon, setCurrentPokemon] = useState<PokemonProps | null>(
    null,
  )

  function updateCurrentPokemon(currentPokemon: PokemonProps) {
    setCurrentPokemon(currentPokemon)
  }

  const { data, error, isLoading } = useQuery({
    queryKey: ['all-pokemons'],
    queryFn: pokemon.getAllPokemons,
    staleTime: 1000 * 60 * 5, // 5 minutes
  })

  if (isLoading) {
    return <Loading />
  }

  if (error || !data) {
    return <p>Error...</p>
  }

  return (
    <PokemonContext.Provider
      value={{
        allPokemons: data.allPokemonsFounded,
        currentPokemon,
        updateCurrentPokemon,
      }}
    >
      {children}
    </PokemonContext.Provider>
  )
}
