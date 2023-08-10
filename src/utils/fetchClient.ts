export const BASE_URL = 'https://gadjets-store-apu.onrender.com';

function request<T>(url: string, method: string = 'GET'): Promise<T> {
  const options: RequestInit = { method };

  return fetch(BASE_URL + url, options)
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }

      return response.json();
    })
    .catch((error) => {
      throw error;
    });
}

export const client = {
  get: <T>(url: string) => request<T>(url),
};
