import { Link } from 'react-router-dom';
import { FC } from 'react';
import { Card } from '../components/Card/Card.tsx';

export const PhonesPage: FC = () => {
  return (
    <div>
      <h1>Phones page</h1>
      <Card />
      <Link to="/">Home page</Link>
    </div>
  );
};
