import { api } from '@/services/api'
import { Pokemon } from '@/shared/pokemon'

interface AxiosResponse {
  count: number
  next: string | null
  previous: string | null
  results: Array<{ name: string; url: string }>
}

export async function getPokemons(pageParam: string) {
  const { data } = await api.get<AxiosResponse>(
    `/pokemon?offset=${pageParam}&limit=20`,
  )

  try {
    const pokemonPromises = data.results.map((item) => {
      return fetch(item.url)
        .then((response) => response.json())
        .then((data) => data)
    })

    const pokemons = await Promise.all<Pokemon>(pokemonPromises)

    return {
      pokemons,
      count: data.count,
      previous: data.previous,
      next: data.next,
    }
  } catch (error) {
    console.error('Error fetching Pokemon data', error)
    throw error
  }
}

export async function getAllPokemons() {
  try {
    const response = await api.get<AxiosResponse>('/pokemon?limit=750&offset=0')

    const pokemonsPromise = response.data.results.map((pokemon) => {
      return fetch(pokemon.url)
        .then((response) => response.json())
        .then((data) => data)
    })

    const allPokemonsFounded = await Promise.all<Pokemon>(pokemonsPromise)

    return {
      allPokemonsFounded,
    }
  } catch (error) {
    console.log(error)
    return {
      allPokemonsFounded: [],
    }
  }
}
