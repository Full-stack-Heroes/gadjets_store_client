import classNames from 'classnames/bind';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.scss';

export const NotFound: FC = () => {
  const cn = classNames.bind(styles);
  return (
    <div className={cn('notFoundContainer')}>
      <div className={cn('notFoundWrapper')}>
        <h1 className={cn('notFoundTitle')}>
          404
        </h1>

        <p className={cn('notFoundContent')}>
          Sorry, we can’t find the page you’re looking for.
        </p>

        <Link className={cn('notFoundLink')} to="/home">
          Home page
        </Link>
      </div>
    </div>
  );
};
