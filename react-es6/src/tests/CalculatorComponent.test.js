import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount} from 'enzyme';
import Calculator from '../Components/CalculatorComponent';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Calculator />, div);
});

it('renders with result 3', () => {
    const result = mount(<Calculator value1="1" value2="2" />);
    result.find('button').simulate('click');
    const buttonResult = result.find("#result").first();
    expect(buttonResult.text()).toEqual("3");

});
