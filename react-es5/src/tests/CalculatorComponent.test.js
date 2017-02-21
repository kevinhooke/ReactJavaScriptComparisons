var React = require('react');
var ReactDom = require('react-dom');
var enzyme = require('enzyme');
var Calculator = require('../Components/CalculatorComponent');

test('tests calculate', function(){
    var wrapper = enzyme.mount(<Calculator value1="1" value2="2"/>);
    wrapper.find("#calcButton").simulate("click");
    console.log(wrapper.find('#result').text());
    expect(wrapper.find('#result').text()).toEqual("3");
});