import React from 'react';
import {connect} from 'react-redux';

import {changeUserName} from '../Actions/user';

class EditUserName extends React.Component{

  constructor(props) {
    super(props);
    
    this.state = {
      inputValue : ''
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    const {dispatchChangeUserName} = this.props;   
    const inputValue = this.state.inputValue;
    console.log(inputValue);
    dispatchChangeUserName(inputValue);
    this.setState({inputValue: ''});
  }

  onInputValueChange = (event) => {

    const value = event.target.value;
    this.setState({inputValue: value});

  }

  render(){

    return (
          <form onSubmit={this.onSubmit}>
            <input value={this.state.inputValue} onChange={this.onInputValueChange} className="input-box"/>
            <input type="submit" value="Submit" />
          </form>
        )
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchChangeUserName : (value) =>{dispatch(changeUserName(value));}
  }

}

export default connect(null, mapDispatchToProps)(EditUserName);