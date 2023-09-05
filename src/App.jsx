import { React } from 'react';
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom';
import AuthRoot from './pages/auth/AuthRoot';
import Signin from './pages/auth/Signin';
import Signup from './pages/auth/Signup';
import './App.css'
import UserRoot from './pages/user-page/UserRoot';
import Dashboard from './pages/user-page/Dashboard';
import Settings from './pages/user-page/Settings';
import Todos from './pages/user-page/Todos';
import Backlog from './pages/user-page/Backlog';
import ActivationPage from './pages/auth/ActivationPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<AuthRoot />}>
        <Route index element={<Signin />} />
        <Route path='signin' element={<Signin />} />
        <Route path='signup' element={<Signup />} />
      </Route>
      <Route path='/activate-account/:token' element={<ActivationPage />} />
      <Route path='/user' element={<UserRoot />} >
        <Route index element={<Dashboard />} />
        <Route index path='dashboard' element={<Dashboard />} />
        <Route path='todos' element={<Todos />} />
        <Route path='settings' element={<Settings />} />
        <Route path='backlog' element={<Backlog />} />
      </Route>
    </Route>
  )
)

function App() {
  return <RouterProvider router={router}></RouterProvider>
}

export default App
