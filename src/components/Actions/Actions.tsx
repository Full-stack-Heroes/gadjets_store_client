import { FC, useState } from 'react';
import styles from './Action.module.scss';
import classNames from 'classnames/bind';
import heart from '../../assets/icons/Heart.svg';
import filledheart from '../../assets/icons/Heart_Filled.svg';
import { generateId, linkByCapacity, linkByColor, normalizeMemory, normalizeRam, normalizeWatchBand } from '../../utils/helpers';
import { ProductDetails } from '../../types/productDetails';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { Product } from '../../types/product';
import { addToCart, removeFromCart } from '../../actions/cartActions';
import { Link } from 'react-router-dom';
import { productColors } from '../styles/productColors';

const cn = classNames.bind(styles);

interface Props {
  className: string | undefined;
  product: ProductDetails;
}

interface CustomStyleProps extends React.CSSProperties {
  '--after-background-color'?: string;
}

export const Actions: FC<Props> = ({ className, product }) => {
  const productsInCart = useSelector((state: RootState) => state.cart.cartItems as Product[]);
  const isProductInCart = productsInCart.some((item: Product) => item.itemId === product.id);

  const [productAdded, setProductAdded] = useState(isProductInCart);
  const [productLiked, setProductLiked] = useState(false);
  const buttonText = productAdded ? 'added' : 'add to cart';
  const buttonHeart = productLiked ? filledheart : heart;

  const dispatch = useDispatch();

  const {
    id,
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
    productItemInfo,
  } = product;

  const handleProductAdded = () => {
    if (!productAdded) {
      dispatch(addToCart(productItemInfo));
    } else {
      dispatch(removeFromCart(id));
    }

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
        </div>

        {colorsAvailable.map((colorAv) => (
          <Link
            to={linkByColor(colorAv)}
            className={cn('Actions__color', {
              'Actions__color--active': color === colorAv,
            })}
            style={{ '--after-background-color': String(productColors[colorAv]) } as CustomStyleProps}
            key={generateId()}>
          </Link>
        ))}
      </div>

      <div className={cn('Actions__capacity')}>
        {productItemInfo.category === 'accessories' ? (
          <p className={cn('Actions__header')}>Select watch band</p>
        ) : (
          <p className={cn('Actions__header')}>Select capacity</p>
        )}

        {capacityAvailable.map((capacityAv) => (
          <Link
            to={linkByCapacity(capacityAv)}
            className={cn('Actions__capacityButton', {
              'Actions__capacityButton--active': capacity === capacityAv,
            })}
            key={generateId()}>
            {productItemInfo.category === 'accessories' ? (
              normalizeWatchBand(capacityAv)
            ) : (
              normalizeMemory(capacityAv)
            )}
          </Link>
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
            {normalizeRam(ram)}
          </span>
        </p>
      </div>
    </div>
  );
};
