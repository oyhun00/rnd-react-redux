import { List } from 'immutable';
import { createAction, handleActions } from 'redux-actions';

const CHANGE_INPUT = 'todo/CHANGE_INPUT';
const INSERT = 'todo/INSERT';
const TOGGLE = 'todo/TOGGLE';
const REMOVE = 'todo/REMOVE';

export const changeInput = createAction(CHANGE_INPUT, value => value);
export const insert = createAction(INSERT, text => text);
export const toggle = createAction(TOGGLE, id => id);
export const remove = createAction(REMOVE, id => id);

let id = 0;

const initialState = {
  input: '',
  todos: List()
};

export default handleActions({
  [CHANGE_INPUT]: (state, action) => {
    return Object.assign({}, state, {
      input: state.input.concat(action.payload)
    })
  },
  [INSERT]: (state, { payload: text }) => {
    const item = Map({ id: id++, checked: false, text });
    return state.update('todos', todos => todos.push(item));
  },
  [TOGGLE]: (state, { payload: id }) => {
    const index = state.get('todos').findIndex(item => item.get('id') === id);
    return state.updateIn(['todos', index, 'checked'], checked => !checked);
  },
  [REMOVE]: (state, { payload: id }) => {
    const index = state.get('todos').findIndex(item => item.get('id') === id);
    return state.deleteIn(['todos', index]);
  }
}, initialState)