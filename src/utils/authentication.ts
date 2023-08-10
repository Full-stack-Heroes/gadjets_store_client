import { UserData, Credentials } from '../types/authentification';
import { login } from '../api/users';

export const registerUser = async (userData: UserData) => {
  try {
    const response = await fetch('http://localhost:3000/user/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error('Registration failed');
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

export const loginUser = async (credentials: Credentials) => {
  try {
    const dataFromServer = await login(credentials);

    if (!dataFromServer) {
      throw new Error('User not found');
    }

    const { token } = dataFromServer;

    localStorage.setItem('token', token);
    console.log('User logged in with token:', token);
  } catch (error) {
    console.error(error);
  }
};
