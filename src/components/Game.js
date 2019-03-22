import React, { Component } from 'react';
import GameBoard from './GameBoard';

class Game extends Component{
    constructor(props){
        super(props);
        this.state ={
            difficulty: null,
            cols: 8,
            rows: 8,
            mines: 10
        }
    }
    
    setDifficulty = (e) =>{
        this.setState({difficulty: e.target.value})
    }

   

    render(){
       
        return(
            <div className='row game'>   
                <select className='difficulty' onChange = {(e) => this.setDifficulty(e)}>
                    <option >easy</option>
                    <option>intermediate</option>
                    <option>expert</option>
                </select>
                <GameBoard cols = {this.state.cols} rows = {this.state.rows} mines = {this.state.mines}/>
            </div>
        )
    }
}

export default Game;