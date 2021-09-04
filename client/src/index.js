import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import CowList from './components/CowList.jsx';
import CowEntry from './components/CowEntry.jsx';

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
    this.setState({[property]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    let newDescription = this.state.description;
    let newName = this.state.name;
    this.postCow(newName, newDescription);
  }

  handleClick(value){
    this.setState({ selectedCow: value});
    console.log('clicked', value);
  }

  render() {
    return (
      <div>
        <h1>Cow List</h1>
        <CowList cows={this.state.cows} handleClick={this.handleClick.bind(this)} cowSelected={this.state.selectedCow} />
        <div>
          <form>
            <h2>Add a cow</h2>
            <div><input type="text" name='name' value={this.state.name} onChange={this.handleChange} /></div>
            <div><input type="text" name='description' value={this.state.description} onChange={this.handleChange} /></div>
            <input type="submit" value="Submit" onClick={this.handleSubmit} />
          </form>
        </div>
      </div>
    )
  }


  getCows() {
    axios.get(`/cows`)
      .then(res => {
        console.log(res)
        this.setState({ cows: res.data.results });
        this.render();
      });
  }

  postCow(name, description) {
    axios.post('/cows', {
      cow: {
        name: name, description: description
      }
    });
  }

   componentDidUpdate() {

  }
};

ReactDOM.render(<App />, document.getElementById('app'));