import { FC } from 'react';
import styles from './ImageSlider.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cn = classNames.bind(styles);
type ImageSliderProps = {
  slides: string[];
  currentIndex: number;
};

export const ImageSlider: FC<ImageSliderProps> = ({ slides, currentIndex }) => {
  return (
    <>
      <div className={cn('container__slider')}>
        <div
          style={{ transform: `translateX(-${100 * currentIndex}%)` }}
          className={cn('slider')}>
          {slides.map((slide, index) => (
            <Link
              to="/phones/apple-iphone-14-256gb-purple"
              key={index}
              className={cn('slider__slide')}>
              <img className={cn('slider__image')} src={slide}></img>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
