import React, { useState } from 'react';
import cn from 'classnames';
import './card.scss';
import heart from '../../assets/icons/Heart.svg';
import filledheart from '../../assets/icons/Heart_Filled.svg';

export const Card: React.FC = () => {
  const [bought, setBought] = useState(false);
  const [favourite, setFavourite] = useState(false);
  const buttonText = bought ? 'added' : 'add to cart';
  const buttonHeart = favourite ? filledheart : heart;

  return (
    <div className="card">
      <img src="./images/iphone.png" className="card__product-image" />

      <h2 className="card__product-name">
        Apple iPhone Xs 64GB Silver (iMT9G2FSA)
      </h2>

      <p className="card__product-price">$999</p>

      <div className="card__product--characteristics">
        <p className="characteristic--left">
          <span>Screen:</span>
          <span className="characteristic--right">5.8&apos;&apos; OLED</span>
        </p>

        <p className="characteristic--left">
          <span>Capacity:</span>
          <span className="characteristic--right">64 GB</span>
        </p>

        <p className="characteristic--left">
          <span>RAM:</span>
          <span className="characteristic--right">4 GB</span>
        </p>
      </div>

      <div className="card__product--buttons">
        <button
          className={cn('button--add', {
            'button--add--active': bought,
          })}
          onClick={() => setBought(!bought)}>
          {buttonText}
        </button>

        <button
          className={cn('button--like', {
            'button--like--active': favourite,
          })}
          onClick={() => setFavourite(!favourite)}>
          <img src={buttonHeart} />
        </button>
      </div>
    </div>
  );
};
