import { FC } from 'react';
import { Product } from '../../types/product';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from './CardCarousel.module.scss';
import { Card } from '../Card/Card';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

interface Props {
  products: Product[]
}

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 4,
    slidesToSlide: 2
  },
  tablet: {
    breakpoint: { max: 1199, min: 640 },
    items: 2,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 639, min: 320 },
    items: 1,
    slidesToSlide: 1
  }
};

export const CartCarousel:FC<Props> = ({ products }) => {
  return (
    <Carousel
      itemClass={cn('Cards')}
      responsive={responsive}
    >
      {products.map(product => (
        <Card product={product} key={product.id}/>
      ))}
    </Carousel>
  );
};
