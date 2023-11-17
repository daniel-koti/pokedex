import { ReactNode, createContext } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Pokemon } from '@/shared/pokemon'
import { getAllPokemons } from '@/services/pokemons/fetch'
import { Loading } from '@/components/loading'

interface PokemonContextProps {
  allPokemons: Pokemon[]
}

export const PokemonContext = createContext({} as PokemonContextProps)

export function PokemonProvider({ children }: { children: ReactNode }) {
  const { data, error, isLoading } = useQuery({
    queryKey: ['all-pokemons'],
    queryFn: getAllPokemons,
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
