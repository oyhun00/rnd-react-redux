import React from 'react';
import { List, Map } from 'immutable';

const TodoItem = ({ id, text, checked, update, onToggle, onRemove, onUpdateToggle, onUpdateChange }) => 
  update ? (
    <li>
      <input value={text} onChange={onUpdateChange} />
      <span><button>완료</button></span>
      <span><button onClick={() => onUpdateToggle(id)}>취소</button></span>
    </li>
  ) : (
    <li 
      style={{
        textDecoration: checked ? 'line-through' : 'none'
      }} 
      onClick={() => onToggle(id)}
      onDoubleClick={() => onRemove(id)}>
      {text}<span><button onClick={() => onUpdateToggle(id)}>수정</button></span>
    </li>
  )

const Todos = ({todos, input, onInsert, onToggle, onRemove, onChange, onUpdateToggle, onUpdateChange }) => {
  
  const todoItems = todos.map(
    todo => {
      // const { id, checked, text } = todo.toJS();
      const { id, checked, text, update } = todo;
      return (
        <TodoItem
          id={id}
          checked={checked}
          text={text}
          update={update}
          onToggle={onToggle}
          onRemove={onRemove}
          onUpdateToggle={onUpdateToggle}
          onUpdateChange={onUpdateChange}
          key={id}
        />
      )
    }
  )
  return (
    <div>
      <h2>오늘 할 일</h2>
      <input value={input} onChange={onChange}/>
      <button onClick={onInsert}>추가</button>
      <ul>
        { todoItems }
      </ul>
    </div>
  );
};

Todos.defaultProps = {
  todos: [
    {
      id: 0,
      text: '걷기',
      checked: false,
      update: false,
    },{
      id: 1,
      text: '코딩하기',
      checked: true,
      update: false,
    }
  ],
  input: ''
};

export default Todos;