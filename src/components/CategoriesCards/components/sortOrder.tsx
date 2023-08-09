
import { FC } from 'react';
import { useQueryParamUpdater } from '../../../hooks/useQueryParamUpdater';
import { SelectDropdown } from '../../SelectDropdown/SelectDropdown';
import classNames from 'classnames/bind';
import styles from '../cards.module.scss';

const sortByVariants = [
  {title: 'Descending', value: ''},
  {title: 'Ascending', value: 'asc'},
];

interface Props {
  className: string;
}

const cn = classNames.bind(styles);

export const SortOrder:FC<Props> = ({ className }) => {
  const queryUpdater = useQueryParamUpdater();

  const handlePageChange = (value: string) => {
    queryUpdater('order', value);
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
