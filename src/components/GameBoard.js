import React, { Component } from 'react';
import Panel from './Panel';


class GameBoard extends Component{
    constructor(props){
        super(props);
        this.state ={
            difficulty: this.props.difficulty,
            
        }
    }
    populateBoard = (difficulty) =>{

    }

    render(){
        return(
            <Panel/>
        )
    }
}

export default GameBoard;