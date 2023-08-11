import { FC } from 'react';
import { Product } from '../../types/product';

import 'react-multi-carousel/lib/styles.css';
import styles from './CardCarousel.module.scss';
import { Card } from '../Card/Card';
import classNames from 'classnames/bind';
import Carousel, { ButtonGroupProps } from 'react-multi-carousel';
import Up from '../../assets/icons/Arrow.svg';

const cn = classNames.bind(styles);

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 4,
    slidesToSlide: 2,
  },
  tablet: {
    breakpoint: { max: 1199, min: 860 },
    items: 3,
    slidesToSlide: 1,
    partialVisibilityGutter: 30,
  },
  tabletSmall: {
    breakpoint: { max: 859, min: 641 },
    items: 2,
    slidesToSlide: 1,
    partialVisibilityGutter: 60,
  },
  largeMobile: {
    breakpoint: { max: 640, min: 400 },
    items: 1.5,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 400, min: 320 },
    items: 1.1,
    slidesToSlide: 1,
  },
};

const ButtonGroup: FC = ({
  next,
  previous,
  carouselState,
}: ButtonGroupProps) => {

  const currentSlide = carouselState?.currentSlide ?? 0;
  const isInitialSlide = currentSlide === 0;

  const handlePrevClick = () => {
    if (previous) {
      previous();
    }
  };

  const handleNextClick = () => {
    if (next) {
      next();
    }
  };

  return (
    <div className={cn('carousel-button-group')}>
      <button
        className={cn('Button', 'Button--left', {
          'Button--disabled': isInitialSlide,
        })}
        aria-label="Go left"
        onClick={handlePrevClick}>
        <img src={Up} />
      </button>

      <button
        className={cn('Button', 'Button--right')}
        aria-label="Go right"
        onClick={handleNextClick}>
        <img src={Up} />
      </button>
    </div>
  );
};

interface Props {
  products: Product[];
  title: string;
  setIsLoggedIn: (calue: boolean) => void;
  isLoggedIn: boolean;
}

export const CardCarousel: FC<Props> = ({ products, title, setIsLoggedIn, isLoggedIn }) => {
  return (
    <div className={cn('CarouselContainer')}>
      <div className={cn('HeaderContainer')}>
        <h2 className={cn('Header')}>{title}</h2>

        <div className={cn('NavButtons')}></div>
      </div>

      <Carousel
        itemClass={cn('Cards')}
        responsive={responsive}
        customButtonGroup={<ButtonGroup />}
        arrows={false}
        renderButtonGroupOutside={true}
        partialVisible={true}
        infinite={true}>
        {products.map((product) => (
          <Card
            product={product}
            key={product.id}
            setIsLoggedIn={setIsLoggedIn}
            isLoggedIn={isLoggedIn}
          />
        ))}
      </Carousel>
    </div>
  );
};
