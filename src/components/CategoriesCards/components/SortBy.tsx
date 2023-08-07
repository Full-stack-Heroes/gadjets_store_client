
import { FC } from 'react';
import { useQueryParamUpdater } from '../../../hooks/useQueryParamUpdater';
import { SelectDropdown } from '../../SelectDropdown/SelectDropdown';
import classNames from 'classnames/bind';
import styles from '../cards.module.scss';

const sortByVariants = [
  {title: 'Year', value: 'year'},
  {title: 'Price', value: 'price'},
  {title: 'Screen', value: 'screen'},
  {title: 'Capacity', value: 'capacity'},
];

interface Props {
  className: string;
}

const cn = classNames.bind(styles);

export const SortBy:FC<Props> = ({ className }) => {
  const queryUpdater = useQueryParamUpdater();

  const handlePageChange = (value: string) => {
    queryUpdater('sortBy', value);
  };

  return (
    <div className={cn(className)}>
      <SelectDropdown
        defaultValue={sortByVariants[0]}
        options={sortByVariants}
        title="Sort by"
        onChange={handlePageChange}
      />
    </div>
  );
};
