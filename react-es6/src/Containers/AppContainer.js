import React, { Component } from 'react';
import Calculator from '../Components/CalculatorComponent';

class AppContainer extends Component {

    constructor(props){
        super(props);
        this.state = {
            value1: 0,
            value2: 0
        }
    }

    render() {
        return (
            <Calculator value1={this.state.value1} value2={this.state.value2}/>
        );
    }
}

export default AppContainer;
