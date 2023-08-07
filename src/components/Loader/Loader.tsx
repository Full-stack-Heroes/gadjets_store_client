import { FC } from 'react';
import './Loader.scss';
import cn from 'classnames';

interface Props {
  className?: string;
}

export const Loader: FC<Props> = ({ className }) => (
  <div className={cn('Loader', className)} data-cy="loader">
    <div className="Loader__content" />
  </div>
);
