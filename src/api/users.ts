import { Credentials } from '../types/authentification';
import { client } from '../utils/fetchClient';

export const login = (credentials: Credentials) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return client.post<any>('/user/login', credentials);
};
