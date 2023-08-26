import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom';
import AuthRoot from './pages/auth/AuthRoot';
import Signin from './pages/auth/Signin';
import Signup from './pages/auth/Signup';
import './App.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<AuthRoot />}>
      <Route index element={<Signin />} />
      <Route path='signin' element={<Signin />} />
      <Route path='signup' element={<Signup />} />
    </Route>
  )
)

function App() {
  return <RouterProvider router={router}></RouterProvider>
}

export default App
