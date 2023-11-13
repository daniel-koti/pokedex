import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { routes } from './routes'
import { DefaultLayout } from './layout/DefaultLayout'
import { ErrorPage } from './pages/error-page'

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: routes,
    errorElement: <ErrorPage />,
  },
])

export function App() {
  return <RouterProvider router={router} />
}
