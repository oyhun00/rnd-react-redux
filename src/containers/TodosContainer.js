import React, { Component } from 'react';
import Todos from '../components/Todos';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class TodosContainer extends Component {
  handleChange = (e) => {
    const { TodoActions } = this.props;
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
  input: state.todo.get('input',
  todos: state.todo.number
});

const mapDispatchToProps = (dispatch) => ({
  TodoActions: () => dispatch(counterActions.increment())
})


export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);