import { FC } from 'react';
import { productSpecs } from '../../types/productSpecs';
import styles from './ProductTechSpecs.module.scss';

interface Props {
  specs: productSpecs;
}

export const ProductTechSpecs:FC<Props> = ({ specs }) => {

  return (
    <ul>
      {Object.entries(specs).map(([key, value]) => (
        <li className={styles.ListOfSpecs} key={key}>
          <span className={styles.SpecsName}>{key}</span>
          <span className={styles.SpecsParams}>

          </span>
        </li>
      ))}
    </ul>
  );
};
