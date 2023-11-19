import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Pokemons } from './components/pokemons'
import { Pokemon } from '@/components/pokemon'

import { useAllPokemons } from '@/hooks/pokemons/useAllPokemons'

export function Home() {
  const [search, setSearch] = useState('')
  const { allPokemons } = useAllPokemons()

  const filteredPokemons = allPokemons.filter((pokemon) =>
    pokemon.name.includes(search),
  )

  return (
    <section className="flex flex-col items-start gap-8 md:flex-row">
      <aside className="w-full md:w-60">
        <strong className="inline-flex items-center gap-2 text-foreground ">
          Filters
        </strong>

        <div className="mt-8 space-y-2">
          <Input
            placeholder="Search by name..."
            className="w-full text-foreground"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>
      </aside>

      <main className="w-full flex-1 ">
        <strong className="text-foreground ">Pokemons</strong>

        {search.length <= 0 ? (
          <Pokemons />
        ) : (
          <div className="sm:md-6 mt-8 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-4">
            {filteredPokemons.map((pokemon) => (
              <Pokemon key={pokemon.id} data={pokemon} />
            ))}
          </div>
        )}
      </main>
    </section>
  )
}
