import { FC } from 'react';
import { Link } from 'react-router-dom';

export const HomePage: FC = () => {
  return (
    <div>
      <h1>Home page</h1>
      <Link to="/phones">Phones</Link>
    </div>
  );
};
