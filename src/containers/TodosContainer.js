import React, { Component } from 'react';
import Todos from '../components/Todos';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as todoActions from '../store/modules/todo';

class TodosContainer extends Component {
  handleChange = (e) => {
    const { changeInput } = this.props;
    changeInput(e.target.value);
    // const { TodoActions } = this.props;
    // TodoActions.changeInput(e.target.value);
  }

  handleInsert = () => {
    // const { input, TodoActions } = this.props;
    // TodoActions.insert(input);
    // TodoActions.changeInput('');

    // const { input, insert, changeInput } = this.props;
    // insert(input)
    // changeInput('');
  }
  
  handleToggle = (id) => {
    // const { TodoActions } = this.props;
    // TodoActions.toggle(id);
    console.log(id);
    const { toggle } = this.props;
    toggle(id);
  }
  
  handleRemove = (id) => {
    const { TodoActions } = this.props;
    TodoActions.remove(id);
  }

  render() {
    const { handleChange, handleInsert, handleRemove, handleToggle } = this;
    const { input, todos } = this.props;
    return (
      <Todos
        input={input}
        todos={todos}
        onChange={handleChange}
        onInsert={handleInsert}
        onRemove={handleRemove}
        onToggle={handleToggle}
      />
    );
  }
}


// export default connect(
//   // state 를 비구조화 할당 해주었습니다
//   ({ todo }) => ({
//     // immutable 을 사용하니, 값을 조회 할 때엔느 .get 을 사용해주어야하죠.
//     input: todo.get('input'),
//     todos: todo.get('todos')
//   }),
//   (dispatch) => ({
//     TodoActions: bindActionCreators(todoActions, dispatch)
//   })
// )(TodosContainer);

const mapStateToProps = (state) => ({
  input: state.todo.input,
  todos: state.todo.todos
});

const mapDispatchToProps = (dispatch) => ({
  changeInput: input => dispatch(todoActions.changeInput(input)),
  toggle: id => dispatch(todoActions.toggle(id))
})


export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);