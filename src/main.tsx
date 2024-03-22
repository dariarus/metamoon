import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';

import './shared/styles/global.css';
import './shared/styles/constants.css';
import './shared/styles/fonts.css';

import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/*',
    element: <App />,
  },
]);

const appElement = document.getElementById('app');

if (appElement !== null) {
  const app = ReactDOM.createRoot(appElement);
  app.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  );
}
