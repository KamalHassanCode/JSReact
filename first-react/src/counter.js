import React from "react";

class Buttons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
    }

    increase = () => {
        this.setState((state) => ({
            counter: state.counter + 1
        }));
    }

    decrease = () => {
        this.setState((state) => ({
            counter: state.counter - 1
        }));
    }

    reset = () => {
        this.setState({
            counter: 0
        });
    }

    render() {
        return (
            <div id="content">
                <div id="Buttons">
                    <button onClick={this.increase}>Increment</button>
                    <button onClick={this.decrease}>Decrement</button>
                    <button onClick={this.reset}>Reset</button>
                </div>
                <h1>Current Counter: {this.state.counter}</h1>
            </div>
        );
    }
}

export default Buttons;