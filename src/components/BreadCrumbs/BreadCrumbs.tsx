import { FC } from 'react';
import styles from './BreadCrumbs.module.scss';
import { Link, useLocation } from 'react-router-dom';
import home from '../../assets/icons/Home.svg';
import { Arrow } from '../Arrow/Arrow';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

function capitalizeWord(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function formatProductName(inputString: string) {
  const words = inputString.split('-');

  const capitalizedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  const [brand, product, model, year, capacity, color] = capitalizedWords;

  return `${brand} ${product} ${model} ${year} ${capacity} ${color}`;
}

export const BreadCrumbs: FC = () => {
  const location = useLocation();

  const path = location.pathname.split('/');
  console.log(path);
  const breadcrumbs = path.slice(1);

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
              <Link to={`/${path[index + 1]}`} className={cn('breadcrumb', 'breadcrumb--active')}>
                {path[index]}{breadcrumb}
              </Link>
            )}
        </span>
      ))}
    </div>
  );
};
