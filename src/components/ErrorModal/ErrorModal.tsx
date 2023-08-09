import { FC } from 'react';
import cn from 'classnames';
import errorpng from '../../assets/icons/error.png';
import styles from './Error.module.scss';

export const ErrorModal: FC<{ error: string | null; onClose: () => void }> = ({
  error,
  onClose,
}) => {
  if (!error) {
    return null;
  }

  return (
    error && (
      <>
        <div className={styles.backdrop}></div>
        <div className={styles.errorModal}>
          <div
            className={cn(styles.errorModalContent, {
              [styles.errorModalContentActive]: error, // Apply the active class based on error
            })}>
            <img src={errorpng} className={styles.errorModalContentImage} />
            <h2 className={styles.errorModalContentText}>Error</h2>
            <p className={styles.errorModalContentError}>{error}</p>
            <button
              onClick={onClose}
              className={styles.errorModalContentButton}>
              Close
            </button>
          </div>
        </div>
      </>
    )
  );
};
