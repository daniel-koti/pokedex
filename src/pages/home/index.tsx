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
    <section className="flex items-start gap-8">
      <aside className="w-60">
        <strong className="inline-flex items-center gap-2 text-foreground ">
          Filters
        </strong>

        <div className="mt-8 space-y-2">
          <Input
            placeholder="Search by name..."
            className="text-foreground"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>
      </aside>

      <main className="flex-1">
        <strong className="text-foreground ">Pokemons</strong>

        {search.length <= 0 ? (
          <Pokemons />
        ) : (
          <div className="mt-8 grid grid-cols-3 gap-12">
            {filteredPokemons.map((pokemon) => (
              <Pokemon key={pokemon.id} data={pokemon} />
            ))}
          </div>
        )}
      </main>
    </section>
  )
}
