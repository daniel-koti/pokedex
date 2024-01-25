import { usePokemon } from '@/hooks/pokemons/usePokemon'
import { useParams } from 'react-router-dom'
import { SkeletonDetails } from './components/skeleton'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Slider } from '@/components/ui/slider'
import { useGlobalPokemons } from '@/hooks/useGlobalPokemons'

export function Details() {
  const { slug } = useParams()
  const { currentPokemon } = useGlobalPokemons()

  const { data, isFetching } = usePokemon(String(slug))

  const pokemon = currentPokemon || data?.pokemon

  if (isFetching && !currentPokemon) {
    return <SkeletonDetails />
  }

  return (
    <section className="mt-8 grid h-full grid-cols-1 items-center justify-center gap-8 md:grid-cols-2">
      <div className="flex items-center justify-center md:justify-start">
        <img
          src={pokemon?.sprites.other.dream_world.front_default}
          alt=""
          className="h-[200px] w-[200px] text-center md:h-[480px] md:w-[480px]"
        />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-center gap-3 md:justify-start">
          <strong className="text-2xl text-foreground text-orange-500">
            Name:
          </strong>
          <span className="text-2xl capitalize text-foreground">
            {pokemon?.name}
          </span>
        </div>
        <div className="flex items-center justify-center gap-3 md:justify-start">
          <strong className="text-2xl text-foreground text-orange-500">
            Weight:
          </strong>
          <span className="text-2xl text-foreground">{pokemon?.weight}Kg</span>
        </div>
        <div className="flex items-center justify-center gap-3  md:justify-start">
          <strong className="text-2xl text-foreground text-orange-500">
            Height:
          </strong>
          <span className="text-2xl text-foreground">{pokemon?.height}M</span>
        </div>
        <div className="flex items-center justify-center gap-3  md:justify-start">
          <strong className="text-2xl text-foreground text-orange-500">
            XP:
          </strong>
          <span className="text-2xl capitalize text-foreground">
            {pokemon?.base_experience}
          </span>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 md:flex-row md:justify-start">
          <strong className="text-2xl text-foreground text-orange-500">
            Power:
          </strong>
          <div className="flex flex-wrap items-center justify-center gap-4 ">
            {pokemon?.abilities.map((item) => (
              <Badge
                variant="default"
                key={item.ability.url}
                className="text-xs capitalize text-foreground lg:text-base"
              >
                {item?.ability.name}
              </Badge>
            ))}
          </div>
        </div>
        <Separator />
        <div className="flex flex-col gap-2">
          {pokemon?.stats.map((item) => {
            const value = [item.base_stat]
            return (
              <div key={item.stat.name} className="flex flex-col gap-2">
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
