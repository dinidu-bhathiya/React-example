import React from 'react';

class AddItem extends React.Component{

  constructor(props) {
    super(props);
    
    this.state = {
      inputValue : ''
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    const {addItem} = this.props;   
    const inputValue = this.state.inputValue;
    console.log(inputValue);
    addItem(inputValue);
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

export default AddItem;