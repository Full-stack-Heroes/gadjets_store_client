import {
  createStore,
  applyMiddleware,
  combineReducers,
  Store,
  AnyAction,
} from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import productsReducer from './reducers/productsReducer';
import cartReducer from './reducers/cartReducer';

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store: Store<RootState, AnyAction> & {
  dispatch: ThunkDispatch<RootState, void, AnyAction>;
} = createStore(rootReducer, applyMiddleware(thunk));

export default store;
