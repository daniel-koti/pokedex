import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Pokemons } from './components/pokemons'
import { Pokemon } from '@/components/pokemon'

import { useAllPokemons } from '@/hooks/pokemons/useAllPokemons'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from '@/components/ui/select'
import { orders } from '@/shared/orders'

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

        <div className="mt-4">
          <span className="mb-4 block text-foreground">Order:</span>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Order by" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {orders.map((order) => (
                  <SelectItem key={order.value} value={order.value}>
                    {order.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
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
