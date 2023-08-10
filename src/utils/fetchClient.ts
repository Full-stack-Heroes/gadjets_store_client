/* eslint-disable @typescript-eslint/no-explicit-any */
export const BASE_URL = 'http://localhost:3000';

type RequestMethod = 'GET' | 'POST' | 'DELETE';

function request<T>(
  url: string,
  method: RequestMethod = 'GET',
  data: any = null,
): Promise<T> {
  const token = localStorage.getItem('token');

  const options: RequestInit = { method };

  if (data) {
    options.body = JSON.stringify(data);
    options.headers = {
      'Content-Type': 'application/json; charset=UTF-8',
      'Authorization': `Bearer ${token}`,
    };
  }

  console.log(options);

  return fetch(BASE_URL + url, options)
    .then((response) => {
      if (!response.ok) {
        return response.json().then((error) => {
          throw new Error(error.message);
        });
      }

      return response.json();
    })
    .catch((error) => {
      console.log(error);
    });
}

export const client = {
  get: <T>(url: string) => request<T>(url),
  post: <T>(url: string, data: any) => request<T>(url, 'POST', data),
  delete: (url: string, data: any) => request(url, 'DELETE', data),
};
