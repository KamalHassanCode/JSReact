import React from "react";
import "./Ubisoftweb.css"; 
import Operator from "./Operator";

class Ubisoftweb extends React.Component {
    showMoreInfo(event) { 
        let containerId = event.target.getAttribute("target");
        let nextPageUrl;
        if (containerId === 'container1') {
            nextPageUrl = "https://www.ubisoft.com/en-ca/game/rainbow-six/siege/game-info/operators";
        } else if (containerId === 'container2') {
            nextPageUrl = "https://www.ubisoft.com/en-us/esports/rainbow-six/siege/news-updates/7zKCcXO9gwBPjIWQ0KsLww/welcome-to-the-blast-r6-manchester-major";
        }
        window.location.href = nextPageUrl;
    }

    render() {
        return (
            <div>
                <header className="header">
                    <div className="container">
                        <div className="logo">
                            <img
                                src="https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/DAwqy5hMljnxm7evA5ASN/091866f359c3e7e84b7441875bad7feb/r6s-logo-ww.png"
                                alt=""
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
                <div className="content">
                    <div className="vidContain">
                        <p className="videotext">
                            "I was there when Rainbow began."
                        </p>
                        <div className="media">
                            <video className="looping-video" id="true" autoPlay={true} playsInline={true} loop={true} type="video/mp4" src="https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5Gx6nZhdfIeqYIzGojpjxt/42c481007b44abb43eb000471178763b/R6_Y9S1_Deimos_textless_16X9__1_.mp4" poster="https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/54PDIUFzGxbUiV77zf0vMG/a7bf81dd078ceda87e0af0b244c7b5ed/R6_Y9S1_Deimos_textless_16X9.jpg"></video>
                        </div>
                    </div>
                </div>
                <div className="main-container">
                    <div className="container1">
                        <h2>OPERATORS</h2>
                        <p className="containertext1">UNIQUE ABILITIES AND PLAYSTYLE FOR EACH OPERATOR</p>
                        <p>Operators are playable characters in Tom Clancy's Rainbow Six Siege. There are currently 71 playable operators (excluding Recruit), all hailing from one of the 32 CTUs in the game, categorized into 2 positions: Attackers (ATK) and Defenders (DEF).
                            <button className="more-info-button" onClick={this.showMoreInfo} target="container1">More Info</button>
                        </p>
                        <img
                            className="img1"
                            src="https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4zA4p7ch2wBSxrWTjB2UA8/254ea7bc26d631cbcdc3db570d52a2a0/r6s-operator-deimos.png"
                            alt=""
                            loading="lazy"
                        />
                    </div>
                    <div className="container2">
                        <h2>ESPORTS</h2>
                        <p className="containertext2">We are delighted to reveal the location for the first BLAST Rainbow Six Major of Season 2024, with Manchester set to host the United Kingdom's first ever Major, from May 16-26!
                            <button className="more-info-button" onClick={this.showMoreInfo} target="container2">More Info</button>
                        </p>
                        <img
                            className="img2"
                            src="https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/23Jd3NjUV6gMC8Ct3EeCH0/a46ffea0100b19987670199efd9efd60/R6Esports_Keyart_header.jpg"
                            alt=""
                            loading="lazy"
                        />
                    </div>
                </div>
                <div className="promo__wrapper__content">
                    <h2 className="promo__content__title">Visit Other Social Channels</h2>
                    <a className="btn btn-primary promo__wrapper__content__btn external has-image" href="https://rainbow6.com/social/reddit" target="_blank" rel="noreferrer noopener">
                        <img src="https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2xJt7wrrzX0dsPwYChg3mU/fd317afb5a632ff426a2293cab41f683/social_reddit.png" alt="" loading="lazy" />
                    </a>
                    <a className="btn btn-primary promo__wrapper__content__btn external has-image" href="https://rainbow6.com/social/facebook" target="_blank" rel="noreferrer noopener">
                        <img src="https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/32xRzuzxNUJYa3QO5iY8B5/7b048bf697702593da82c3325e7dc0d2/_Ubisoft__global_facebook_logo.png" alt="facebook icon" loading="lazy" />
                    </a>
                    <a className="btn btn-primary promo__wrapper__content__btn external has-image" href="https://rainbow6.com/social/instagram" target="_blank" rel="noreferrer noopener">
                        <img src="https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5bMQZANieDyITKrsqgJeMx/d3c604271417b0236d715de118ef778c/_Ubisoft__global_instagram_logo.png" alt="" loading="lazy" />
                    </a>
                    <a className="btn btn-primary promo__wrapper__content__btn external has-image" href="https://rainbow6.com/social/youtube" target="_blank" rel="noreferrer noopener">
                        <img src="https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/68qlJsyTv8sTv54rqqfOPO/05083db5d6dbdbcb5ed34464f235a2ed/_Ubisoft__global_youtube_logo.png" alt="youtube icon" loading="lazy" />
                    </a>
                    <a className="btn btn-primary promo__wrapper__content__btn external has-image" href="https://rainbow6.com/social/discord" target="_blank" rel="noreferrer noopener">
                        <img src="https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4lHAczCMB0VZPRscZjFMMe/061a9375a5c79e3f09dd9f18f921cbdb/discord_social.png" alt="" loading="lazy" />
                    </a>
                </div>
            </div>
        );
    }
}

export default Ubisoftweb;

