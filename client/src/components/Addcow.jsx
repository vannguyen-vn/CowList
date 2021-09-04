import React from 'react';
import ReactDOM from 'react-dom';
import Index from '../index.jsx';

class AddCow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event){
    //event.preventDefault();
    let property = event.target.name;
    this.setState({[property]: event.target.value});
  }

  handleSubmit(event){
   // event.preventDefault();
   console.log("Click!");
    let newDescription = this.state.description;
    let newName = this.state.name;
    this.postCow(newName, newDescription);
  }

  render() {
    return (
      <form>
        <h2>Add a cow</h2>
        <div><input type="text" placeholder="Name..." value={this.state.name} onChange= {this.handleChange}></input></div>
        <div><input type="text" placeholder="Description" value={this.state.description} onChange= {this.handleChange}></input></div>
        <button type="submit" value="Submit" onClick={this.handleSubmit}>Submit</button>
      </form>
    )
  }
}

export default AddCow;