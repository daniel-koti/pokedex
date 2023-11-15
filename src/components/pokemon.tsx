import { Pokemon as PokeProps } from '@/shared/pokemon'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Card } from './ui/card'

interface PokemonProps {
  data: PokeProps
}

export function Pokemon({ data }: PokemonProps) {
  return (
    <Card className="flex flex-col">
      <img
        className="mx-auto -mt-8 h-40 w-40"
        src={data.sprites.other.dream_world.front_default}
        alt=""
      />
      <div className="mb-4 mt-6 flex flex-col items-center gap-2">
        <strong className="text-lg text-foreground">{data.name}</strong>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {data.abilities.map((item) => (
            <Badge key={item.ability.url}>{item.ability.name}</Badge>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-8">
          <div className="flex flex-col items-center">
            <strong>{data.height} M</strong>
            <span>Altura</span>
          </div>
          <div className="flex flex-col items-center">
            <strong>{data.weight} KG</strong>
            <span>Peso</span>
          </div>
        </div>

        <Button variant="outline" className="mt-4">
          Mais detalhes
        </Button>
      </div>
    </Card>
  )
}
