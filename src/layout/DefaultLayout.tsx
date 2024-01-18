import { Header } from '@/components/header'
import { Separator } from '@/components/ui/separator'
import { Outlet } from 'react-router-dom'

export function DefaultLayout() {
  return (
    <section className="h-screen w-full overflow-auto bg-background px-4 py-8">
      <div className="mx-auto  max-w-7xl">
        <Header />

        <Separator className="my-4" />

        <Outlet />
      </div>
    </section>
  )
}
