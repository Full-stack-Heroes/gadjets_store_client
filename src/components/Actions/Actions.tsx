import { FC, useState } from 'react';
import styles from './Action.module.scss';
import classNames from 'classnames/bind';
import heart from '../../assets/icons/Heart.svg';
import filledheart from '../../assets/icons/Heart_Filled.svg';

const cn = classNames.bind(styles);

export const Actions: FC = () => {
  const [productAdded, setProductAdded] = useState(false);
  const [productLiked, setProductLiked] = useState(false);
  const buttonText = productAdded ? 'added' : 'add to cart';
  const buttonHeart = productLiked ? filledheart : heart;

  const handleProductAdded = () => {
    setProductAdded(!productAdded);
  };

  const handleProductLiked = () => {
    setProductLiked(!productLiked);
  };

  return (
    <div className={cn('Actions')}>
      <div className={cn('Actions__colors')}>
        <div className={cn('Actions__headerId')}>
          <span className={cn('Actions__header')}>Available colors</span>

          <span className={cn('Actions__itemId')}>ID: 802390</span>
        </div>

        <a
          className={cn(
            'Actions__color',
            'Actions__color--beige',
            'Actions__color--active',
          )}></a>
        <a className={cn('Actions__color', 'Actions__color--gray')}></a>
        <a className={cn('Actions__color', 'Actions__color--black')}></a>
        <a className={cn('Actions__color', 'Actions__color--white')}></a>
      </div>

      <div className={cn('Actions__capacity')}>
        <p className={cn('Actions__header')}>Select capacity</p>

        <button
          className={cn(
            'Actions__capacityButton',
            'Actions__capacityButton--active',
          )}>
          64 GB
        </button>
        <button className={cn('Actions__capacityButton')}>256 GB</button>
        <button
          className={cn(
            'Actions__capacityButton',
            'Actions__capacityButton--last',
          )}>
          512 GB
        </button>
      </div>

      <span className={cn('Actions__price')}>$799</span>
      <span className={cn('Actions__priceCrossed')}>$1199</span>

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
          <span className={cn('Actions__characteristicsRight')}>
            {'6.5" OLED'}
          </span>
        </p>

        <p className={cn('Actions__characteristicsLeft')}>
          <span>Resolution</span>
          <span className={cn('Actions__characteristicsRight')}>2688x1242</span>
        </p>

        <p className={cn('Actions__characteristicsLeft')}>
          <span>Processor</span>
          <span className={cn('Actions__characteristicsRight')}>
            Apple A12 Bionic
          </span>
        </p>

        <p className={cn('Actions__characteristicsLeft')}>
          <span>RAM</span>
          <span className={cn('Actions__characteristicsRight')}>3 GB</span>
        </p>
      </div>
    </div>
  );
};
