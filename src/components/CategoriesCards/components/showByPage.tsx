import { SelectDropdown } from '../../SelectDropdown/SelectDropdown';
import { useQueryParamUpdater } from '../../../hooks/useQueryParamUpdater';
import { FC } from 'react';
import styles from '../cards.module.scss';
import classNames from 'classnames/bind';

const showByPage = [
  { title: '12', value: '12' },
  { title: '24', value: '24' },
  { title: '36', value: '36' },
];

interface Props {
  className: string;
}

const cn = classNames.bind(styles);

export const ShowByPage: FC<Props> = ({ className }) => {
  const queryUpdater = useQueryParamUpdater();

  const handlePageChange = (value: string) => {
    queryUpdater('limit', value);
  };

  return (
    <div className={cn(className)}>
      <SelectDropdown
        defaultValue={showByPage[0]}
        options={showByPage}
        title="Show by page"
        onChange={handlePageChange}
      />
    </div>
  );
};
