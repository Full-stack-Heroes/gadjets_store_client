import { FC } from 'react';
import style from './BreadCrumbs.module.scss';
import { Link, useLocation } from 'react-router-dom';
import home from '../../assets/icons/Home.svg';
import { Arrow } from '../Arrow/Arrow';

interface Props {
  className?: string;
}

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

export const BreadCrumbs: FC<Props> = ({ className }) => {
  const location = useLocation();

  const breadcrumbs = location.pathname.split('/').slice(1);

  breadcrumbs[0] = capitalizeWord(breadcrumbs[0]);

  if (breadcrumbs.length === 2) {
    breadcrumbs[1] = formatProductName(breadcrumbs[1]);
  }

  return (
    <div className={`${style.BreadCrumb} ${className}`}>
      <Link to="/">
        <img src={home} />
      </Link>
      {breadcrumbs.map(breadcrumb => (
        <span key={breadcrumb}>
          <span className={style.arrow}>
            <Arrow />
          </span>
          <span>{breadcrumb}</span>
        </span>
      ))}
    </div>
  );
};
