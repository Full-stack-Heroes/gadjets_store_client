import { FC } from 'react';
import { Link } from 'react-router-dom';

export const NotFoundPage: FC = () => (
  <div>
    <h1>Oops!</h1>
    <p>Sorry, we can’t find the page you’re looking for.</p>
    <Link to="/">Home page</Link>
  </div>
);
