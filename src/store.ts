import {
  createStore,
  applyMiddleware,
  combineReducers,
  Store,
  AnyAction,
} from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import phonesReducer from './reducers/phonesReducer';

const rootReducer = combineReducers({
  phones: phonesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store: Store<RootState, AnyAction> & {
  dispatch: ThunkDispatch<RootState, void, AnyAction>;
} = createStore(rootReducer, applyMiddleware(thunk));

export default store;
