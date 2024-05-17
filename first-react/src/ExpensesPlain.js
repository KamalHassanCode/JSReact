import React from "react";
import "./expenses.css";

class ExpensesPlain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            billAmount: "",
            tipPercent: 0,
            numberOfPeople: 1,
        };
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleTipButtonClick = (tipPercent) => {
        this.setState({
            tipPercent: tipPercent
        });
    }

    handleReset = () => {
        this.setState({
            billAmount: "",
            tipPercent: 0,
            numberOfPeople: 1
        });
    }

    calculateTipAmount = () => {
        const { billAmount, tipPercent, numberOfPeople } = this.state;
        if (billAmount && tipPercent && numberOfPeople) {
            const tipAmount = (billAmount * (tipPercent / 100)) / numberOfPeople;
            return tipAmount.toFixed(2);
        }
        return 0;
    }

    calculateTotalPerPerson = () => {
        const { billAmount, tipPercent, numberOfPeople } = this.state;
        if (billAmount && tipPercent && numberOfPeople) {
            const totalPerPerson = ((billAmount * (1 + (tipPercent / 100))) / numberOfPeople);
            return totalPerPerson.toFixed(2);
        }
        return 0;
    }

    render() {
        const { billAmount, tipPercent, numberOfPeople } = this.state;
        return (
            <div id="content">
                <div className="userUI">
                    <div id="bill">
                        <div className="title">Bill</div>
                        <input
                            type="number"
                            name="billAmount"
                            value={billAmount}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div id="tipPercent">
                        <div className="title">Select Tip %</div>
                        <div id="tips">
                            <button onClick={() => this.handleTipButtonClick(5)}>5%</button>
                            <button onClick={() => this.handleTipButtonClick(10)}>10%</button>
                            <button onClick={() => this.handleTipButtonClick(15)}>15%</button>
                            <button onClick={() => this.handleTipButtonClick(20)}>20%</button>
                        </div>
                    </div>
                    <div id="people">
                        <div className="title">Number of People</div>
                        <input
                            type="number"
                            name="numberOfPeople"
                            value={numberOfPeople}
                            onChange={this.handleInputChange}
                        />
                    </div>
                </div>
                <div className="totalDiv">
                    <div className="spread">
                        <div>
                            <p>Tip Amount</p>
                            <br />
                            <p>/ person</p>
                        </div>
                        <div>${this.calculateTipAmount()}</div>
                    </div>
                    <div className="spread">
                        <div>
                            <p>Total</p>
                            <br />
                            <p>/ person</p>
                        </div>
                        <div>${this.calculateTotalPerPerson()}</div>
                    </div>
                    <button onClick={this.handleReset}>Reset</button>
                </div>
            </div>
        );
    }
}

export default ExpensesPlain;
