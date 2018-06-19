import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getTodos, addTodo, clickTodo } from '../actions/todos.js';
import TodoPage from '../components/TodoPage.jsx';

class TodoContainer extends Component {

  //Nothing happens now because this is just for setup

  render() {
    return (
      <div>
        <TodoPage
          todos={this.props.todos.todos}
          addtodo={this.props.actions.addTodo}
          clickTodo={this.props.actions.clickTodo}
        />
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { todos } = state;

  console.log("hi", todos);

  return {
    todos,
  };
}

function mapDispatchToProps(dispatch) {
  return{
        actions: bindActionCreators({
          getTodos: getTodos,
          addtodo: addTodo,
          clickTodo: clickTodo,
        },
        dispatch,
    )
  }
}

export default
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(TodoContainer);
