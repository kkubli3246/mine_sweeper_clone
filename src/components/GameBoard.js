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
            }, 
            rendered: [[[]],[[]],[[]]],
            isInProgress: false
        }
    }
    // componentWillReceiveProps = (nextProps) =>{
    //     if(nextProps.difficulty !== this.props.difficulty){
    //         this.setState({difficulty: nextProps.difficulty})
    //     }
    // }

    createBoard = () =>{
        let board = [];
        let rows = this.state.boardData.rows;
        let cols = this.state.boardData.cols;

        for(let i = 0; i < rows; i++){
            board.push([]);
            for(let j = 0; j < cols; j++){
                board[i][j] = {
                    x: i,
                    y: j,
                    isRevealed: false,
                    isMine: false,
                    isNewRow: false,
                    neighbors: 0
                };
            }
        }
        this.planetMines(board);
        this.getNeighbors(board);
        this.startCol(board);
        
        return board;
    }
    planetMines = (board) =>{
        let planted = 0;
        
        while(planted < this.state.mineCount){
            let randomRow = Math.floor(Math.random() * this.state.boardData.rows);
            let randomCol = Math.floor(Math.random() * this.state.boardData.cols);
            if(board[randomRow][randomCol].isMine === false){
                board[randomRow][randomCol].isMine = true;
                planted++;
            }
        }
        return board;
    }
    getNeighbors = (board) =>{
        for(let i = 0; i < board.length; i++){
            for(let j = 0; j < board[i].length; j++)
            {

                if(board[i][j].isMine === true){
                    //check right
                    if( j < 7 && board[i][j + 1].isMine !== true ){
                        board[i][j+1].neighbors += 1;
                    }
                    //check top-right
                    if( i > 0 && j < 7 && board[i - 1][j + 1].isMine !== true ){
                        board[i - 1][ j + 1].neighbors += 1;
                    }
                    //check top
                    if( i > 0 && board[i - 1][j].isMine !== true ){
                        board[i - 1][j].neighbors += 1;
                    }
                    //check top-left
                    if( i > 0 && j > 0 && board[i - 1][j - 1].isMine !== true ){
                        board[i - 1][j - 1].neighbors += 1;
                    }
                    //check left
                    if( j > 0 && board[i][j - 1].isMine !== true ){
                        board[i][j - 1].neighbors += 1;
                    }
                    //check bottom-left
                    if( i < 7 && j > 0 && board[i + 1][j - 1].isMine !== true ){
                        board[i + 1][j - 1].neighbors += 1;
                    }
                    //check bottom
                     if( i < 7 && board[i + 1][j].isMine !== true ){
                        board[i + 1][j].neighbors += 1;
                    }
                    //check bottom-right
                    if( i < 7 && j < 7 && board[i + 1][j + 1].isMine !== true){
                        board[i + 1][j + 1].neighbors += 1;
                    }
                }
                
                
            }
        }
        
    }
    startCol = (board) =>{
        for(let i = 0; i < board.length; i++){
            board[i][0].isNewRow = true;
        }
    }
   

    renderBoard = () =>{
        let board = this.createBoard();
        console.log(board);
        return board.map((row, i) => {
           
            return row.map((panel,j) => {
                return <Panel 
                    key={j+ (i*board.length)}  
                    isMine = {board[i][j].isMine} 
                    isRevealed = {board[i][j].isRevealed}
                    isNewRow = {board[i][j].isNewRow}
                    neighbors = {board[i][j].neighbors}
                    
                />  
            })
            
        })
       
        
    }


    render(){
        
        return(
            <div className = 'game_board'>
              {this.renderBoard()}
            </div>
        )
    }
}

export default GameBoard;