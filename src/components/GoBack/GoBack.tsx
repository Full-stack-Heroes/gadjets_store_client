import { Link, useNavigate } from 'react-router-dom';
import { Arrow } from '../Arrow/Arrow';
import styles from './GoBack.module.scss';
import { FC } from 'react';
import cn from 'classnames';

interface Props {
  className?: string;
}

export const GoBack: FC<Props> = ({ className }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <Link
      className={cn(styles.GoBack, className)}
      onClick={handleClick}
      to={'.'}>
      <Arrow /> Back
    </Link>
  );
};
