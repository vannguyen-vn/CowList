import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import CowList from './components/CowList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cows : []
    }
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