import { FC, useCallback, useEffect, useState } from 'react';
import styles from './SearchBar.module.scss';
import classNames from 'classnames/bind';
import { Product } from '../../../../types/product';
import { getProducts } from '../../../../api/products';
import { SearchBarMenu } from '../SearchBarMenu/SearchBarMenu';
import search from '../../../../assets/icons/Search.svg';
import { debounce } from '../../../../utils/helpers';

const cn = classNames.bind(styles);

export const SearchBar: FC = () => {
  const [query, setQuery] = useState<string>('');
  const [appliedQuery, setAppliedQuery] = useState<string>('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [productSuggestions, setProductSuggestions] = useState<Product[]>([]);
  const [searchBarVisible, setSearchBarVisible] = useState(true);

  useEffect(() => {
    if (!query.trim()) {
      setShowSuggestions(false);
    }
  }, [query]);

  useEffect(() => {
    setSearchBarVisible(window.innerWidth > 1199);
  }, []);

  const applyQuery = useCallback(debounce(setAppliedQuery, 300), []);

  const handleQueryOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setQuery(value);
    applyQuery(value);
    setShowSuggestions(true);
  };

  const onSelected = () => {
    setQuery('');
    setShowSuggestions(false);
    if (window.innerWidth <= 1199) {
      setSearchBarVisible(false);
    }
  };

  useEffect(() => {
    console.log(appliedQuery);
    if (appliedQuery.trim()) {
      getProducts(`products/search?searchQuery=${appliedQuery}`)
        .then((response) => {
          const products = response;
          setProductSuggestions(products);
        })
        .catch((error) => {
          console.error('Error fetching products:', error);
        });
    } else {
      setProductSuggestions([]);
    }
  }, [appliedQuery]);

  return (
    <div className={cn('SearchBar')}>
      <div className={cn('SearchBar__searchIcon')}>
        <img
          src={search}
          alt="Search"
          onClick={() => setSearchBarVisible(!searchBarVisible)}
        />
      </div>
      {searchBarVisible ? (
        <div className={cn('SearchBar__dropdown')}>
          <div className={cn('SearchBar__dropdownTrigger')}>
            <input
              type="text"
              placeholder="Search for a product"
              className={cn('input')}
              value={query}
              onChange={handleQueryOnChange}
            />
          </div>

          {showSuggestions && (
            <SearchBarMenu
              products={productSuggestions}
              onSelected={onSelected}
            />
          )}
        </div>
      ) : null}
    </div>
  );
};
