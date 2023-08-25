import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AuthRoot from './pages/auth/AuthRoot';
import Signin from './pages/auth/Signin';
import Signup from './pages/auth/Signup';
import './App.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthRoot />,
    children: [
      {
        path: '/signup',
        element: <Signup />
      },
      {
        path: '/signin',
        element: <Signin />
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router}></RouterProvider>
}

export default App
