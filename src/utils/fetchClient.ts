export const BASE_URL = 'https://gadjets-store-apu.onrender.com';

function wait(delay: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

function request<T>(url: string, method: string = 'GET'): Promise<T> {
  const token = localStorage.getItem('token');

  const headers = new Headers({
    Authorization: `Bearer ${token}`
  });

  const options: RequestInit = { method, headers };

  return wait(300)
    .then(() => fetch(BASE_URL + url, options))
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
