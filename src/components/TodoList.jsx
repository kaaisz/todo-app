import React, { Component } from 'react';
export default class TodoList extends Component{
  render(){

    //todosを後ほどreduxから読み取る
    const{ todos, clickTodo } = this.props;

    console.log(todos);

    return(
      <ul>
        {todos.map((todo, index) =>
          <li
            key = {index}
            onClick = {() => clickTodo(index)}
            style = {{
              textDecoration: todo.completed ? 'line-through' : 'none'
            }}
          >
            {todo.text}
          </li>
        )}
      </ul>
    )
  }
}
