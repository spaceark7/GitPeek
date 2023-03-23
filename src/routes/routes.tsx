import { RouteObject } from 'react-router-dom'
import App from '../presentation/pages/App'
import RootLayout from '../presentation/components/layouts'
const routes: RouteObject[] = [
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: 'about',
        element: <h1>About</h1>,
      },
    ],
  },
]

export default routes
