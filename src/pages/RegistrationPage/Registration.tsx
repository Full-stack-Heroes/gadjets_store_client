import { FC, useState } from 'react';
import styles from './Reagistration.module.scss';

export const Registration: FC = () => {
  const [isLogged, setIsLoggd] = useState(false);

  const handleLogIn = () => {
    setIsLoggd(!isLogged);
  };

  return isLogged ? (
    <div className={styles.reg__container}>
      <div className={styles.reg__image_container}>
        <div className={styles.reg__image}></div>
      </div>
      <form className={styles.reg__form}>
        <div className={styles.reg__line}>
          <label>Username</label>
          <input className={styles.reg__input} placeholder="Name..." />
        </div>
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
        <div className={styles.reg__line}>
          <label>Repeat Password</label>
          <input
            className={styles.reg__input}
            type="password"
            placeholder="Repeat..."
            required
          />
        </div>
        <div className={styles.checkbox__container}>
          <input type="checkbox" id="Rules" required />
          <label htmlFor="Rules">
            I agree to the &nbsp;
            <a
              href="https://creativecommons.org/licenses/by/4.0/"
              className={styles.link}
              target="_blank"
              rel="noreferrer">
              Terms of Use
            </a>
          </label>
        </div>
        <div className={styles.reg__buttons}>
          <button className={styles.button}>Sign Up</button>
        </div>
        <div className={styles.log__text}>
          <p className={styles.asd}>
            Have an account? &nbsp;
            <a className={styles.signup} onClick={() => handleLogIn()}>
              Log In
            </a>
          </p>
        </div>
      </form>
    </div>
  ) : (
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
            <a className={styles.signup} onClick={() => handleLogIn()}>
              Sign Up
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};
