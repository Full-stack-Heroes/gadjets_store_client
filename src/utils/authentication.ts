import { UserData, Credentials } from '../types/authentification';

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
    const response = await fetch('http://localhost:3000/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }

    const data = await response.json();
    const { token } = data;

    localStorage.setItem('token', token);
    console.log('User logged in with token:', token);
  } catch (error) {
    console.error(error);
  }
};
