import { FC } from 'react';
import styles from './BreadCrumbs.module.scss';
import { Link, useLocation } from 'react-router-dom';
import home from '../../assets/icons/Home.svg';
import { Arrow } from '../Arrow/Arrow';
import classNames from 'classnames/bind';
import { capitalizeWord, formatProductName } from '../../utils/helpers';

const cn = classNames.bind(styles);

export const BreadCrumbs: FC = () => {
  const location = useLocation();
  const breadcrumbs = location.pathname.split('/').slice(1);
  breadcrumbs[0] = capitalizeWord(breadcrumbs[0]);
  if (breadcrumbs.length === 2) {
    breadcrumbs[1] = formatProductName(breadcrumbs[1]);
  }

  return (
    <div className={cn('container', 'BreadCrumbs')}>
      <Link to="/">
        <img src={home} className={cn('home')}/>
      </Link>
      {breadcrumbs.map((breadcrumb, index) => (
        <span key={breadcrumb}>
          <span className={cn('arrow')}>
            <Arrow />
          </span>
          {index === breadcrumbs.length - 1
            ? (
              <span className={cn('breadcrumb')}>{breadcrumb}</span>
            ): (
              <Link
                to={`/${breadcrumbs[index]}`}
                className={cn('breadcrumb', 'breadcrumb--active')}
              >
                {breadcrumb}
              </Link>
            )}
        </span>
      ))}
    </div>
  );
};
