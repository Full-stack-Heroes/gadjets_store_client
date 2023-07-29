import './App.scss';
import { Navigate, createBrowserRouter } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { PhonesPage } from './pages/PhonesPage';
import { Layout } from './pages/Layout';
import { NotFoundPage } from './pages/NotFoundPage';

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
    ],
  },
]);

export default App;
