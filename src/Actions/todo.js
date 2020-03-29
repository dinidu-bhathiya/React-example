import {getTodoList} from '../Service/Api';

export const todoActionType = {
  ADD_TODO_LIST: 'addTodo',
  ADD_FINISH_LIST: 'addFinish',
  LOAD_DATA: 'loadData'
}


export const addToDoAction = (todoItem) => {
  console.log(todoItem);
  debugger;
  return {
    type: todoActionType.ADD_TODO_LIST,
    value: todoItem
  }
}

export const addFinishList = (finishItem) => {
  return {
    type: todoActionType.ADD_FINISH_LIST,
    value: finishItem
  }
}



export const LoadData = () => {
  return async (dispatch) => {
    const todoList = await getTodoList();
    dispatch({
      type: todoActionType.LOAD_DATA,
      value: todoList
    });
  } 
}