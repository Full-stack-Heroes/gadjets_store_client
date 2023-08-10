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
    const dataFromServer = await login(credentials);

    if (!dataFromServer) {
      throw new Error('User not found');
    }

    const { token, cartData, favoritesData } = dataFromServer;

    console.log(cartData);

    localStorage.setItem('cartItems', JSON.stringify(cartData));
    localStorage.setItem('favoriteItems', JSON.stringify(favoritesData));

    localStorage.setItem('token', token);
    console.log('User logged in with token:', token);
};
