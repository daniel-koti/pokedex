import axios from 'axios'
import { AxiosResponse, api } from '../api'
import { Pokemon as PokemonProps } from '@/shared/pokemon'

export async function getGlobalPokemons() {
  try {
    const response = await api.get<AxiosResponse>('/pokemon?limit=750&offset=0')

    const pokemonsPromise = response.data.results.map((pokemon) => {
      return axios.get(pokemon.url).then((response) => response.data)
    })

    const allPokemonsFounded = await Promise.all<PokemonProps>(pokemonsPromise)

    return {
      allPokemonsFounded,
    }
  } catch (error) {
    return {
      allPokemonsFounded: [],
    }
  }
}
