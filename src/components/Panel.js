import React, { Component } from 'react';

class Panel extends Component{
    constructor(props){
        super(props);
        this.state ={
            value: 'panel',
            isMine: this.props.isMine,
            isRevealed: this.props.isRevealed,
            isNewRow: this.props.isNewRow,
            neighbors: this.props.neighbors
        }
    }
   
    componentDidMount = () => {
        if(this.state.isNewRow === true){
            this.setState({value: this.state.value + ' col'});
            console.log('new row made');
        }
    }
    handleClick = () => {
        if(this.state.isMine === true){
            this.setState({value: 'mine'});
        }
        if(this.state.neighbors > 0){
            this.setState({isRevealed: true});
        }
    }
    displayNum = () => {
        if(this.state.isRevealed === true){
            return this.state.neighbors;
        }
    }

    
    render(){
        
        return(
            
        <div className = {this.state.value} onClick = {this.handleClick}>
            <p className='neighbors'>{this.displayNum()}</p>
        </div>
        )
    }
}

export default Panel;