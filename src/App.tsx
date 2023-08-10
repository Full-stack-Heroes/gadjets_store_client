import './App.scss';
import { Navigate, createBrowserRouter } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { PhonesPage } from './pages/PhonesPage/PhonesPage';
import { Layout } from './pages/Layout/Layout';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { CartPage } from './pages/CartPage/CartPage';
import { TabletsPage } from './pages/TabletsPage/TabletsPage';
import { AccessoriesPage } from './pages/AccessoriesPage/AccessoriesPage';
import { FavouritesPage } from './pages/FavouritesPage/FavouritesPage';
import { ContactsPage } from './pages/ContactsPage/ContactsPage';
import { ProductPage } from './pages/ProductPage/ProductPage';
import { Registration } from './pages/RegistrationPage/Registration';
import { LogIn } from './pages/LogInPage/LogIn';
import { PageToTop } from './utils/helpers';

export const App = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <PageToTop />
        <Layout />
      </>
    ),
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'home',
        element: <Navigate to="/" replace />,
      },
      {
        path: 'phones',
        element: <PhonesPage />,
      },
      {
        path: 'phones/:productId',
        element: <ProductPage />,
      },
      {
        path: 'tablets',
        element: <TabletsPage />,
      },
      {
        path: 'tablets/:productId',
        element: <ProductPage />,
      },
      {
        path: 'accessories',
        element: <AccessoriesPage />,
      },
      {
        path: 'accessories/:productId',
        element: <ProductPage />,
      },
      {
        path: 'cart',
        element: <CartPage />,
      },
      {
        path: 'favourites',
        element: <FavouritesPage />,
      },
      {
        path: 'contacts',
        element: <ContactsPage />,
      },
      {
        path: 'registration',
        element: <Registration />,
      },
      {
        path: 'login',
        element: <LogIn />,
      },
    ],
  },
]);

export default App;
