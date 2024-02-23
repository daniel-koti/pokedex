import { Loader2 } from 'lucide-react'
import { SkeletonPokemon } from './skeleton'

export function LoadingHome() {
  return (
    <div className="flex-1">
      <strong className="inline-flex items-center text-foreground">
        Pokemons <Loader2 className="ml-2 h-5 w-5 animate-spin" />
      </strong>
      <SkeletonPokemon />
    </div>
  )
}
