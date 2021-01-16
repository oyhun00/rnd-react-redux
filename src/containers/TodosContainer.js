import React, { Component } from 'react';
import Todos from '../components/Todos';
import { connect } from 'react-redux';
import * as todoActions from '../store/modules/todo';

class TodosContainer extends Component {
  handleChange = (e) => {
    const { TodoActions } = this.props;
    console.log(this.props);
    TodoActions.changeInput(e.target.value);
  }

  handleInsert = () => {
    const { input, TodoActions } = this.props;
    TodoActions.insert(input);
    TodoActions.changeInput('');
  }
  
  handleToggle = (id) => {
    const { TodoActions } = this.props;
    TodoActions.toggle(id);
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


const mapStateToProps = (state) => ({
  input: state.todo.input,
  todos: state.todo.todos
});

const mapDispatchToProps = (dispatch) => ({
  TodoActions: () => dispatch(todoActions.changeInput())
})


export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);