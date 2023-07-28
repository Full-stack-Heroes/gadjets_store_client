import './App.scss';
import { createBrowserRouter } from 'react-router-dom';
import Home from './routes/Home';
import Phones from './routes/Phones';

export const App = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'phones',
    element: <Phones />,
  },
]);

export default App;
