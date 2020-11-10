import { Map, set, List } from 'immutable';
import types from './types';

export interface UiState extends Map<string, any> {
  readonly menu?: boolean;
}

const initialState: UiState = Map({
  toDoList: List([]),
});

export const uiReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.ADD_TO_DO:
      return set(state, 'menu', action.payload);
    default:
      return state;
  }
};
