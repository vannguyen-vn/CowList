import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import CowList from './components/CowList.jsx';
import Description from './components/CowDetail.jsx';


const axios = require('axios');


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cows: [],
      name: "",
      description: "",
      selectedCow: 'null'
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    console.log("Successful Mount!");
    this.getCows();

  }

  handleChange(event) {
    event.preventDefault();
    let property = event.target.name;
    this.setState({ [property]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    let newDescription = this.state.description;
    let newName = this.state.name;
    this.postCow(newName, newDescription);
  }

  handleClick(value) {
    this.setState({ selectedCow: value });
    console.log('clicked', value);
  }

  getCows() {
    axios.get(`/cows`)
      .then(res => {
        this.setState({ cows: res.data.results });
      })
      .catch(error => {
        console.log('Error adding a cow', error);
      });
  }

  postCow(name, description) {
    axios.post('/cows', {
      cow: {
        name: name, description: description
      }
    })
      .then(() => {
        this.getCows();
      })
      .catch(error => {
        console.log('Error adding a cow', error);
      });
  }

  render() {
    return (
      <div>
        <div className='picture'></div>
        <Description cow={this.state.selectedCow} />
        <h1>Cow List</h1>
        <CowList cows={this.state.cows} handleClick={this.handleClick.bind(this)} />
        <div className='addCow'>
          <form>
            <h1>Add a cow</h1>
            <div><input type="text" name='name' value={this.state.name} onChange={this.handleChange} /></div>
            <div><textarea type="text" name='description' value={this.state.description} onChange={this.handleChange} /></div>
            <button type="submit" value="Submit" onClick={this.handleSubmit} >Submit</button>
          </form>
        </div>
      </div>
    )
  }
};


ReactDOM.render(<App />, document.getElementById('app'));