import React, { Component } from 'react';

class ControlledInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ""
        };
    }

    handleChange = (event) => {
       console.log(event.target.value)
       this.setState({
        input: event.target.value
       })
        };
    }
    ComponentDidMount =() => {
        console.log("hello")
    }
cmponetDidUpdate =() => {
    console.log("UPDATE")
}

    render() {
        return (
            <div> 
                <input type="text" value={this.state.input} onChange={this.handleChange} />
                <p> the input says : {this.state.input}</p>
            </div>
        );
    }
}

export default ControlledInput;

