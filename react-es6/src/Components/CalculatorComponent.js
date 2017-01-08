import React, { Component } from 'react';

class Calculator extends Component {

    constructor(props){
        super(props);
        this.state = {
            value1: this.props.value1,
            value2: this.props.value2,
            result: 0
        }

        this.handleChangeValue1 = this.handleChangeValue1.bind(this);
        this.handleChangeValue2 = this.handleChangeValue2.bind(this);
        this.calculate = this.calculate.bind(this);
    }

    handleChangeValue1(e) {
        this.setState({ value1 : e.target.value });
    }

    handleChangeValue2(e) {
        this.setState({ value2 : e.target.value });
    }

    calculate(e){
        e.preventDefault();
        this.setState({ result : Number.parseInt(this.state.value1) + Number.parseInt(this.state.value2) });
    }

    render() {
        return (
            <form>
                <div>
                    <label>Value 1</label>
                    <input name="value1" type="text" onChange={this.handleChangeValue1} value={this.state.value1}/>
                </div>
                <div>
                    <label>Value 2</label>
                    <input name="value2" type="text" onChange={this.handleChangeValue2} value={this.state.value2}/>
                </div>
                <div>
                    <label>Result:</label>
                    <div id="result">{this.state.result}</div>
                </div>
                <div>
                    <button onClick={this.calculate}>Calculate</button>
                </div>

            </form>
        );
    }
}

export default Calculator;
