import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import WelcomePage from './pages/welcome.jsx';
import ErrorPage from './pages/404.jsx';
import HomePage from './pages/home.jsx';
import DetailRecipePage from './pages/detail-recipe.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <WelcomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/home',
    element: <HomePage />,
  },
  {
    path: '/recipe',
    element: <DetailRecipePage />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
