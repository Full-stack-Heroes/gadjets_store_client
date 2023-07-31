import React, { useState } from 'react';
import cn from 'classnames';
import './card.scss';
import heart from '../../assets/icons/Heart.svg';
import filledheart from '../../assets/icons/Heart_Filled.svg';
import { Phone } from '../../types/phone';
import { normalizeImage, normalizeMemory } from '../../utils/helpers';

interface Props {
  phone: Phone;
}

export const Card: React.FC<Props> = ({ phone }) => {
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

  const { image, name, price, screen, capacity, ram } = phone;

  return (
    <div className="card">
      <img src={normalizeImage(image)} className="card__product-image" />

      <h2 className="card__product-name">{name}</h2>

      <p className="card__product-price">${price}</p>

      <div className="card__product--characteristics">
        <p className="characteristic--left">
          <span>Screen:</span>
          <span className="characteristic--right">{screen}</span>
        </p>

        <p className="characteristic--left">
          <span>Capacity:</span>
          <span className="characteristic--right">{normalizeMemory(capacity)}</span>
        </p>

        <p className="characteristic--left">
          <span>RAM:</span>
          <span className="characteristic--right">{normalizeMemory(ram)}</span>
        </p>
      </div>

      <div className="card__product--buttons">
        <button
          className={cn('button--add', {
            'button--add--active': productAdded,
          })}
          onClick={() => handleProductAdded()}>
          {buttonText}
        </button>

        <button
          className={cn('button--like', {
            'button--like--active': productLiked,
          })}
          onClick={() => handleProductLiked()}>
          <img src={buttonHeart} />
        </button>
      </div>
    </div>
  );
};
