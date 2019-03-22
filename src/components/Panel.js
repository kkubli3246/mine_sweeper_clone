import React, { Component } from 'react';

class Panel extends Component{
    constructor(props){
        super(props);
        this.state ={
            isRevealed: false,
            value: this.props.value
        }
    }
    
    
   
    
    render(){
         
        return(
            
        <div className = {this.state.value} onClick = {() => this.props.handleClick()}>
            
        </div>
        )
    }
}

export default Panel;