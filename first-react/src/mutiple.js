import React from "react";

class Multiple extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fruits: ["apple", "mango", "Dragonfruit", "kiwi", "banana", "orange"],
            input: "",
            option: ["backgroundColor", "Color", "border", "width", "height"]
        };
    }

    handleInput = (event) => {
        this.setState({
            input: event.target.value
        });
    }

    handleClick = () => {
        this.setState((state) => ({
            fruits: [...state.fruits, state.input],
            input: ""
        }));
    }

    handleOptionChange = (event) => {
        console.log(event.target.value); // You can handle the selected option here
    }

    render() {
        let elements = this.state.fruits.map((element, i) => {
            return (
                <li key={i}>{element}</li>
            );
        });

        let optionElements = this.state.option.map((element, i) => {
            return (
                <option key={i}>{element}</option>
            )
        });

        console.log(elements);

        return (
            <div>
                <h2>Fruits</h2>
                <ul>
                    {elements}
                </ul>
                <input onChange={this.handleInput} value={this.state.input} />
                <button onClick={this.handleClick}>Submit</button>
                <select onChange={this.handleOptionChange}>
                    {optionElements}
                </select>
            </div>
        );
    }
}

export default Multiple;



