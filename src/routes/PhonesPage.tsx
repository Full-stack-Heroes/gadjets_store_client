import { Link } from 'react-router-dom';
import { FC } from 'react';
import { Cards } from '../components/Cards/Cards';

export const PhonesPage: FC = () => {
  return (
      <div>
        <h1>Phones page</h1>
        <Cards />
        <Link to="/">Home page</Link>
      </div>
  );
};
