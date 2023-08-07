import { FC, useEffect, useState } from 'react';
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
import { productColors } from '../styles/productColors';

const cn = classNames.bind(styles);

interface Props {
  className: string | undefined;
  product: ProductDetails;
  onActionsChange: (path: string, type: string) => void;
  isChanging: boolean;
}

interface CustomStyleProps extends React.CSSProperties {
  '--after-background-color'?: string;
}

export const Actions: FC<Props> = ({ className, product, onActionsChange, isChanging }) => {
  const productsInCart = useSelector((state: RootState) => state.cart.cartItems as Product[]);

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

  const [specsToChange, setSpecsToChange] = useState({
    color,
    capacity,
  });

  const checkIsProductInCard = () => {
    return productsInCart.some((item: Product) => item.itemId === product.id);
  };

  const [isProductInCart, setIsProductInCart] = useState(checkIsProductInCard());
  const [productLiked, setProductLiked] = useState(false);
  const buttonText = isProductInCart ? 'added' : 'add to cart';
  const buttonHeart = productLiked ? filledheart : heart;

  const handleProductAdded = () => {
    if (!isProductInCart) {
      dispatch(addToCart(productItemInfo));
    } else {
      dispatch(removeFromCart(id));
    }

    setIsProductInCart(prev => !prev);
  };

  const handleProductLiked = () => {
    setProductLiked(!productLiked);
  };

  const handleButtionActionClick = (option: string, value: string) => {
    let newUrl = '';

    if (option === 'color') {
      newUrl = linkByColor(value);
    }

    if (option === 'capacity') {
      newUrl = linkByCapacity(value);
    }

    window.history.replaceState({}, '', newUrl);
    onActionsChange(newUrl.slice(1), option);
    setSpecsToChange((prev) => ({
      ...prev,
      [option]: value
    }));
  };

  useEffect(() => {
    setIsProductInCart(checkIsProductInCard);
  }, [product]);

  return (
    <div className={cn('Actions', className)}>
      <div className={cn('Actions__colors')}>
        <div className={cn('Actions__headerId')}>
          <span className={cn('Actions__header')}>Available colors</span>
        </div>

        {colorsAvailable.map((colorAv) => (
          <button
            onClick={() => handleButtionActionClick('color', colorAv)}
            className={cn('Actions__color', {
              'Actions__color--active': specsToChange.color === colorAv,
            })}
            style={{ '--after-background-color': String(productColors[colorAv]) } as CustomStyleProps}
            key={generateId()}>
          </button>
        ))}
      </div>

      <div className={cn('Actions__capacity')}>
        <p className={cn('Actions__header')}>
          {productItemInfo.category === 'accessories'
            ? 'Select display size'
            : 'Select capacity'
          }
        </p>

        {capacityAvailable.map((capacityAv) => (
          <button
            onClick={() => handleButtionActionClick('capacity', capacityAv)}
            className={cn('Actions__capacityButton', {
              'Actions__capacityButton--active': specsToChange.capacity === capacityAv,
            })}
            key={generateId()}>
            {productItemInfo.category === 'accessories'
              ? normalizeWatchBand(capacityAv)
              : normalizeMemory(capacityAv)
            }
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
            ['Button__add--active']: isProductInCart,
            ['Button__add--disabled']: isChanging,
          })}
          onClick={() => handleProductAdded()}
          disabled={isChanging}
        >
          {buttonText}
        </button>

        <button
          className={cn('Button__like', {
            ['Button__like--active']: productLiked,
            ['Button__like--disabled']: isChanging,
          })}
          onClick={() => handleProductLiked()}
          disabled={isChanging}
        >
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
