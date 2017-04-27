var React = require('react'),
    ReactPropTypes = React.PropTypes;

var Header = React.createClass({
    propTypes: {
        userName: ReactPropTypes.string.isRequired,
        totalBalance: ReactPropTypes.number.isRequired
    },

    render: function () {
        return (
            <div className="status-bar">
                <div className="row">
                    <div className="col-xs-6">
                        <div><i className="fa fa-user"></i> {this.props.userName}</div>
                    </div>
                    <div className="col-xs-6">
                        <span>Balance: {this.props.totalBalance} $</span>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Header;