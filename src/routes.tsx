import { createBrowserRouter } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import ErrorPage from './pages/ErrorPage'
import Games from './pages/Games'
import HomePage from './pages/HomePage'
import Layout from './pages/Layout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: '/games',
        element: (
          <ProtectedRoute>
            <Games />
          </ProtectedRoute>
        ),
      },
    ],
  },
])

export default router
