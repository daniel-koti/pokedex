import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { QueryClientProvider } from '@tanstack/react-query'
import { routes } from './routes'
import { DefaultLayout } from './layout/DefaultLayout'
import { ErrorPage } from './pages/error-page'
import { ThemeContextProvider } from './context/theme-context'
import { queryClient } from './lib/react-query'
import { PokemonProvider } from './context/pokemon-context'

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: routes,
    errorElement: <ErrorPage />,
  },
])

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeContextProvider defaultTheme="system" storageKey="vite-ui-theme">
        <PokemonProvider>
          <RouterProvider router={router} />
        </PokemonProvider>
      </ThemeContextProvider>
    </QueryClientProvider>
  )
}
