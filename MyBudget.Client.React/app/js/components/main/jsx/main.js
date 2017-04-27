var React = require('react'),
    NavigationMenu = require('../../navigation-menu/jsx/navigation-menu');

var Main = React.createClass({
    render: function () {
        return (
            <div>
                {this.props.children}
                {location.pathname !== "/login" ? <NavigationMenu/> : null}
            </div>
        );
    }
});

module.exports = Main;