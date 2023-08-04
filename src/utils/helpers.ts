import { ProductDetails } from '../types/productDetails';
import { productSpecs } from '../types/productSpecs';
import { BASE_URL } from './fetchClient';

export const normalizeImage = (img: string) => {
  return BASE_URL + `/${img}`;
};

export const normalizeMemory = (memory: string) => {
  const capacity = memory.slice(0, -2);
  if (parseInt(capacity) < 32) {
    return capacity + ' TB';
  }
  return capacity + ' GB';
};

export const normalizeRam = (ram: string) => {
  return ram.slice(0, -2) + ' ' + 'GB';
};

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

export const getSpecsFromProductData = (
  productData: ProductDetails,
): productSpecs => {
  const { screen, resolution, processor, ram, camera, zoom, cell } = productData;

  return {
    screen,
    resolution,
    processor,
    ram,
    camera,
    zoom,
    cell,
  };
};

export const generateId = () => Math.floor(Math.random() * 10001);
