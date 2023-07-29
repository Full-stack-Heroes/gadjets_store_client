import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Home } from '../modules/Home';

export const HomePage: FC = () => {
  return (
    <div>
      <h1>Home page</h1>
      <Home />
      <Link to="/phones">Phones</Link>
    </div>
  );
};
