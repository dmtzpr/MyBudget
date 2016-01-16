var React = require('react');

var Login = require('./Footer.react');
/*var Header = require('./Header.react');
 var MainSection = require('./MainSection.react');

 var TodoStore = require('../stores/TodoStore');*/


var MyBudgetApp = React.createClass({
    render: function () {
        return (
            <div>
                <Login />
            </div>
        );
    }

});

module.exports = MyBudgetApp;
