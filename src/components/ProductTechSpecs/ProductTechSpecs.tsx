import { FC } from 'react';
import { productSpecs } from '../../types/productSpecs';
import styles from './ProductTechSpecs.module.scss';
import classNames from 'classnames';

interface Props {
  specs: productSpecs;
  className?: string;
}

const normalizeValue = (value: string | string[]) => {
  if (typeof value === 'string') {
    return value;
  }

  if (Array.isArray(value)) {
    return value.join(', ');
  }
};

export const ProductTechSpecs: FC<Props> = ({ specs, className }) => {
  return (
    <ul className={classNames(styles.ListOfSpecs, className)}>
      {Object.entries(specs).map(([key, value]) => {
        if (!value) {
          return false;
        }

        return (
          <li className={styles.ListItem} key={key}>
            <span className={styles.SpecsName}>{key}</span>
            <span className={styles.SpecsParams}>{normalizeValue(value)}</span>
          </li>
        );
      })}
    </ul>
  );
};
