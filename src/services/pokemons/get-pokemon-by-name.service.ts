import { api } from '../api'
import { Pokemon as PokemonProps } from '@/shared/pokemon'

export async function getPokemonByName(name: string) {
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
