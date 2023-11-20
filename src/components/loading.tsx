import { CircleDashed } from 'lucide-react'

export function Loading() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-orange-500">
      <CircleDashed className="h-10 w-10 animate-spin text-zinc-950" />
      <span className="mt-4 text-sm font-semibold text-zinc-950">
        Loading app...
      </span>
      <span>By @daniel-moniz 🧡</span>
    </div>
  )
}
