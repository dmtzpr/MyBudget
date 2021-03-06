import { connect } from 'react-redux';

import Register from '../components/register/register.jsx';
import { register } from '../actions/user';

const mapStateToProps = state => ({
    registering: state.registration.registering,
});

const mapDispatchToProps = dispatch => ({
    onRegister: user => dispatch(register(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
