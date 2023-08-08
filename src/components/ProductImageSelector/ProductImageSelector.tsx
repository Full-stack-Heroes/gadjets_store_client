import { FC } from 'react';
import styles from './ProductImageSelector.module.scss';
import classNames from 'classnames/bind';
import { normalizeImage } from '../../utils/helpers';
import 'react-multi-carousel/lib/styles.css';
import Carousel, { DotProps } from 'react-multi-carousel';
import { Loader } from '../Loader';

const cn = classNames.bind(styles);

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1199, min: 860 },
    items: 1,
    slidesToSlide: 1,
  },
  tabletSmall: {
    breakpoint: { max: 859, min: 641 },
    items: 1,
    slidesToSlide: 1,
  },
  largeMobile: {
    breakpoint: { max: 640, min: 400 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 400, min: 320 },
    items: 1,
    slidesToSlide: 1,
  }
};

interface Props {
  images: string[] | null,
  className: string,
}

export const ProductImageSelector: FC<Props> = ({ images, className }) => {
  console.log(images);

  const CustomDot: FC = ({ active, onClick, index }: DotProps) => {
    return (
      <>
        {images && (<button
          onClick={onClick}
          className={cn('custom-dot', {
            'custom-dot--active': active
          })}
        >
          {<img
            src={normalizeImage(images[index!])}
            alt={'product img'}
          />}
        </button>)}
      </>
    );
  };

  return (
    <>
      <div className={cn('ProductImageSelector', className)}>
        {images ? (
          <Carousel
            showDots
            responsive={responsive}
            arrows={false}
            customDot={<CustomDot />}
            renderDotsOutside
            dotListClass={cn('DotList')}
            itemClass={cn('ProductImage')}
          >
            {images.map((image, index) => (
              <img
                src={normalizeImage(image)}
                alt={`product img ${index}`}
                key={index}
                draggable={false}
              />
            ))}
          </Carousel>
        ) : <Loader className={cn('ProductImageSelectorLoader')} />}
      </div>
    </>
  );
};
