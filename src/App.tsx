import './App.scss';
import { Navigate, createBrowserRouter } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { PhonesPage } from './pages/PhonesPage/PhonesPage';
import { Layout } from './pages/Layout/Layout';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { CartPage } from './pages/CardPage/CartPage';
import { TabletsPage } from './pages/TabletsPage/TabletsPage';
import { AccessoriesPage } from './pages/AccessoriesPage/AccessoriesPage';
import { FavouritesPage } from './pages/FavouritesPage/FavouritesPage';
import { ContactsPage } from './pages/ContactsPage/ContactsPage';
import { RightsPage } from './pages/RightsPage/RightsPage';

export const App = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
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
        path: 'tablets',
        element: <TabletsPage />,
      },
      {
        path: 'accessories',
        element: <AccessoriesPage />,
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
        element: <ContactsPage/>,
      },
      {
        path: 'rights',
        element: <RightsPage />,
      },
    ],
  },
]);

export default App;
