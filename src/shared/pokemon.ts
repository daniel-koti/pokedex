export interface Pokemon {
  id: number
  name: string
  weight: number
  height: number
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
}
