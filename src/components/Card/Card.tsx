import React from 'react';
import './card.scss';
import heart from '../../assets/icons/Heart.svg';

export const Card: React.FC = () => {
  return (
    <div className="card" data-qa="card">
      <img
        src="./images/iphone.png"
        alt="APPLE A1419 iMac 27&quot; Retina 5K Monoblock (MNED2UA/A)"
        className="card__product-image"
      />

      <h2 className="card__product-name">
        Apple iPhone Xs 64GB Silver (iMT9G2FSA)
      </h2>

      <p className="card__product-code">
        $999
      </p>

      <div className="card__product--characteristic">
        <p className="card__product-price">
          <span>Screen:</span>
          <span className="card__product-price-cost">5.8'' OLED</span>
        </p>

        <p className="card__product-price">
          <span>Capacity:</span>
          <span className="card__product-price-cost">64 GB</span>
        </p>

        <p className="card__product-price">
          <span>RAM:</span>
          <span className="card__product-price-cost">4 GB</span>
        </p>
      </div>

      <div className="card__product--buttons">
        <button
          className="card__product-buy"
          data-qa="hover"
        >
          Add to cart
        </button>

        <button
          className="card__product-like"
          data-qa="hover"
        >
          <img src={heart} />
        </button>
      </div>
    </div>
  );
};
