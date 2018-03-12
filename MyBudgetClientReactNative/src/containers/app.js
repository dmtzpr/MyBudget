import { connect } from 'react-redux';

import App from '../components/app/app';
import { appLoad } from '../actions/app';

const mapStateToProps = state => ({
    isLoading: state.app.isLoading,
    isLoggedIn: state.authentication.loggedIn,
});

const mapDispatchToProps = dispatch => ({
    onAppLoad: () => dispatch(appLoad()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
