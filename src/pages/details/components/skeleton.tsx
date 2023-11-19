import { Skeleton } from '@/components/ui/skeleton'

export function SkeletonDetails() {
  return (
    <div className="mt-8 grid grid-cols-1 items-center gap-12 md:grid-cols-2">
      <Skeleton className="min-h-[480px] w-full rounded-lg" />
      <div className="flex flex-col gap-6">
        <Skeleton className="h-10 w-full rounded-lg" />
        <Skeleton className="h-10 w-full rounded-lg" />
        <Skeleton className="h-10 w-full rounded-lg" />
        <Skeleton className="h-10 w-full rounded-lg" />
        <Skeleton className="h-10 w-full rounded-lg" />
        <Skeleton className="h-10 w-full rounded-lg" />
        <Skeleton className="h-10 w-full rounded-lg" />
      </div>
    </div>
  )
}
