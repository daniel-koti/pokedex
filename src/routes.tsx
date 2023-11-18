import { RouteObject } from 'react-router-dom'
import { Home } from './pages/home'
import { Details } from './pages/details'

export const routes: RouteObject[] = [
  {
    index: true,
    element: <Home />,
  },
  {
    path: 'details/:slug',
    element: <Details />,
  },
]
