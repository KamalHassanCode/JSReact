import React, { Component } from "react";
import { Outlet } from "react-router-dom";

class AnimalUi extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount = () => {
        let link = document.createElement("link");
        link.href = "/animals.css";
        link.rel = "stylesheet";
        document.head.appendChild(link);
    }

    render() {
        return (
            <div>
            <div className="menu">
                <a href='/animals/dog'>dog</a>
                <a href='/animals/cat'>cat</a>
               
            </div>
            <Outlet />
            </div>
        );
    }
}

export default AnimalUi;
