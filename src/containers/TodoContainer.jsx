import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getTodos, addTodos } from '../actions/todos.js';
import TodoPage from '../components/TodoPage.jsx';

class TodoContainer extends Component {

  //Nothing happens now because this is just for setup

  render() {
    return (
      <div>
        <TodoPage />
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { todos } = state;

  return {
    todos
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getTodos: getTodos,
    },
    dispatch,
  );
}

export default
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(TodoContainer);
