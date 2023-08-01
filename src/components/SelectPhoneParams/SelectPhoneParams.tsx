import cn from 'classnames';
import styles from './SelectPhoneParams.module.scss';
import { FC } from 'react';

interface Props {
  className?: string,
}

export const SelectPhoneParams:FC<Props> = ({ className }) => {
  return (
    <div className={cn(styles.SelectPhoneParams, className)}>
      Phone details
    </div>
  );
};
