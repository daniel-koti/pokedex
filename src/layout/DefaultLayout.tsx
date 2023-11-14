import { Separator } from '@/components/ui/separator'
import { Switch } from '@/components/ui/switch'
import { useTheme } from '@/hook/useTheme'

import { Link, Outlet } from 'react-router-dom'

export function DefaultLayout() {
  const { isDark, onToggleTheme } = useTheme()

  return (
    <div
      className={`bg-background h-screen w-full p-8 ${isDark ? 'dark' : ''}`}
    >
      <header className="flex items-center justify-between ">
        <nav className="flex items-center gap-2">
          <Link
            to="/"
            className="text-foreground hover:text-primary mr-4 text-lg font-bold"
          >
            Pokedex
          </Link>
          <Link
            to="#"
            className="text-foreground hover:text-primary text-sm font-medium"
          >
            Github
          </Link>
          <Link
            to="#"
            className="text-foreground hover:text-primary text-sm font-medium"
          >
            Instagram
          </Link>
          <Link
            to="#"
            className="text-foreground hover:text-primary text-sm font-medium"
          >
            Twitter
          </Link>
          <Link
            to="#"
            className="text-foreground hover:text-primary text-sm font-medium"
          >
            LinkedIn
          </Link>
        </nav>
        <Switch checked={isDark} onCheckedChange={onToggleTheme} />
      </header>

      <Separator className="my-4" />

      <Outlet />
    </div>
  )
}
