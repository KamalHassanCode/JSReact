import React, { useEffect, useState } from "react";

function FunctionalComponent(props) {
    const [message, setMessage] = useState("hello");
    const [counter, setCounter] = useState(0);

    useEffect(()=> {
        console.log("USEEFFECT")
    }, [counter])
    function handleClick() {
        setMessage("goodbye");
    }

    function increase() {
        setCounter(counter + 1);
    }

    return (
        <div>
            <button onClick={handleClick}>Click</button>
            <p>{message}</p>
            <button onClick={increase}>Increase</button>
            <p>Counter: {counter}</p>
        </div>
    );
}

export default FunctionalComponent;
