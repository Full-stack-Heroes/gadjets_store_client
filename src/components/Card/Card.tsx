import React, { useState } from 'react';
import cn from 'classnames';
import styles from './Card.module.scss'
import heart from '../../assets/icons/Heart.svg';
import filledheart from '../../assets/icons/Heart_Filled.svg';
import phone from '../../assets/6c05b192e9d229d5e415bad59e64ac49.png';

interface CardProps {
  className?: string;
}

export const Card: React.FC<CardProps> = ({ className }) => {
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
    <div className={`${styles.card} ${className}`}>
      <img src={phone} className={styles.card__product_image} />

      <h2 className={styles.card__product_name}>
        Apple iPhone Xs 64GB Silver (iMT9G2FSA)
      </h2>

      <p className={styles.card__product_price}>$999</p>

      <div className={styles.card__product_characteristics}>
        <p className={styles.characteristic_left}>
          <span>Screen:</span>
          <span className={styles.characteristic_right}>5.8&apos;&apos; OLED</span>
        </p>

        <p className={styles.characteristic_left}>
          <span>Capacity:</span>
          <span className={styles.characteristic_right}>64 GB</span>
        </p>

        <p className={styles.characteristic_left}>
          <span>RAM:</span>
          <span className={styles.characteristic_right}>4 GB</span>
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
