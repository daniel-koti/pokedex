import { Separator } from '@/components/ui/separator'
import { Switch } from '@/components/ui/switch'
import { useTheme } from '@/hooks/useTheme'

import { Link, Outlet } from 'react-router-dom'

export function DefaultLayout() {
  const { isDark, onToggleTheme } = useTheme()

  return (
    <section
      className={`h-screen w-full overflow-auto bg-background py-8 ${
        isDark ? 'dark' : ''
      }`}
    >
      <div className="mx-auto  max-w-7xl">
        <header className="flex items-center justify-between ">
          <nav className="flex items-center gap-2">
            <Link
              to="/"
              className="mr-4 text-2xl font-bold text-foreground hover:text-primary"
            >
              Pokedex
            </Link>
            <Link
              to="#"
              className="text-sm font-medium text-muted-foreground hover:text-primary"
            >
              Github
            </Link>
            <Link
              to="#"
              className="text-sm font-medium text-muted-foreground hover:text-primary"
            >
              Instagram
            </Link>
            <Link
              to="#"
              className="text-sm font-medium text-muted-foreground hover:text-primary"
            >
              Twitter
            </Link>
            <Link
              to="#"
              className="text-sm font-medium text-muted-foreground hover:text-primary"
            >
              LinkedIn
            </Link>
          </nav>
          <Switch checked={isDark} onCheckedChange={onToggleTheme} />
        </header>

        <Separator className="my-4" />

        <Outlet />
      </div>
    </section>
  )
}
