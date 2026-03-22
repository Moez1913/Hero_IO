import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router/dom";
import './index.css'
import App from './App.jsx'
import { router } from './Components/Router/Routes';
import AppProvider from './Providers/AppProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <AppProvider>
        <RouterProvider router={router} />,
      </AppProvider>
  </StrictMode>,
)
