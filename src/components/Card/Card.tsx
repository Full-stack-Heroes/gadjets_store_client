import React, { useState } from 'react';
import cn from 'classnames';
import styles from './Card.module.scss';
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
    <div className={styles.card}>
      <img src={normalizeImage(image)} className={styles.card__product_image} />

      <h2 className={styles.card__product_name}>
        {name}
      </h2>

      <p className={styles.card__product_price}>${price}</p>

      <div className={styles.card__product_characteristics}>
        <p className={styles.characteristic_left}>
          <span>Screen:</span>
          <span className={styles.characteristic_right}>{screen}</span>
        </p>

        <p className={styles.characteristic_left}>
          <span>Capacity:</span>
          <span className={styles.characteristic_right}>{normalizeMemory(capacity)}</span>
        </p>

        <p className={styles.characteristic_left}>
          <span>RAM:</span>
          <span className={styles.characteristic_right}>{normalizeMemory(ram)}</span>
        </p>
      </div>

      <div className={styles.card__product_buttons}>
        <button
          className={cn(styles.button__add, {
            [styles.button__add_active]: productAdded,
          })}
          onClick={() => handleProductAdded()}>
          {buttonText}
        </button>

        <button
          className={cn(styles.button__like, {
            [styles.button__like_active]: productLiked, //for future animation
          })}
          onClick={() => handleProductLiked()}>
          <img src={buttonHeart} />
        </button>
      </div>
    </div>
  );
};
