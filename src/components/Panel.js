import React, { Component } from 'react';

class Panel extends Component{
    constructor(props){
        super(props);
        this.state ={
            hover: 'panel'
        }
    }
    handleMouseEnter = () =>{
        this.setState({hover: 'panel-hover'});
    }
    handleMouseLeave = () =>{
        this.setState({hover: 'panel'});
    }
    render(){
        return(
        <div id ={this.state.hover} onMouseEnter = {() => this.handleMouseEnter()} onMouseLeave ={() => this.handleMouseLeave()}>
            
        </div>
        )
    }
}

export default Panel;