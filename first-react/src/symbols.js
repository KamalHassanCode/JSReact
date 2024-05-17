import React from "react";

class Buttons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lastClickedOn: "",
            counter: 0 // Initialize counter state
        };
    }

    handleClick = (event) => {
        console.log(event.target.innerText);
        this.setState({
            lastClickedOn: event.target.innerText
        });
    }

    increase = () => {
        this.setState((state) => ({
            counter: state.counter + 1 // Update counter state
        }));
    }

    render() {
        return (
            <div id="content">
                <div id="Buttons">
                    <button onClick={this.handleClick} className="symbol">⁎</button>
                    <button onClick={this.handleClick} className="symbol">⁑</button>
                    <button onClick={this.handleClick} className="symbol">⁇</button>
                    <button onClick={this.handleClick} className="symbol">&</button>
                </div>
                <h1>YOU CLICKED ON: {this.state.lastClickedOn}</h1>
                <button onClick={this.increase}>Increase</button> {/* onClick is camelCase */}
                <p>{this.state.counter}</p>
            </div>
        );
    }
}

export default Buttons;

