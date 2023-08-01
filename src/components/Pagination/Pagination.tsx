import { FC } from 'react';
import cn from 'classnames';
import { scrollToTop } from '../../utils/helpers';
import { Arrow } from '../Arrow/Arrow';
import styles from './pagination.module.scss';

interface Props {
  phonesCount: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const Pagination: FC<Props> = ({
  phonesCount,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const pageCount = Math.ceil(phonesCount / itemsPerPage);

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === pageCount;

  const handleMoveToPreviousPage = () => {
    if (isFirstPage) {
      return;
    }

    onPageChange(currentPage - 1);
    scrollToTop();
  };

  const handleMoveToNextPage = () => {
    if (isLastPage) {
      return;
    }

    onPageChange(currentPage + 1);
    scrollToTop();
  };

  const handleChangePage = (page: number) => {
    onPageChange(page);
    scrollToTop();
  };

  return (
    <ul className={styles.pagination}>
      <li
        className={cn(
          styles.pagination__number,
          styles.pagination__arrow,
          styles.pagination__arrow_left,
          {
            [styles.pagination__arrow_disabled]: isFirstPage,
          },
        )}
        onClick={() => handleMoveToPreviousPage()}>
        <Arrow />
      </li>

      {Array.from({ length: pageCount }, (_, index) => index + 1).map((page) => {
        const isPageSelected = currentPage === page;
        const isLastItem = page === pageCount;

        return (
          <li
            key={page}
            onClick={() => handleChangePage(page)}
            className={cn(styles.pagination__number, {
              [styles.pagination__number_active]: isPageSelected,
              [styles.pagination__number_last]: isLastItem,
            })}>
            {page}
          </li>
        );
      })}
      <li
        className={cn(
          styles.pagination__number,
          styles.pagination__arrow,
          styles.pagination__arrow_right,
          {
            [styles.pagination__arrow_disabled]: isLastPage,
          },
        )}
        onClick={() => handleMoveToNextPage()}>
        <Arrow />
      </li>
    </ul>
  );
};
