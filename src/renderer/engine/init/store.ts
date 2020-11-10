import { applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router/immutable';
import rootReducer, { RootState } from './rootReducer';

export const history = createBrowserHistory();

const configureStore = (initialState?: RootState): Store<RootState | undefined> => {
  const middlewares: any[] = [routerMiddleware(history)];
  const enhancer = composeWithDevTools(applyMiddleware(...middlewares));
  return createStore(rootReducer(history), initialState, enhancer);
};

const store = configureStore();

export default store;
