import React, { useState } from 'react';
import cn from 'classnames';

import { Arrow } from '../Arrow/Arrow';
import styles from './pagination.module.scss';

export const Pagination: React.FC = () => {
  //tests pages and values, will change later
  const items = [1, 2, 3, 4, 5];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 1;
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // const pagesVisited = currentPage * itemsPerPage;
  // const displayItems = items.slice(pagesVisited, pagesVisited + itemsPerPage);

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === pageCount;

  const handlePageChange = (item: number) => {
    setCurrentPage(item);
  };

  const handleMoveToPreviousPage = () => {
    if (isFirstPage) {
      return;
    }

    setCurrentPage((prevState) => prevState - 1);
  };

  const handleMoveToNextPage = () => {
    if (isLastPage) {
      return;
    }

    setCurrentPage((prevState) => prevState + 1);
  };

  return (
    <ul className={styles.pagination}>
      <li
        className={cn(
          'pagination__number',
          'pagination__arrow',
          'pagination__arrow--left', {
            'pagination__arrow--disabled': isFirstPage
          })}
        onClick={() => handleMoveToPreviousPage()}>
        <Arrow/>
      </li>

      {items.map((item, index) => {
        const isPageSelected = currentPage === item;
        const isLastItem = index === items.length - 1;

        return (
          <li
            key={item}
            onClick={() => handlePageChange(item)}
            className={cn(styles.pagination__number, {
              [styles.pagination__number_active]: isPageSelected,
              [styles.pagination__number_last]: isLastItem,
            })}>
            {item}
          </li>
        );
      })}
      <li
        className={cn(
          'pagination__number',
          'pagination__arrow',
          'pagination__arrow--right ', {
            'pagination__arrow--disabled': isLastPage,
          })}
        onClick={() => handleMoveToNextPage()}>
        <Arrow/>
      </li>
    </ul>
  );
};
