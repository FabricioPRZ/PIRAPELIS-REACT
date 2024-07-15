import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider,} from 'react-router-dom'
import CategoriaAccion from './components/pages/Categoria Accion/CategoriaAccion.jsx'
import './index.css'

const router = createBrowserRouter([
  {//Home
    path:"/",
    element: <App/>,
  },
  {//Acción
    path: "/accion",
    element: <CategoriaAccion/>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);