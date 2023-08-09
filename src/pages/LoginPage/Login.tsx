import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './Login.module.scss';

export const Login: FC = () => {
  return (
    <div className={styles.reg__container}>
      <div className={styles.reg__image_container}>
        <div className={styles.reg__image}></div>
      </div>
      <form className={styles.reg__form}>
        <div className={styles.reg__line}>
          <label>Email</label>
          <input
            className={styles.reg__input}
            placeholder="Email address..."
            required
          />
        </div>
        <div className={styles.reg__line}>
          <label>Password</label>
          <input
            className={styles.reg__input}
            placeholder="Password..."
            type="password"
            required
          />
        </div>
        <div className={styles.reg__buttons}>
          <button className={styles.button}>Log In</button>
        </div>
        <div className={styles.log__text}>
          <p className={styles.asd}>
            New with us? &nbsp;
            <Link to="/registration" className={styles.signup}>Sign Up</Link>
          </p>
        </div>
      </form>
    </div>
  );
};
