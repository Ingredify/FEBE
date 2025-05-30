import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import WelcomePage from './pages/welcome.jsx';
import ErrorPage from './pages/404.jsx';
import HomePage from './pages/home.jsx';
import DetailRecipePage from './pages/detail-recipe.jsx';
import RootLayout from './elements/RootLayout.jsx'; // import layout baru
import CollectionPage from './pages/collection.jsx';
import LoginPage from './pages/login.jsx';
import RegisterPage from './pages/register.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <WelcomePage />,
      },
      {
        path: 'signin',
        element: <LoginPage />,
      },
      {
        path: 'signup',
        element: <RegisterPage />,
      },
      {
        path: 'home',
        element: <HomePage />,
      },
      {
        path: 'recipe',
        element: <DetailRecipePage />,
      },
      {
        path: 'collection',
        element: <CollectionPage />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
