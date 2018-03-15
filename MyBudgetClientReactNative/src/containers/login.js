import { connect } from 'react-redux';

import Login from '../components/login/login';
import { login, logout } from '../actions/user';

const mapStateToProps = state => ({
    loggingIn: state.authentication.loggingIn,
    isSignInFailed: state.authentication.isSignInFailed,
});

const mapDispatchToProps = dispatch => ({
    onLogin: (username, password) => dispatch(login(username, password)),
    onLogout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
