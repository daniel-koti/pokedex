import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import { Input } from '@/components/ui/input'
import { Order, Pokemons } from './components/pokemons'
import { Pokemon } from '@/components/pokemon'
import { useGlobalPokemons } from '@/hooks/useGlobalPokemons'
import { SkeletonPokemon } from './components/skeleton'
import { Loader2 } from 'lucide-react'
import { OrderBy } from './order-by'

export function Home() {
  const [search, setSearch] = useState('')
  const [order] = useSearchParams('')

  const { allPokemons, isLoadingGlobalPokemons } = useGlobalPokemons()

  const filteredPokemons = allPokemons.filter((pokemon) =>
    pokemon.name.includes(search),
  )

  const orderParam = order.get('order')

  return (
    <section className="flex flex-col items-start gap-8 md:flex-row">
      <aside className="w-full md:w-60">
        <strong className="inline-flex items-center gap-2 text-foreground ">
          Search
        </strong>

        <div className="mt-8 space-y-2">
          <Input
            placeholder="Search by name..."
            className="w-full text-foreground"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>

        <OrderBy />
      </aside>

      {isLoadingGlobalPokemons ? (
        <div className="flex-1">
          <strong className="inline-flex items-center text-foreground">
            Pokemons <Loader2 className="ml-2 h-5 w-5 animate-spin" />
          </strong>
          <SkeletonPokemon />
        </div>
      ) : (
        <main className="w-full flex-1 ">
          <strong className="text-foreground ">Pokemons</strong>

          {search.length <= 0 ? (
            <Pokemons order={orderParam as Order} />
          ) : (
            <div className="sm:md-6 mt-8 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-4">
              {filteredPokemons.map((pokemon) => (
                <Pokemon key={pokemon.id} data={pokemon} />
              ))}
            </div>
          )}
        </main>
      )}
    </section>
  )
}
