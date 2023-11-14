import { api } from '@/services/api'
import { useQuery } from '@tanstack/react-query'

interface AxiosResponse {
  count: number
  next: string | null
  previous: string | null
  results: Array<{ name: string; url: string }>
}

async function getPokemons() {
  const { data } = await api.get<AxiosResponse>('/pokemon')

  if (!data) {
    return {
      pokemons: [],
    }
  }

  try {
    const pokemonPromises = data.results.map((item) => {
      return fetch(item.url)
        .then((response) => response.json())
        .then((data) => data)
    })

    const pokemons = await Promise.all(pokemonPromises)

    return {
      pokemons,
    }
  } catch (error) {
    console.error('Error fetching Pokemon data', error)
    throw error
  }
}

export function usePokemons() {
  return useQuery({
    queryKey: ['pokemons'],
    queryFn: getPokemons,
    staleTime: 1000 * 5,
  })
}
