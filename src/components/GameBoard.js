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
            this.setState({
                rows: [0,1,2,3,4,5,6,7,8],
                cols: [0,1,2,3,4,5,6,7,8]
            });
        }else if(this.state.difficulty == 'intermediate'){
            this.setState({
                rows: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
                cols: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
            
            });
        }else if(this.state.difficulty == 'expert'){
            this.setState({
                rows: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
                cols: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29]
            });
        }
    }

    drawBoard = () => {
       const rows = this.state.rows.map(( i) =>
        <div key = {i}><Panel /></div>
       );
       const cols = this.state.cols.map((i) =>
       <div className= 'col'> {rows} </div>
       ) 
       return cols;
       
    }
    render(){
        return(
            <div className = 'row justify-content-md-center'>
            <div className="col-md-auto">
                <button onClick = {this.setBoardSize}>New Game</button>
                <div>
                    {this.drawBoard()}
                </div>
                
            </div>
            </div>
        )
    }
}

export default GameBoard;