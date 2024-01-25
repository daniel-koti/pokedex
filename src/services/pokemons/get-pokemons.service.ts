import axios from 'axios'
import { AxiosResponse, api } from '../api'
import { onOrderPokemons } from '@/utils/order'
import { Pokemon as PokemonProps } from '@/shared/pokemon'
import { Order } from '@/pages/home/components/pokemons'

export async function getPokemons(page: string, orderBy?: Order) {
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
