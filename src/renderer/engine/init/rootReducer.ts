import { combineReducers } from 'redux';
import { History } from 'history';
import { connectRouter, RouterState } from 'connected-react-router/immutable';
import { reducer as formReducer } from 'redux-form/immutable';
import { uiReducer, UiState } from '../core/ui/reducer';

export interface RootState {
  router: RouterState;
  form: any;
  ui: UiState;
}

const rootReducer = (history: History<any>) =>
  combineReducers<RootState>({
    router: connectRouter(history),
    form: formReducer,
    ui: uiReducer
  });

export default rootReducer;
