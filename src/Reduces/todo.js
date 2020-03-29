import {todoActionType} from '../Actions/todo';

const initialState = {
  todoList: [
   
  ],
  finishList: []
};

const todo = (state=initialState, action) => {
  debugger;

  switch(action.type){
    case todoActionType.ADD_TODO_LIST:
      return{
        ...state,
        todoList: [
          ...state.todoList,
          action.value
        ]
      };
    case todoActionType.ADD_FINISH_LIST:
      return{
        ...state,
        finishList: [
          ...state.finishList,
          action.value
        ]
      }
    case todoActionType.LOAD_DATA:
      return {
        ...state,
        todoList: action.value
      }
    default:
      return state;
  }

}

export default todo;