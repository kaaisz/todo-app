export function getTodos(payload){
  return{
    type:'GET_TODOS',
    payload:{ payload },
  };
}

export function addTodo(payload){
  return function (dispatch) {
    dispatch({
      type: 'ADD_TODO',
      payload: { payload },
    });
  }
}

export function clickTodo(payload){
  return {
    type: 'CLICK_TODO',
    payload: { payload },
  };
}
