import { FC } from 'react';
import style from './BreadCrumbs.module.scss';

interface Props {
  className?: string,
}

export const BreadCrumbs:FC<Props> = ({ className }) => {
  return (
    <div className={`${style.BreadCrumb} ${className}`}>
      Breadcrumb
    </div>
  );
};
