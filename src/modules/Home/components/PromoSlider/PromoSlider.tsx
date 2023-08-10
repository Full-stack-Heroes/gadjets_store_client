import { FC, useEffect, useState, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './PromoSlider.module.scss';
import arrow from './../../../../assets/icons/Arrow.svg';
import one from './../../../../assets/images/Promo/promo-on-mobile.png';
import two from './../../../../assets/images/Promo/iphone-14-colours.jpg';
import four from './../../../../assets/images/Promo/Tablets-banner_2.jpg';
import oneBig from './../../../../assets/images/Promo/promo-on-tablet-desktop.png';
import threeBig from './../../../../assets/images/Promo/ipad.jpg';
import { ImageSlider } from '../ImageSlider/ImageSlider';

const cn = classNames.bind(styles);

const mobileSlides = [one, two, four];
const bigSlides = [oneBig, two, threeBig];

const getWindowWidth = () => window.innerWidth;

export const PromoSlider: FC = () => {
  const [slides, setSlides] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartPositionX, setTouchStartPositionX] = useState<number>(0);
  const [touchEndPositionX, setTouchEndPositionX] = useState<number>(0);
  const sliderElement = useRef<HTMLDivElement | null>(null);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = getWindowWidth();

      if (windowWidth < 640) {
        setSlides(mobileSlides);
      } else {
        setSlides(bigSlides);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleTouchStart = (event: TouchEvent) => {
      setTouchStartPositionX(event.changedTouches[0].screenX);
    };
    const handleTouchEnd = (event: TouchEvent) => {
      setTouchEndPositionX(event.changedTouches[0].screenX);

      if (touchEndPositionX > touchStartPositionX) {
        goToPrevious();
      } else if (touchEndPositionX < touchStartPositionX) {
        goToNext();
      }
    };

    if (sliderElement.current) {
      sliderElement.current.addEventListener(
        'touchstart',
        handleTouchStart,
        false,
      );
      sliderElement.current.addEventListener('touchend', handleTouchEnd, false);
    }

    return () => {
      if (sliderElement.current) {
        sliderElement.current.removeEventListener(
          'touchstart',
          handleTouchStart,
        );
        sliderElement.current.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, [touchStartPositionX, touchEndPositionX, sliderElement]);

  return (
    <div className={cn('promo__container', 'slider')}>
      <div className={cn('slider__container')}>
        <button
          className={cn('slider__arrow', 'slider__arrow-left')}
          onClick={goToPrevious}>
          <img src={arrow} alt="left arrow for slider" />
        </button>

        <div className={cn('slider__slides')} ref={sliderElement}>
          <ImageSlider currentIndex={currentIndex} slides={slides} />
        </div>

        <button
          className={cn('slider__arrow', 'slider__arrow-right')}
          onClick={goToNext}>
          <img src={arrow} alt="right arrow for slider" />
        </button>
      </div>

      <div className={cn('slider__dots')}>
        {slides.map((_slide, index) => (
          <div
            key={index}
            onClick={() => goToSlide(index)}
            className={cn('slider__dot', {
              'slider__dot-active': index === currentIndex,
            })}></div>
        ))}
      </div>
    </div>
  );
};
