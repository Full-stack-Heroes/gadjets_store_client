import React, { useState } from 'react';
import cn from 'classnames';
import styles from './Card.module.scss';
import heart from '../../assets/icons/Heart.svg';
import filledheart from '../../assets/icons/Heart_Filled.svg';
import { Product } from '../../types/product';
import { normalizeImage, normalizeMemory } from '../../utils/helpers';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../actions/cartActions';
import { addToFavourites, removeFromFavourites } from '../../actions/favouriteActions';
import { RootState } from '../../store';

interface Props {
  product: Product;
}

export const Card: React.FC<Props> = ({ product }) => {
  const products = useSelector((state: RootState) => state.cart.cartItems as Product[]);
  const likedProducts = useSelector((state: RootState) => state.favorites.favoriteItems as Product[]);
  const isProductInCart = products.some((item: Product) => item.itemId === product.itemId);
  const isProductInFavourites = likedProducts.some((item: Product) => item.itemId === product.itemId);

  const [productAdded, setProductAdded] = useState(isProductInCart);
  const [productLiked, setProductLiked] = useState(isProductInFavourites);
  const buttonText = productAdded ? 'added' : 'add to cart';
  const buttonHeart = productLiked ? filledheart : heart;

  const dispatch = useDispatch();

  const handleProductAdded = () => {
    if (!productAdded) {
      dispatch(addToCart(product));
    } else {
      dispatch(removeFromCart(product.id));
    }

    setProductAdded(!productAdded);
  };

  const handleProductLiked = () => {
    if (!productLiked) {
      dispatch(addToFavourites(product));
    } else {
      dispatch(removeFromFavourites(product.id));
    }

    setProductLiked(!productLiked);
  };

  const {
    itemId,
    image,
    name,
    category,
    fullPrice,
    price,
    screen,
    capacity,
    ram,
  } = product;

  const productPageLink = `/${category}/${itemId}`;

  return (
    <div className={styles.card}>
      <Link className={styles.card_link} to={productPageLink}>
        <img
          src={normalizeImage(image)}
          className={styles.card__product_image}
        />
      </Link>

      <Link to={productPageLink} className={styles.card__product_name}>
        {name}
      </Link>

      <p className={styles.card__product_price}>
        <span className={styles.card__product_price_discount}>${price}</span>
        <span className={styles.card__product_price_full}>${fullPrice}</span>
      </p>

      <div className={styles.card__product_characteristics}>
        <p className={styles.characteristic_left}>
          <span>Screen:</span>
          <span className={styles.characteristic_right}>{screen}</span>
        </p>

        <p className={styles.characteristic_left}>
          <span>Capacity:</span>
          <span className={styles.characteristic_right}>
            {normalizeMemory(capacity)}
          </span>
        </p>

        <p className={styles.characteristic_left}>
          <span>RAM:</span>
          <span className={styles.characteristic_right}>
            {normalizeMemory(ram)}
          </span>
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
