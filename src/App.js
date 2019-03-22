import React, { Component } from 'react';

import './App.css';
import GameBoard from './components/GameBoard';


class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      difficulty: 'easy'
    }
  }
  setDifficulty = (e) =>{
    this.setState({difficulty: e.target.value});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>Mine Sweeper!</h1>         
        </header>
        <select type='drop' onChange = {this.setDifficulty}>
          <option value ='easy'>easy</option>
          <option value ='intermediate'>intermediate</option>
          <option value = 'expert'>expert</option>
        </select>

        <div className='container'>
          <GameBoard difficulty = {this.state.difficulty}/>
        </div>
      </div>
    );
  }
}

export default App;
