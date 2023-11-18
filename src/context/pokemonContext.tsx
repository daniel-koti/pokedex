import { ReactNode, createContext } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Pokemon as PokemonProps } from '@/shared/pokemon'
import { Loading } from '@/components/loading'
import { Pokemon } from '@/services/Pokemon.service'

interface PokemonContextProps {
  allPokemons: PokemonProps[]
}

export const PokemonContext = createContext({} as PokemonContextProps)

const pokemon = new Pokemon()

export function PokemonProvider({ children }: { children: ReactNode }) {
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
    <PokemonContext.Provider value={{ allPokemons: data.allPokemonsFounded }}>
      {children}
    </PokemonContext.Provider>
  )
}
