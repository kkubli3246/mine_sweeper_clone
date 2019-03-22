import React, { Component } from 'react';
import Panel from './Panel';


class GameBoard extends Component{
    constructor(props){
        super(props);
        this.state ={
            mineCount: this.props.mines,
            boardData: {  
                rows: this.props.rows,
                cols: this.props.cols
                
            }
            
          
        }
    }
    // componentWillReceiveProps = (nextProps) =>{
    //     if(nextProps.difficulty !== this.props.difficulty){
    //         this.setState({difficulty: nextProps.difficulty})
    //     }
    // }

    createBoard = () => {
        let board = [];
        let rows = this.state.boardData.rows;
        let cols = this.state.boardData.cols;

        for(let i = 0; i < rows; i++){
            board.push([]);
            for(let j = 0; j < cols; j++){
                board[i][j] = {
                    isMine: false,
                    neighbors: 0
                };
            }
        }
        this.planetMines(board);
        console.log(board);
        return board;
    }
    planetMines = (board) =>{
        let planted = 0;
        
        while(planted < this.state.mineCount){
            console.log(planted);
            let randomRow = Math.floor(Math.random() * this.state.boardData.rows);
            let randomCol = Math.floor(Math.random() * this.state.boardData.cols);
            if(board[randomRow][randomCol].isMine === false){
                board[randomRow][randomCol].isMine = true;
                planted++;
            }
        }
        return board;
    }
    renderBoard = (boardData) =>{
        let cols = boardData.cols;
        let rows = boardData.rows;
        
    }


    render(){
        console.log(this.createBoard());
        return(
            <div className = 'row'>
            <div className="col-sm-6">
            
                <button onClick = {this.renderBoard(this.state.boardData)}>New Game</button>
               {this.renderBoard(this.state.boardData)}
                
            </div>
            </div>
        )
    }
}

export default GameBoard;