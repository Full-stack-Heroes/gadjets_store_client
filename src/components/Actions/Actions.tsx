import { FC, useState } from 'react';
import styles from './Action.module.scss';
import classNames from 'classnames/bind';
import heart from '../../assets/icons/Heart.svg';
import filledheart from '../../assets/icons/Heart_Filled.svg';
import { generateId, normalizeMemory } from '../../utils/helpers';
import { ProductDetails } from '../../types/productDetails';

const cn = classNames.bind(styles);

interface Props {
  className: string | undefined;
  product: ProductDetails;
}

export const Actions: FC<Props> = ({ className, product }) => {
  const [productAdded, setProductAdded] = useState(false);
  const [productLiked, setProductLiked] = useState(false);
  const buttonText = productAdded ? 'added' : 'add to cart';
  const buttonHeart = productLiked ? filledheart : heart;

  const {
    capacity,
    capacityAvailable,
    priceRegular,
    priceDiscount,
    colorsAvailable,
    color,
    screen,
    resolution,
    processor,
    ram,
  } = product;

  const handleProductAdded = () => {
    setProductAdded(!productAdded);
  };

  const handleProductLiked = () => {
    setProductLiked(!productLiked);
  };

  return (
    <div className={cn('Actions', className)}>
      <div className={cn('Actions__colors')}>
        <div className={cn('Actions__headerId')}>
          <span className={cn('Actions__header')}>Available colors</span>

          {/* <span className={cn('Actions__itemId')}>ID: 1</span> */}
        </div>

        {colorsAvailable.map((colorAv) => (
          <a
            className={cn('Actions__color', {
              'Actions__color--active': color === colorAv,
            })}
            key={generateId()}></a>
        ))}
      </div>

      <div className={cn('Actions__capacity')}>
        <p className={cn('Actions__header')}>Select capacity</p>

        {capacityAvailable.map((capacityAv) => (
          <button
            className={cn('Actions__capacityButton', {
              'Actions__capacityButton--active': capacity === capacityAv,
            })}
            key={generateId()}>
            {normalizeMemory(capacityAv)}
          </button>
        ))}
      </div>

      <span className={cn('Actions__price')}>${priceDiscount}</span>
      {priceDiscount && (
        <span className={cn('Actions__priceCrossed')}>${priceRegular}</span>
      )}

      <div className={cn('Actions__productButtons')}>
        <button
          className={cn('Button__add', {
            ['Button__add--active']: productAdded,
          })}
          onClick={() => handleProductAdded()}>
          {buttonText}
        </button>

        <button
          className={cn('Button__like', {
            ['Button__like--active']: productLiked,
          })}
          onClick={() => handleProductLiked()}>
          <img src={buttonHeart} />
        </button>
      </div>

      <div className={cn('Actions__characteristics')}>
        <p className={cn('Actions__characteristicsLeft')}>
          <span>Screen</span>
          <span className={cn('Actions__characteristicsRight')}>{screen}</span>
        </p>

        <p className={cn('Actions__characteristicsLeft')}>
          <span>Resolution</span>
          <span className={cn('Actions__characteristicsRight')}>
            {resolution}
          </span>
        </p>

        <p className={cn('Actions__characteristicsLeft')}>
          <span>Processor</span>
          <span className={cn('Actions__characteristicsRight')}>
            {processor}
          </span>
        </p>

        <p className={cn('Actions__characteristicsLeft')}>
          <span>RAM</span>
          <span className={cn('Actions__characteristicsRight')}>
            {normalizeMemory(ram)}
          </span>
        </p>
      </div>
    </div>
  );
};
