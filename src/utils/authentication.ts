import { UserData, Credentials } from '../types/authentification';
import { login } from '../api/users';

export const registerUser = async (userData: UserData) => {
  const response = await fetch('http://localhost/api/user/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });

  const responseData = await response.json();

  if (!response.ok) {
    throw new Error(responseData.message);
  }

  return responseData.message;
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
