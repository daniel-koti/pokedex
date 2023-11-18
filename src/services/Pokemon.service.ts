import axios from 'axios'
import { api } from '@/services/api'
import { Pokemon as PokemonProps } from '@/shared/pokemon'

interface AxiosResponse {
  count: number
  next: string | null
  previous: string | null
  results: Array<{ name: string; url: string }>
}

export class Pokemon {
  public async getPokemons(page: string) {
    try {
      const { data } = await api.get<AxiosResponse>(
        `/pokemon?offset=${page}&limit=20`,
      )

      const pokemonPromises = data.results.map((item) => {
        return axios.get(item.url).then((response) => response.data)
      })

      const pokemons = await Promise.all<PokemonProps>(pokemonPromises)

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

  public async getAllPokemons() {
    try {
      const response = await api.get<AxiosResponse>(
        '/pokemon?limit=750&offset=0',
      )

      const pokemonsPromise = response.data.results.map((pokemon) => {
        return axios.get(pokemon.url).then((response) => response.data)
      })

      const allPokemonsFounded =
        await Promise.all<PokemonProps>(pokemonsPromise)

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
}
