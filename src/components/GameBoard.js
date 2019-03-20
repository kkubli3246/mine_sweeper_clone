import React, { Component } from 'react';
import Panel from './Panel';


class GameBoard extends Component{
    constructor(props){
        super(props);
        this.state ={
            difficulty: this.props.difficulty,
            rows: [],
            cols: []
            
        }
    }
    componentWillReceiveProps = (nextProps) =>{
        if(nextProps.difficulty !== this.props.difficulty){
            this.setState({difficulty: nextProps.difficulty})
        }
    }
    setBoardSize = () =>{
        if(this.state.difficulty == 'easy'){
            this.setState({rows: [0,1,2,3,4,5,6,7,8]});
        }else if(this.state.difficulty == 'intermediate'){
            this.setState({rows: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]});
        }else if(this.state.difficulty == 'expert'){
            this.setState({rows: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]});
        }
    }

    drawBoard = () => {
       const currentBoard = this.state.rows.map((panels, i) =>
        <div key = {i}><Panel /></div>
       );
       return currentBoard;
       
    }
    render(){
        return(
            <div>
                
                <h1>{this.state.difficulty}</h1>
                <button onClick = {this.setBoardSize}>New Game</button>
                <div>
                    {this.drawBoard()}
                </div>
                
            </div>
        )
    }
}

export default GameBoard;