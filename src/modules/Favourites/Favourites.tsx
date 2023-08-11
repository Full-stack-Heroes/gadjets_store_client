import { FC, useEffect, useState } from 'react';
import { Card } from '../../components/Card/Card';
import { Link, useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import home from '../../assets/icons/Home.svg';
import heart from '../../assets/icons/favourites.png';
import { Arrow } from '../../components/Arrow/Arrow';
import styles from './Favourites.module.scss';
import { AddModal } from '../../components/CategoriesCards/AddModal/AddModal';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

export const Favourites: FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const handleModalClose = () => {
    setIsLoggedIn(true);
    window.location.href = '/login';
  };

  const favouritesItems = useSelector(
    (state: RootState) => state.favorites.favoriteItems,
  );

  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login');
    }
  }, []);

  const cn = classNames.bind(styles);

  return favouritesItems.length ? (
    <section className={styles.content}>
      <div className={styles.favourites}>
        <div className={styles.favourites__links}>
          <Link to="/">
            <img src={home} />
          </Link>
          <div className={styles.arrow}>
            <Arrow />
          </div>
          <p>Favourites</p>
        </div>

        <div className={styles.favourites__text}>
          <h1 className={styles.favourites__title}>Favourites</h1>

          <p>
            {favouritesItems.length > 1
              ? `${favouritesItems.length} items`
              : `${favouritesItems.length} item`}
          </p>
        </div>

        <div className={styles.favorites__cards}>
          <div className={styles.cards__container}>
            {favouritesItems.map((item) => (
              <Card
                product={item}
                key={item.id}
                setIsLoggedIn={setIsLoggedIn}
                isLoggedIn={isLoggedIn  }
              />
            ))}
          </div>
        </div>
      </div>

      {isLoggedIn && (
        <AddModal isLoggedIn={isLoggedIn} handleModalClose={handleModalClose} />
      )}
    </section>
  ) : (
    <div className={styles.emptyContainer}>
      <img src={heart} alt="" />
      <h2
        className={cn(styles.emptyContainerText, styles.title, styles.titleH2)}>
        {'Noting here yet :('}
      </h2>
      <h2 className={styles.emptyContainerBottomText}>
        Let&apos;s better look what we have
      </h2>
      <Link to="/" className={styles.emptyContainerButton}>
        find something!
      </Link>
    </div>
  );
};
