import { Link } from 'react-router-dom';
import { FC } from 'react';
import { Phones } from '../modules/Phones';

export const PhonesPage: FC = () => {
  return (
    <div>
      <h1>Phones page</h1>
      <Phones />
      <Link to="/">Home</Link>
    </div>
  );
};
