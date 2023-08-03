import { FC, useEffect } from 'react';
import { fetchProducts } from '../../actions/productsActions';
import { RootState } from '../../store';
import { Cards } from '../../components/Cards/Cards';
import { useSelector, useDispatch } from 'react-redux';

interface Props {
  endpoint: string;
}

export const ProductsPage: FC<Props> = ({ endpoint }) => {
  const products = useSelector((state: RootState) => state.products.products);
  const isLoading = useSelector((state: RootState) => state.products.isLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts(endpoint));
  }, []);

  return (
    <Cards products={products} isLoading={isLoading} />
  );
};
