import React from "react";

class Goodbye extends React.Component {
    constructor(props) {
        super(props);
    }
  
    checkName() {
        console.log(this.props.name);
    }

    render() {
        return (
            <div>
                <p>Goodbye Kamal {this.props.name}!</p>
                <MyButton />
            </div>
        );
    }
}

class MyButton extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick() {
        console.log("Kamal");
    }

    render() {
        return (
            <button onClick={this.handleClick}>Click me</button>
        );
    }
}

export default Goodbye;





