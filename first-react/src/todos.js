import React from "react";

class Todos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            input: ""
        };
    }

    handleInput = (event) => {
        this.setState({
            input: event.target.value
        });
    }

    handleClick = () => {
        if (this.state.input.trim() !== "") {
            this.setState((state) => ({
                tasks: [...state.tasks, state.input],
                input: ""
            }));
        }
    }

    handleKeyPress = (event) => {
        if (event.key === "Enter") {
            this.handleClick();
        }
    }

    render() {
        let taskElements = this.state.tasks.map((task, index) => {
            return (
                <li key={index}>{task}</li>
            );
        });

        return (
            <div>
                <h2>To-Do List</h2>
                <input
    type="text"
    value={this.state.input}
    onChange={this.handleInput}
    onKeyDown={this.handleKeyPress} // Changed from onKeyPress to onKeyDown
/>
                <button onClick={this.handleClick}>Add Task</button>
                <ul>
                    {taskElements}
                </ul>
            </div>
        );
    }
}

export default Todos;