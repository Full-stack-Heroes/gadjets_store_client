import { FC, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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
  const ramCapacity = ram.slice(0, -2);
  if (parseInt(ram) > 32) {
    return ramCapacity + ' MB';
  }
  return ramCapacity + ' GB';
};

export const normalizeWatchBand = (ram: string) => {
  return ram.slice(0, -2) + ' mm';
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

export const linkByCapacity = (capacity: string) => {
  const path = location.pathname.split('-');

  path[path.length - 2] = capacity.toLowerCase();
  const newLink = path.join('-');

  return newLink;
};

export const linkByColor = (color: string) => {
  const path = location.pathname.split('-');

  path[path.length - 1] = color.toLowerCase();

  console.log(path);

  const newLink = path.join('-');

  return newLink;
};

export const PageToTop: FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const capitalizeWord = (word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

export const formatProductName = (inputString: string) => {
  const words = inputString.split('-');

  const capitalizedWords = words.map((word, index) =>
    word === 'se' || word.slice(-2) === 'gb' || word.slice(-2) === 'tb'
      ? word.toUpperCase()
      : index === 1 && word !== 'watch'
        ? word.slice(0, 2).toUpperCase() + word.slice(2)
        : capitalizeWord(word)
  );

  return capitalizedWords.join(' ').replace(/undefined/g, '');
};

export const debounce = <T extends string[]>(
  f: (...args: T) => void,
  delay: number,
) => {
  let timerId: NodeJS.Timeout;

  return (...args: T) => {
    clearTimeout(timerId);
    timerId = setTimeout(f, delay, ...args);
  };
};
