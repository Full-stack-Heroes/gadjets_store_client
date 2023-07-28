import './App.scss';
import { Navigate, createBrowserRouter } from 'react-router-dom';
import { HomePage } from './routes/HomePage';
import { PhonesPage } from './routes/PhonesPage';
import { Layout } from './routes/Layout';

export const App = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
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
