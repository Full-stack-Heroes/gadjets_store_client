import { FC } from 'react';
import styles from './About.module.scss';
import classNames from 'classnames/bind';
import { ProductDetails } from '../../types/productDetails';
import { generateId } from '../../utils/helpers';

const cn = classNames.bind(styles);

interface Props {
  product: ProductDetails;
}

export const About: FC<Props> = ({ product }) => {
  return (
    <div className={cn('About')}>
      {product.description.map((desc) => (
        <div className={cn('About__paragraph')} key={generateId()}>
          <p className={cn('About__paragraphHeader')}>{desc.title}</p>
          <p className={cn('About__text')}>{desc.text}</p>
        </div>
      ))}
    </div>
  );
};

export const generateId = () => Math.floor(Math.random() * 10001);
