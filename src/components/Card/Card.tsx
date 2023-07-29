import React, { useState } from 'react';
import cn from 'classnames';
import './card.scss';
import heart from '../../assets/icons/Heart.svg';
import filledheart from '../../assets/icons/Heart_Filled.svg';
import phone from '../../assets/6c05b192e9d229d5e415bad59e64ac49.png';

export const Card: React.FC = () => {
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
    <div className="card">
      <img
        src={phone}
        className="card__product-image"
      />

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
            'button--add--active': productAdded,
          })}
          onClick={() => handleProductAdded()}
        >

          {buttonText}
        </button>

        <button
          className={cn('button--like', {
            'button--like--active': productLiked,
          })}
          onClick={() => handleProductLiked()}
        >
          <img src={buttonHeart} />
        </button>
      </div>
    </div>
  );
};
