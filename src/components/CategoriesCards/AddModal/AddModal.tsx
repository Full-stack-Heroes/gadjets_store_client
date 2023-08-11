import { FC } from 'react';
import cn from 'classnames';
import errorImg from '../../../assets/icons/error.png';
import styles from './AddModal.module.scss';

type Props = {
  handleModalClose: () => void;
  isLoggedIn: boolean;
};

export const AddModal: FC<Props> = ({ handleModalClose, isLoggedIn }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.errorModal}>
        <div
          className={cn(styles.errorModalContent, {
            [styles.errorModalContentActive]: isLoggedIn,
          })}>
          <img src={errorImg} className={styles.errorModalContentImage} />
          <h2 className={styles.errorModalContentText}>Oooops...</h2>
          <p className={styles.errorModalContentError}>
            You have to login to add products to cart
          </p>
          <button
            onClick={handleModalClose}
            className={styles.errorModalContentButton}>
            LogIn
          </button>
        </div>
      </div>
    </div>
  );
};
