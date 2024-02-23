import { Order } from '@/pages/home/pokemons'
import { Pokemon } from '@/shared/pokemon'

export function onOrderPokemons(type: Order, pokemons: Pokemon[]) {
  switch (type) {
    case 'higher':
      return pokemons.sort((a, b) => b.height - a.height)

    case 'lighter':
      return pokemons.sort((a, b) => b.weight - a.weight)

    case 'heaviest':
      return pokemons.sort((a, b) => a.height - b.height)

    case 'lower':
      return pokemons.sort((a, b) => a.weight - b.weight)

    default:
      return []
  }
}
