import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import './style.css';
import './fonts/fonts.css';
import './vendor/normalize.css';

import App from './components/app/app';

const router = createBrowserRouter([
  {
    path: "/*",
    element: <App/>,
  }
]);

const app = ReactDOM.createRoot(
  document.getElementById('app') as HTMLElement
);
app.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
