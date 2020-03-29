import React from 'react';
import {connect} from 'react-redux';

import {LoadData, addToDoAction} from '../Actions/todo';
import {getTodoList, secondApiCall} from '../Service/Api';
import AddItem from './AddItem';
import ListItem from './ListItem';

const TodoList = ({todoList, dispatchAddToDoAction, dispatchLoadData}) => {

    return (
      <div className="App">
        <h1>Todo List</h1>
        
        {
          todoList.length === 0 ? <button onClick={dispatchLoadData} >load Data</button> :
          <div>
        {todoList.map((ele, index) => {
          return (<ListItem key={ele + index} itemContend={ele} />)})}
          
          <AddItem addItem={dispatchAddToDoAction}/>
          </div>
        }
      </div>
  );
}

const mapStateToProps = (state) => {
  return {todoList: state.todo.todoList}
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchAddToDoAction: (value) => {dispatch(addToDoAction(value));},
    dispatchLoadData: () => {dispatch(LoadData())}
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
