import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import CowList from './components/CowList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cows : [
        {
          "id": 1,
          "name": "Buttercup",
          "description": "a herbaceous plant with bright yellow cup-shaped flowers, common in grassland and as a garden weed. All kinds are poisonous and generally avoided by livestock."
        },
        {
          "id": 2,
          "name": "Daisy",
          "description": "a small grassland plant that has flowers with a yellow disk and white rays. It has given rise to many ornamental garden varieties."
        }
      ]
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