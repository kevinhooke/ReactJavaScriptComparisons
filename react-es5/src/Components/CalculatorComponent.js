var React = require('react');
var ReactDOM = require('react-dom');

var Calculator = React.createClass({

    getInitialState : function(){
        return({
            value1: this.props.value1,
            value2: this.props.value2
        });
    },

    handleChange: function(e){
        this.setState({
            value1: e.target.value
        })
    },

    render: function() {
        return (
            <form>
                <div>
                    <label>Value 1</label>
                    <input id="value1" type="text" onChange={this.handleChange} value={this.state.value1}/>
                </div>
                <div>
                    <label>Value 2</label>
                    <input id="value2" type="text" value={this.props.value2}/>
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