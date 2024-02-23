import { Skeleton } from '@/components/ui/skeleton'

export function SkeletonPokemon() {
  return (
    <div className="mt-8 grid w-full grid-cols-1 gap-12 md:grid-cols-3">
      <Skeleton className="h-80 w-full rounded-lg md:w-80" />
      <Skeleton className="h-80 w-full rounded-lg md:w-80" />
      <Skeleton className="h-80 w-full rounded-lg md:w-80" />
      <Skeleton className="h-80 w-full rounded-lg md:w-80" />
      <Skeleton className="h-80 w-full rounded-lg md:w-80" />
      <Skeleton className="h-80 w-full rounded-lg md:w-80" />
      <Skeleton className="h-80 w-full rounded-lg md:w-80" />
      <Skeleton className="h-80 w-full rounded-lg md:w-80" />
    </div>
  )
}
