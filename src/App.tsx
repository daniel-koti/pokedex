import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { routes } from './routes'
import { DefaultLayout } from './layout/DefaultLayout'
import { ErrorPage } from './pages/error-page'
import { ThemeContextProvider } from './context/themeContext'
import { Toaster } from 'sonner'

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
      <ThemeContextProvider>
        <RouterProvider router={router} />
        <Toaster />
      </ThemeContextProvider>
    </QueryClientProvider>
  )
}
