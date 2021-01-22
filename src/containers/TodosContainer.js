import React, { Component } from 'react';
import Todos from '../components/Todos';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as todoActions from '../store/modules/todo';

class TodosContainer extends Component {
  handleChange = (e) => {
    // const { TodoActions } = this.props;
    // TodoActions.changeInput(e.target.value);

    const { changeInput } = this.props;
    changeInput(e.target.value);
  }

  handleInsert = () => {
    // const { input, TodoActions } = this.props;
    // TodoActions.insert(input);
    // TodoActions.changeInput('');

    const { input, insert, changeInput } = this.props;
    insert(input);
    changeInput('');
  }
  
  handleToggle = (id) => {
    // const { TodoActions } = this.props;
    // TodoActions.toggle(id);
    
    const { toggle } = this.props;
    toggle(id);
  }
  
  handleRemove = (id) => {
    // const { TodoActions } = this.props;
    // TodoActions.remove(id);

    const { remove } = this.props;
    remove(id);
  }

  handleUpdateToggle = (id) => {
    const { updateToggle } = this.props;
    updateToggle(id);
  }

  handleUpdateChange = (e) => {
    const { updateChange } = this.props;
    updateChange(e.target.value);
  }

  handleUpdateDone = (id) => {
    const { updateDone } = this.props;
    updateDone(id);
  }

  render() {
    const { handleChange, handleInsert, handleRemove, handleToggle, handleUpdateToggle, handleUpdateChange, handleUpdateDone } = this;
    const { input, updateInput, todos } = this.props;
    return (
      <Todos
        input={input}
        updateInput={updateInput}
        todos={todos}
        onChange={handleChange}
        onInsert={handleInsert}
        onRemove={handleRemove}
        onToggle={handleToggle}
        onUpdateToggle={handleUpdateToggle}
        onUpdateChange={handleUpdateChange}
        onUpdateDone={handleUpdateDone}
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
  updateInput: state.todo.updateInput,
  todos: state.todo.todos
});

const mapDispatchToProps = (dispatch) => (
  // {
  // changeInput: input => dispatch(todoActions.changeInput(input)),
  // insert: input => dispatch(todoActions.insert(input)),
  // toggle: id => dispatch(todoActions.toggle(id)),
  // remove: id => dispatch(todoActions.remove(id)),
  // updateToggle: id => dispatch(todoActions.updateToggle(id)),
  // updateChange: updateValue => dispatch(todoActions.updateChange(updateValue)),
  // updateDone: id => dispatch(todoActions.updateDone(id)),
  // }
  bindActionCreators(todoActions, dispatch)
)


export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);