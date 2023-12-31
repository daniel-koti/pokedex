import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { routes } from './routes'
import { DefaultLayout } from './layout/DefaultLayout'
import { ErrorPage } from './pages/error-page'
import { ThemeContextProvider } from './context/themeContext'
import { PokemonProvider } from './context/pokemonContext'

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: routes,
    errorElement: <ErrorPage />,
  },
])

const queryClient = new QueryClient()

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PokemonProvider>
        <ThemeContextProvider defaultTheme="system" storageKey="vite-ui-theme">
          <RouterProvider router={router} />
        </ThemeContextProvider>
      </PokemonProvider>
    </QueryClientProvider>
  )
}
