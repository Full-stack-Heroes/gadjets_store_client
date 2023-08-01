import { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { Product } from '../../types/product';
import { fetchProducts } from '../../actions/productsActions';
import { RootState } from '../../store';
import { Cards } from '../../components/Cards/Cards';

interface Props {
  endpoint: string;
  products: Product[];
  isLoading: boolean;
  fetchProducts: (endpoint: string) => void;
}

export const ProductsPage: FC<Props> = ({
  endpoint,
  products,
  isLoading,
  fetchProducts,
}) => {
  useEffect(() => {
    fetchProducts(endpoint);
  }, [fetchProducts]);

  return (
    <div>
      <Cards products={products} isLoading={isLoading} />
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  products: state.products.products,
  isLoading: state.products.isLoading,
});

const mapDispatchToProps = {
  fetchProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);
