import styles from './SelectDropdown.module.scss';
import classNames from 'classnames/bind';
import { FC, useState } from 'react';
import { Arrow } from '../Arrow/Arrow';

interface Props {
  options: Option[],
  onChange: (value: string) => void,
  title: string,
  defaultValue: Option,
}

interface Option {
  title: string,
  value: string,
}

const cn = classNames.bind(styles);

export const SelectDropdown:FC<Props> = (
  {options, onChange, title, defaultValue}
) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSelected, setCurrentSelected] = useState(defaultValue);

  const handleToggleDropdownMenu = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div className={cn('SelectContainer')}>
      <span className={cn('SelectContainerTitle')}>{title}</span>

      <div
        className={cn('SelectField', {
          'SelectFieldActive': isOpen,
        })}
        onClick={handleToggleDropdownMenu}
      >
        <p className={cn('SelectFieldCurrent')}>{currentSelected.title}</p>

        <div className={cn('SelectArrow', {
          'SelectArrowOpen': isOpen
        })}><Arrow /></div>
      </div>

      {isOpen && (
        <ul className={cn('OptionsList')}>
          {options.map(option => (
            <li
              className={cn('OptionsItem')}
              key={option.title}
              onClick={() => onChange(option.value)}
            >{option.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
