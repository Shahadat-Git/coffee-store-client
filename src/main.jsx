import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import AddCoffee from './components/AddCoffee';
import Update from './components/Update';
import Coffee from './components/Coffee';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    loader: () => fetch('http://localhost:5000/coffees')
  },
  {
    path: '/add-coffee',
    element: <AddCoffee></AddCoffee>
  },
  {
    path: '/update/:id',
    element: <Update></Update>,
    loader: ({ params }) => fetch(`http://localhost:5000/coffees/${params.id}`)
  },
  {
    path: '/view/:id',
    element: <Coffee></Coffee>,
    loader: ({ params }) => fetch(`http://localhost:5000/coffees/${params.id}`)
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
