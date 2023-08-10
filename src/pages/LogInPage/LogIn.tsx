import { FC, useState, ChangeEvent } from 'react';
import styles from './LogIn.module.scss';
import cn from 'classnames';
import success from '../../assets/icons/success.png';
import errorImage from '../../assets/icons/error.png';
import { loginUser } from '../../utils/authentication';
import { Link } from 'react-router-dom';

export const LogIn: FC = () => {
  const [userLogin, setUserLogin] = useState('');
  const [userParol, setUserParol] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isError, setIsError] = useState<string>('');

  const handleUserLoginChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserLogin(event.target.value.trim());
  };

  const handleUserParolChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserParol(event.target.value.trim());
  };

  const handleErrorClose = () => {
    setIsError('');
  }

  const handleLogin = async () => {
    try {
      await loginUser({
        email: userLogin,
        password: userParol,
      });

      setIsLoggedIn(true);
    } catch (error: any) {
      setIsError(error)
      console.log('agfiuyhsgifudhliuhlsk')
    }
  };

  const handleGoHome = () => {
    setIsLoggedIn(false);
    window.location.href = '/';
  };

  return (
    <div className={styles.reg__container}>
      <div className={styles.reg__image_container}>
        <div className={styles.reg__image}></div>
      </div>
      <form className={styles.reg__form}>
        <div className={styles.reg__line}>
          <label>Email</label>
          <input
            value={userLogin}
            onChange={(event) => handleUserLoginChange(event)}
            className={styles.reg__input}
            placeholder="Email address..."
            required
          />
        </div>
        <div className={styles.reg__line}>
          <label>Password</label>
          <input
            value={userParol}
            onChange={(event) => handleUserParolChange(event)}
            className={styles.reg__input}
            placeholder="Password..."
            type="password"
            required
          />
        </div>
        <div className={styles.reg__buttons}>
          <button
            type="button"
            className={styles.button}
            onClick={() => handleLogin()}>
            Log In
          </button>
        </div>
        <div className={styles.log__text}>
          <p className={styles.asd}>
            New with us? &nbsp;
            <Link to="/registration" className={styles.signup}>
              Sign Up
            </Link>
          </p>
        </div>
      </form>

      {isLoggedIn && (
        <>
          <div className={styles.backdrop}></div>
          <div className={styles.errorModal}>
            <div
              className={cn(styles.errorModalContent, {
                [styles.errorModalContentActive]: isLoggedIn,
              })}>
              <img src={success} className={styles.errorModalContentImage} />
              <h2 className={styles.errorModalContentText}>Success !</h2>
              <p className={styles.errorModalContentError}>You have successfully logged in!</p>
              <button
                className={styles.errorModalContentButton}
                onClick={() => handleGoHome()}>
                Start shopping!!!
              </button>
            </div>
          </div>
        </>
      )}
      {isError && (
        <>
        <div className={styles.backdrop}></div>
        <div className={styles.errorModal}>
          <div
            className={cn(styles.errorModalContent, {
              [styles.errorModalContentActive]: isError,
            })}>
            <img src={errorImage} className={styles.errorModalContentImage} />
            <h2 className={styles.errorModalContentText}>Error</h2>
            <p className={styles.errorModalContentError}>Please, check your Email or Password again</p>
            <button onClick={handleErrorClose} className={styles.errorModalContentButton}>
              Close
            </button>
          </div>
        </div>
      </>
      )}
    </div>
  );
};
