import { Link } from 'react-router-dom'
import { ToggleTheme } from './toggle-theme'
// import { ToggleTheme } from './toggle-theme'

export function Header() {
  return (
    <header className="flex flex-wrap items-center justify-between gap-4">
      <nav className="flex items-center gap-2">
        <Link
          to="/"
          className="mr-4 text-2xl font-bold text-foreground hover:text-primary"
        >
          Pokedex
        </Link>
        <Link
          to="https://github.com/daniel-koti"
          className="text-sm font-medium text-muted-foreground hover:text-primary"
          target="_blank"
        >
          Github
        </Link>
        <Link
          to="https://www.linkedin.com/in/daniel-moniz/"
          className="text-sm font-medium text-muted-foreground hover:text-primary"
          target="_blank"
        >
          LinkedIn
        </Link>
        <Link
          to="https://twitter.com/danie_koti"
          className="text-sm font-medium text-muted-foreground hover:text-primary"
          target="_blank"
        >
          X
        </Link>
        <Link
          to="https://www.instagram.com/daniel_koti/"
          className="text-sm font-medium text-muted-foreground hover:text-primary"
          target="_blank"
        >
          Instagram
        </Link>
      </nav>

      <ToggleTheme />
    </header>
  )
}
