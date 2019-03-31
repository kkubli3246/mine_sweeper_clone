import React, { Component } from 'react';
import GameBoard from './GameBoard';

class Game extends Component{
    constructor(props){
        super(props);
        this.state ={
            
            difficulty: 'easy',
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
            <div >   
                <select className='difficulty' onChange = {(e) => this.setDifficulty(e)}>
                    <option >easy</option>
                    <option>intermediate</option>
                    <option>expert</option>
                </select>

                <div className = "container">
                    <div className ='row'>
                        <div className="col-3"></div>
                        <GameBoard className="col-6" cols = {this.state.cols} rows = {this.state.rows} mines = {this.state.mines} difficulty = {this.state.difficulty}/>
                        <div className="col-3"></div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Game;