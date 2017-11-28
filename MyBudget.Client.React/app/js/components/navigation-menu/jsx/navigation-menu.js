var React = require("react"),
  Link = require("react-router").Link;

var NavigationMenu = React.createClass({
  render: function() {
    return (
      <div id="navigation-menu" className="navbar navbar-fixed-bottom">
        <div className="container">
          <div className="row fa-2x">
            <div className="col-xs-3">
              <Link to="/home">
                <i className="fa fa-home" />
              </Link>
            </div>
            <div className="col-xs-3">
              <Link to="/barchart">
                <i className="fa fa-bar-chart" />
              </Link>
            </div>
            <div className="col-xs-3">
              <Link to="/piechart">
                <i className="fa fa-pie-chart" />
              </Link>
            </div>
            <div className="col-xs-3">
              <Link to="/settings">
                <i className=" fa fa-cogs" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = NavigationMenu;
