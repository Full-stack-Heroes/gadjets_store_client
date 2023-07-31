import { FC } from 'react';
import styles from './BurgerMenu.module.scss';
import menu from '../../assets/icons/Menu.svg';

export const BurgerMenu: FC = () => {
  // const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <button className={styles.service_btn}>
      <img src={menu} alt="like button" className={styles.service_btn_img} />
    </button>
  );
};
