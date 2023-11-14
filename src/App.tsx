import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { routes } from './routes'
import { DefaultLayout } from './layout/DefaultLayout'
import { ErrorPage } from './pages/error-page'
import { ThemeContextProvider } from './hook/useTheme'

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
    <ThemeContextProvider>
      <RouterProvider router={router} />
    </ThemeContextProvider>
  )
}
