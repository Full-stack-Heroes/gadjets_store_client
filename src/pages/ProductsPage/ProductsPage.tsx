import styles from './ProductsPage.module.scss';
import { FC, useEffect } from 'react';
import { fetchProducts } from '../../actions/productsActions';
import { RootState } from '../../store';
import { Cards } from '../../components/CategoriesCards/Cards';
import { useSelector, useDispatch } from 'react-redux';
import { Pagination } from '../../components/Pagination';
import { useLocation, useSearchParams } from 'react-router-dom';
import classNames from 'classnames/bind';

interface Props {
  endpoint: string;
  title: string;
}

export const ProductsPage: FC<Props> = ({ endpoint, title }) => {
  const cn = classNames.bind(styles);
  const products = useSelector((state: RootState) => state.products.products);
  const isLoading = useSelector((state: RootState) => state.products.isLoading);
  const [searchParams, setSearchParams] = useSearchParams();
  const { search } = useLocation();

  const itemsPerPage = +(searchParams.get('limit') || 12);
  const page = +(searchParams.get('page') || 1);

  const dispatch = useDispatch();

  useEffect(() => {
    const searchQuery = search || '?page=1';

    dispatch(fetchProducts(`${endpoint}${searchQuery}`));
  }, [search]);

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', page.toString());
    setSearchParams(params);
  };

  return (

    <div className={cn('page__container')}>
      <h1 className={cn('titleH1', 'title', 'ProductsPageTitle')}>{title}</h1>

      <Cards
        amount={products.count}
        products={products.rows}
        isLoading={isLoading}
      />

      <Pagination
        phonesCount={products.count}
        itemsPerPage={itemsPerPage}
        currentPage={page}
        onPageChange={handlePageChange}
      />
    </div>
  );
};
