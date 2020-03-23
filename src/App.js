import './App.css';

import React from 'react';

import AddItem from './Component/AddItem';
import ListItem from './Component/ListItem';
import {getTodoList, secondApiCall} from './Service/Api';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      todoList: []
    }
    
  }

  addItem = (newItem) => {
    this.setState((currentState) => {return{todoList: [...currentState.todoList, newItem]}}, () => {console.log(this.state.todoList)}); 
  } 

  async componentDidMount(){
    const todoList = await this.getAll();

    
   // await this.getAnother(todoList.meta.id);
  }

  getAll = async() => {

    const todoList = await getTodoList();

    this.setState({todoList});
    return todoList;

  }

  getAnother = async() => {
    const result =  await secondApiCall();

  }



  render() {
    const {
      todoList
    } = this.state;

    return (
      <div className="App">
        <h1>Todo List</h1>

        {
          todoList.length === 0 ? <h3>data Loading</h3> :
        todoList.map((ele, index) => {
          return (<ListItem key={ele + index} itemContend={ele} />)})
          }
          <AddItem addItem={this.addItem}/>
      </div>
  );
  }


}

export default App;
