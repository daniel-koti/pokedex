import { usePokemon } from '@/hooks/pokemons/usePokemon'
import { useParams } from 'react-router-dom'
import { SkeletonDetails } from './components/skeleton'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Slider } from '@/components/ui/slider'

export function Details() {
  const { slug } = useParams()

  const { data, isFetching } = usePokemon(String(slug))

  if (isFetching) {
    return <SkeletonDetails />
  }

  return (
    <section className="mt-8 grid h-full grid-cols-2 items-center gap-8">
      <img
        src={data?.pokemon.sprites.other.dream_world.front_default}
        alt=""
        className="h-[480px] w-[480px]"
      />

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <strong className="text-2xl text-foreground text-orange-500">
            Name:
          </strong>
          <span className="text-2xl capitalize text-foreground">
            {data?.pokemon.name}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <strong className="text-2xl text-foreground text-orange-500">
            Weight:
          </strong>
          <span className="text-2xl text-foreground">
            {data?.pokemon.weight}Kg
          </span>
        </div>
        <div className="flex items-center gap-3">
          <strong className="text-2xl text-foreground text-orange-500">
            Height:
          </strong>
          <span className="text-2xl text-foreground">
            {data?.pokemon.height}M
          </span>
        </div>
        <div className="flex items-center gap-3">
          <strong className="text-2xl text-foreground text-orange-500">
            XP:
          </strong>
          <span className="text-2xl capitalize text-foreground">
            {data?.pokemon.base_experience}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <strong className="text-2xl text-foreground text-orange-500">
            Power:
          </strong>
          <div className="flex flex-wrap items-center gap-4">
            {data?.pokemon.abilities.map((item) => (
              <Badge
                variant="default"
                key={item.ability.url}
                className="text-base capitalize text-foreground"
              >
                {item?.ability.name}
              </Badge>
            ))}
          </div>
        </div>
        <Separator />
        <div className="flex flex-col gap-2">
          {data?.pokemon.stats.map((item) => {
            const value = [item.base_stat]
            return (
              <div key={item.base_stat} className="flex flex-col gap-2">
                <strong className="capitalize text-foreground">
                  {item.stat.name}
                </strong>
                <Slider max={100} min={0} defaultValue={value} disabled />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
