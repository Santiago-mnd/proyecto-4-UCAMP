import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import ErrorPage from './pages/Error-page';
import Home from './pages/Home';
import Reservacion from './pages/Reservacion';
import Reserva from './pages/Reserva';
import Root from './routes/root';

import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'reserva',
        element: <Reserva />,
      },
      {
        path: 'reservaciones/:id',
        element: <Reservacion />,
      },
      {
        path: 'contacto',
        element: <div>Contacto</div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
