import React, { useState } from 'react';
import arrow from '../../assets/icons/Arrow.svg';
import arrowBlack from '../../assets/icons/ArrowBlack.svg';
import cn from 'classnames';
import './pagination.scss';

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
    <ul className="pagination">
      <li
        className={cn(
          'pagination__number',
          'pagination__arrow',
          'pagination__arrow--left',
          {
            'pagination__number--disabled': isFirstPage,
          },
        )}
        onClick={() => handleMoveToPreviousPage()}>
        {isFirstPage ? (
          <img src={arrow} alt="Arrow Left" />
        ) : (
          <img src={arrowBlack} alt="Arrow Left" />
        )}
      </li>

      {items.map((item, index) => {
        const isPageSelected = currentPage === item;
        const isLastItem = index === items.length - 1;

        return (
          <li
            key={item}
            onClick={() => handlePageChange(item)}
            className={cn('pagination__number', {
              'pagination__number--active': isPageSelected,
              'pagination__number--last': isLastItem,
            })}>
            {item}
          </li>
        );
      })}
      <li
        className={cn(
          'pagination__number',
          'pagination__arrow',
          'pagination__arrow--right ',
          {
            'pagination__number--disabled': isLastPage,
          },
        )}
        onClick={() => handleMoveToNextPage()}>
        {isLastPage ? (
          <img src={arrow} alt="Arrow Right" />
        ) : (
          <img src={arrowBlack} alt="Arrow Right" />
        )}
      </li>
    </ul>
  );
};
