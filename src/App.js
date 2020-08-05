import React, { Component } from 'react';
import './App.css';
import { doggos as DogData }from './data';
import Picker from './components/Picker';
import Stack from './components/Stack';

class App extends Component {
  constructor(props) {
    super(props);
    this.selectDoggo = this.selectDoggo.bind(this);
    this.state = {
      doggos: [],
      groups: [],
    };
  }

  selectDoggo(doggoId) {
    let selectedDoggo = this.state.doggos.map((dog) => {
      if (dog.id === doggoId) {
        if (dog.hasOwnProperty('selected')) {
          dog['selected'] = !dog['selected'];
        } else {
          dog['selected'] = true;
        }
      };

      return dog;
    });

    this.setState({doggos: selectedDoggo});
  };

  componentDidMount() {
    let doggoData = DogData;

    let doggoGroups = doggoData.reduce((accum, item) => {
      if (!accum.includes(item.group)) {
        accum.push(item.group);
      }

      return accum;
    }, []);

    this.setState({doggos: doggoData, groups: doggoGroups});
  }

  render() {
    const style = {
      display: 'flex',
    }

    return (
      <div className="App" style={style}>
        <div>
          <h1>Doggo Builder</h1>
          <Picker options={this.state.doggos} selected={this.selectDoggo}/>
        </div>
        <Stack groups={this.state.groups} data={this.state.doggos}/>
        <h3>Filters can go here</h3>
      </div>
    );
  }
}

export default App;
