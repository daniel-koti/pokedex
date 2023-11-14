import { Pokemon } from '@/components/pokemon'
import { usePokemons } from '@/services/hooks/pokemons/userPokemons'

export function Home() {
  const { data } = usePokemons()

  console.log(data?.pokemons)

  return (
    <section className="flex items-start gap-4">
      <aside className="w-60">
        <strong className="text-foreground">Filters</strong>
      </aside>

      <main className="flex-1">
        <div>
          <strong className="text-foreground">Pokemons</strong>

          <div className="mt-8 grid grid-cols-3 gap-12">
            <Pokemon />
            <Pokemon />
            <Pokemon />
            <Pokemon />
            <Pokemon />
          </div>
        </div>
      </main>
    </section>
  )
}
