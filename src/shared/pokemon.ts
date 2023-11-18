export interface Pokemon {
  id: number
  name: string
  weight: number
  height: number
  order: number
  base_experience: number
  sprites: {
    other: {
      dream_world: {
        front_default: string
      }
    }
  }
  abilities: {
    ability: {
      name: string
      url: string
    }
  }[]
  stats: {
    base_stat: number
    stat: {
      name: string
    }
  }[]
}
