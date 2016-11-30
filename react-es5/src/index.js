var React = require('react');
var ReactDOM = require('react-dom');

var Calculator = React.createClass({

    render: function() {
        return (
            <form>
                <div>
                    <label>Value 1</label>
                    <input id="value1" type="text"/>
                </div>
                <div>
                    <label>Value 2</label>
                    <input id="value2" type="text"/>
                </div>
                <div>
                    <label>Result:</label>
                    <div id="result"></div>
                </div>
                <div>
                    <button>Calculate</button>
                </div>

            </form>
        );
    }
});

//es6: export default Calculator;
//es5:
module.exports = Calculator;

ReactDOM.render(
    <Calculator/>,
    document.getElementById('app')
);