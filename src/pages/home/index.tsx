import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Pokemons } from './components/pokemons'

export function Home() {
  const [search, setSearch] = useState('')

  return (
    <section className="flex items-start gap-8">
      <aside className="w-60">
        <strong className="text-foreground">Filters</strong>

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
        <Pokemons />
      </main>
    </section>
  )
}
