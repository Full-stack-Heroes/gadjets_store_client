import { FC, ChangeEvent, useState } from 'react';
import { registerUser, loginUser } from '../../utils/authentication';
import { ErrorModal } from '../../components/ErrorModal/ErrorModal';
import styles from './Reagistration.module.scss';
import { Link } from 'react-router-dom';

export const Registration: FC = () => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userRepeatPassword, setUserRepeatPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [checkboxChecked, setCheckboxChecked] = useState(false);

  const handleCheckboxChange = () => {
    setCheckboxChecked(!checkboxChecked);
  };

  const handleRegistration = async () => {
    if (userPassword !== userRepeatPassword) {
      setError('Passwords do not match');
      return;
    }

    if (userName.length < 4 || userName.length >= 32) {
      setError('Username must be at least 4 characters');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(userEmail)) {
      setError('Invalid email format');
      return;
    }

    if (userPassword.length < 8 || userPassword.length >= 32) {
      setError('Password must be at least 8 characters long');
      return;
    }

    if (!/[a-z]/.test(userPassword) || !/[A-Z]/.test(userPassword)) {
      setError('Password must contain both lowercase and uppercase letters');
      return;
    }

    if (!checkboxChecked) {
      setError('Checkbox must be checked');
      return;
    }

    try {
      await registerUser({
        email: userEmail,
        username: userName,
        password: userPassword,
      });
      await loginUser({
        email: userEmail,
        password: userPassword,
      });
      window.location.href = '/';

    } catch (error) {
      setError(`Registration failed: ${error}`);
    }
  };

  const handleUserNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value.trim());
  };

  const handleUserEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserEmail(event.target.value.trim());
  };

  const handleUserPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserPassword(event.target.value.trim());
  };

  const handleUserRepeatPasswordChange = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    setUserRepeatPassword(event.target.value.trim());
  };

  return (
    <div className={styles.reg__container}>
      <div className={styles.reg__image_container}>
        <div className={styles.reg__image}></div>
      </div>
      <form className={styles.reg__form}>
        <div className={styles.reg__line}>
          <label>Username</label>
          <input
            className={styles.reg__input}
            onChange={(event) => handleUserNameChange(event)}
            placeholder="Name..."
            value={userName}
          />
        </div>
        <div className={styles.reg__line}>
          <label>Email</label>
          <input
            value={userEmail}
            onChange={(event) => handleUserEmailChange(event)}
            className={styles.reg__input}
            placeholder="Email address..."
            required
          />
        </div>
        <div className={styles.reg__line}>
          <label>Password</label>
          <input
            value={userPassword}
            onChange={(event) => handleUserPasswordChange(event)}
            className={styles.reg__input}
            placeholder="Password..."
            type="password"
            required
          />
        </div>
        <div className={styles.reg__line}>
          <label>Repeat Password</label>
          <input
            value={userRepeatPassword}
            onChange={(event) => handleUserRepeatPasswordChange(event)}
            className={styles.reg__input}
            type="password"
            placeholder="Repeat..."
            required
          />
        </div>
        <div className={styles.checkbox__container}>
          <input
            type="checkbox"
            id="Rules"
            required
            defaultChecked={checkboxChecked}
            onClick={handleCheckboxChange}
          />
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
          <button
            className={styles.button}
            type="button"
            onClick={() => handleRegistration()}>
            Sign Up
          </button>
        </div>
        <div className={styles.log__text}>
          <p>
            Have an account? &nbsp;
            <Link
              className={styles.signup}
              to="/login"
            >
              Log In
            </Link>
          </p>
        </div>
      </form>
      <ErrorModal error={error} onClose={() => setError(null)} />
    </div>
  );
};
