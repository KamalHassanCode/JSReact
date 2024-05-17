import React from 'react';
import './Ubisoftweb.css'; // Ensure you include the same CSS for consistent styling

class Operator extends React.Component {
    render() {
        const { name, role, ability, imageUrl } = this.props;

        return (
            <div>
                <header className="header">
                    <div className="container">
                        <div className="logo">
                            <img
                                src="https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/DAwqy5hMljnxm7evA5ASN/091866f359c3e7e84b7441875bad7feb/r6s-logo-ww.png"
                                alt="Ubisoft Logo"
                                loading="lazy"
                            />
                        </div>
                        <nav>
                            <ul>
                                <li>
                                    <a href="/about">About</a>
                                </li>
                                <li>
                                    <a href="/contact">Contact</a>
                                </li>
                                <li>
                                    <a href="/esport">Esports</a>
                                </li>
                                <li>
                                    <a href="/Operators">Operators</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </header>

                <div className="operator-card">
                    <img src={imageUrl} alt={`${name}`} className="operator-image" />
                    <h2>{name}</h2>
                    <p><strong>Role:</strong> {role}</p>
                    <p><strong>Ability:</strong> {ability}</p>
                </div>
            </div>
        );
    }
}

export default Operator;
