import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import WelcomePage from './views/pages/welcome.jsx';
import ErrorPage from './views/pages/404.jsx';
import HomePage from './views/pages/home.jsx';
import AboutPage from './views/pages/about.jsx';
import DetailRecipePage from './views/pages/detail-recipe.jsx';
import RootLayout from './views/elements/RootLayout.jsx';
import CollectionsPage from './views/pages/collections.jsx';
import LoginPage from './views/pages/login.jsx';
import RegisterPage from './views/pages/register.jsx';
import SearchResultPage from './views/pages/search-result.jsx';
import CollectionDetailPage from './views/pages/collection-detail.jsx';

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
        path: 'recipe/:id',
        element: <DetailRecipePage />,
      },
      {
        path: 'collections',
        element: <CollectionsPage />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/search',
        element: <SearchResultPage />,
      },
      {
        path: '/collections/:id',
        element: <CollectionDetailPage />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
