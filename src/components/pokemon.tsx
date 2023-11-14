import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Card } from './ui/card'

export function Pokemon() {
  return (
    <Card className="flex flex-col">
      <img
        className="mx-auto -mt-8 w-40"
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
        alt=""
      />
      <div className="mb-4 mt-6 flex flex-col items-center gap-2">
        <strong className="text-lg text-foreground">Bulbasaur</strong>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Badge>glass</Badge>
          <Badge>glass</Badge>
          <Badge>glass</Badge>
        </div>
        <div className="mt-4 flex items-center gap-8">
          <div className="flex flex-col items-center">
            <strong>1 M</strong>
            <span>Altura</span>
          </div>
          <div className="flex flex-col items-center">
            <strong>6.9 KG</strong>
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
