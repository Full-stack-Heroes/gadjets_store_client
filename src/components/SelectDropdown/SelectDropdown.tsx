import styles from './SelectDropdown.module.scss';
import classNames from 'classnames/bind';
import { FC, useEffect, useRef, useState } from 'react';
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
  const rootRef = useRef<HTMLDivElement>(null);

  const handleToggleDropdownMenu = () => {
    setIsOpen(prev => !prev);
  };

  const handleOptionClick = (option: Option) => {
    onChange(option.value);
    setCurrentSelected(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className={cn('SelectContainer')}>
      <span className={cn('SelectContainerTitle')}>{title}</span>

      <div
        ref={rootRef}
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
              onClick={() => handleOptionClick(option)}
            >{option.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
