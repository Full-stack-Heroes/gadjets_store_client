import { getProducts } from '../api/phones';

export const getPhones = async () => {
  const products = await getProducts();

  const phones = products.filter((product) => product.category === 'phones');

  return phones;
};

export const normalizeImage = (img: string) => {
  const imgLink = img.slice(0, -4);

  return 'https://gadjets-store-apu.onrender.com/' + imgLink + 'jpg';
};

export const normalizeMemory = (memory: string) => {
  const capacity = memory.slice(0, -2);

  return capacity + ' GB';
};
