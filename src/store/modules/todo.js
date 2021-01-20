import { createAction, handleActions } from 'redux-actions';

const CHANGE_INPUT = 'todo/CHANGE_INPUT';
const INSERT = 'todo/INSERT';
const TOGGLE = 'todo/TOGGLE';
const REMOVE = 'todo/REMOVE';
const UPDATE_TOGGLE = 'todo/UPDATE_TOGGLE';
const UPDATE_CHANGE = 'todo/UPDATE_CHANGE';

export const changeInput = createAction(CHANGE_INPUT, value => value);
export const insert = createAction(INSERT, text => text);
export const toggle = createAction(TOGGLE, id => id);
export const remove = createAction(REMOVE, id => id);
export const updateToggle = createAction(UPDATE_TOGGLE, id => id);
export const updateChange = createAction(UPDATE_CHANGE, value => value);

let id = 0;

const initialState = {
  input: '',
  todos: []
};

// const initialState = Map({
//   input: 'a',
//   todos: List()
// });


export default handleActions({
//  [CHANGE_INPUT]: (state, action) => state.set('input', action.payload),
  [CHANGE_INPUT]: (state, action) => {
    return { 
      ...state,
      input: action.payload
     }
  },
  [INSERT]: (state, { payload: text }) => {
    // const item = Map({ id: id++, checked: false, text });
    // return state.update('todos', todos => todos.push(item));
    console.log(text);
    return {
      ...state,
      todos: state.todos.concat({
        id: id++,
        text: text,
        checked: false,
        update: false,
      })
    }
  },
  [TOGGLE]: (state, { payload: id }) => {
    return {
      ...state,
      todos: state.todos.map(
        (item) => item.id === id
        ? { ...item, checked: !item.checked}
        : item
      )
    }
    // const index = state.get('todos').findIndex(item => item.get('id') === id);
    // return state.updateIn(['todos', index, 'checked'], checked => !checked);
  },
  [REMOVE]: (state, { payload: id }) => {
    // const index = state.get('todos').findIndex(item => item.get('id') === id);
    // return state.deleteIn(['todos', index]);

    return {
      ...state,
      todos: state.todos.filter(
        (item) => item.id !== id
      )
    }
  },
  [UPDATE_TOGGLE]: (state, { payload: id }) => {
    return {
      ...state,
      todos: state.todos.map(
        (item) => item.id === id
        ? { ...item, update: !item.update}
        : item
      )
    }
  },
  [UPDATE_CHANGE]: (state, action) => {
    return {
      ...state,
      todos: state.todos.map(
        (item) => item.update === true
        ? { ...item, text: action.payload}
        : item
      )
    }
  }
}, initialState)