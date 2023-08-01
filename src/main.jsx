import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './components/Layout'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NuevoCliente,{action as nuevoClienteAction} from './pages/NuevoCliente'
import Index, {loader as clientesLoaders} from './pages/Index'
const router = createBrowserRouter([{
 
  path: '/',
  element:<Layout />,
  children: [
    {
      index: true,
      element: <Index/>,
      loader: clientesLoaders,
    },
    {
      path: '/clientes/nuevo',
      element: <NuevoCliente />,
      action: nuevoClienteAction,
      

    },
 
  ],
},
{
  path: '/about',
  element:<div>About</div>,
},])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
