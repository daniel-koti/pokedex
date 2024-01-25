import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import { Input } from '@/components/ui/input'
import { Order, Pokemons } from './components/pokemons'
import { Pokemon } from '@/components/pokemon'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

import { useGlobalPokemons } from '@/hooks/useGlobalPokemons'
import { orders } from '@/shared/orders'
import { SkeletonPokemon } from './components/skeleton'
import { Loader2 } from 'lucide-react'

export function Home() {
  const [search, setSearch] = useState('')
  const [order, setOrder] = useSearchParams('')

  const { allPokemons, isLoadingGlobalPokemons } = useGlobalPokemons()

  const filteredPokemons = allPokemons.filter((pokemon) =>
    pokemon.name.includes(search),
  )

  const orderParam = order.get('order')

  function handleOrderBy(param: string) {
    setOrder({ order: param })
  }

  function clearParams() {
    setOrder((params) => {
      params.delete('order')
      return params
    })
  }

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
          <span className="mb-4 block text-foreground">Order by:</span>

          <div className="flex flex-col gap-2">
            <div className="block">
              {order.size > 0 && (
                <Badge variant="outline" className="relative">
                  {orderParam}{' '}
                  <button
                    onClick={clearParams}
                    className="absolute right-[-8px] top-[-8px] flex h-4 w-4 items-center justify-center rounded-full border text-[8px]"
                  >
                    X
                  </button>
                </Badge>
              )}
            </div>

            <div className="flex gap-2 md:flex-col">
              {orders.map((order) => (
                <Button
                  variant="link"
                  className="justify-start p-0"
                  key={order.value}
                  value={order.value}
                  onClick={() => handleOrderBy(order.value)}
                >
                  {order.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
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
