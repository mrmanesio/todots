import types from './types';

const uiActions = Object.freeze({
  addToDo: (text: string) => ({
    type: types.ADD_TO_DO,
    payload: text
  }),

});

export default uiActions;
