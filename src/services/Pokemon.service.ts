import axios from 'axios'
import { api } from '@/services/api'
import { Pokemon as PokemonProps } from '@/shared/pokemon'
import { Order } from '@/pages/home/components/pokemons'
import { onOrderPokemons } from '@/utils/order'

interface AxiosResponse {
  count: number
  next: string | null
  previous: string | null
  results: Array<{ name: string; url: string }>
}

export class Pokemon {
  public async getPokemons(page: string, orderBy?: Order) {
    try {
      const { data } = await api.get<AxiosResponse>(
        `/pokemon?offset=${page}&limit=20`,
      )

      const pokemonPromises = data.results.map((item) => {
        return axios.get(item.url).then((response) => response.data)
      })

      const pokemons = await Promise.all<PokemonProps>(pokemonPromises)

      if (orderBy && orderBy.length > 0) {
        const orderedPokemons = onOrderPokemons(orderBy, pokemons)

        return {
          pokemons: orderedPokemons,
          count: data.count,
          previous: data.previous,
          next: data.next,
        }
      }

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
      return {
        allPokemonsFounded: [],
      }
    }
  }

  public async getPokemon(name: string) {
    try {
      const response = await api.get<PokemonProps>(`/pokemon/${name}`)

      return {
        pokemon: response.data,
      }
    } catch (error) {
      console.error(error)
      throw error
    }
  }
}
