import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import CowList from './components/CowList.jsx';
const axios = require('axios');


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cows : []
    }
  }

  componentDidMount() {
    console.log("Successful Mount!");
    this.getCows();
  }

  getCows() {
    axios.get(`/cows`)
    .then(res => {
      console.log(res);
      this.setState({cows: res.data});
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

  render () {
    return (
      <div>
          <h1>Cow List</h1>
          <CowList cows = {this.state.cows} />
      </div>
    )
  }
};

ReactDOM.render(<App />, document.getElementById('app'));