import { useNavigate } from 'react-router-dom'

import { Pokemon as PokeProps } from '@/shared/pokemon'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Card } from './ui/card'
import { useCurrentPokemon } from '@/hooks/use-current-pokemon'

interface PokemonProps {
  data: PokeProps
}

export function Pokemon({ data }: PokemonProps) {
  const navigate = useNavigate()
  const { onUpdateCurrentPokemon } = useCurrentPokemon()

  function handleNavigateToDetail(pokemonName: string) {
    onUpdateCurrentPokemon(data)
    navigate(`/details/${pokemonName}`)
  }

  return (
    <Card className="group relative flex flex-col">
      {data.sprites.other.dream_world.front_default ? (
        <img
          className="mx-auto -mt-8 h-40 w-40"
          src={data.sprites.other.dream_world.front_default}
          alt=""
        />
      ) : (
        <div className="mx-auto -mt-8 flex h-40 w-40 items-center justify-center rounded-lg bg-card-foreground">
          <strong className="text-2xl text-muted-foreground">?</strong>
        </div>
      )}

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
            <span>Height</span>
          </div>
          <div className="flex flex-col items-center">
            <strong>{data.weight} KG</strong>
            <span>Weight</span>
          </div>
        </div>

        <Button
          variant="outline"
          className="mt-4"
          onClick={() => handleNavigateToDetail(data.name)}
        >
          Details
        </Button>
      </div>
    </Card>
  )
}
