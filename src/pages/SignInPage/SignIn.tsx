import { FC, useState, ChangeEvent } from 'react';
import styles from './SignIn.module.scss';
import { loginUser } from '../../utils/authentication';

export const SognIn: FC = () => {
  const [userLogin, setUserLogin] = useState('');
  const [userParol, setUserParol] = useState('');

  const handleUserLoginChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserLogin(event.target.value.trim());
  };

  const handleUserParolChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserParol(event.target.value.trim());
  };

  const handleLogin = async () => {
    await loginUser({
      email: userLogin,
      password: userParol,
    });
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUserLogin('');
    setUserParol('');
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
          <button
            className={styles.button}
            type="button"
            onClick={() => handleLogout()}>
            Log out
          </button>
        </div>
        <div className={styles.log__text}>
          <p className={styles.asd}>
            New with us? &nbsp;
            <a className={styles.signup}>
              Sign Up
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};
