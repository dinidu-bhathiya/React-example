import React from 'react';
import {connect} from 'react-redux';

const Header = ({todoListCount, userName}) => {
 

  return(
    <div className="app-header">
      User Name: {userName}
      <div>search: <input /></div>
      Todo Count {todoListCount} 
      
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    todoListCount: state.todo.todoList.length,
    userName: state.user.userName
  }
}

export default connect(mapStateToProps)(Header);