import { connect } from 'react-redux';

import App from '../components/app/app.jsx';
import { appLoad } from '../actions/app';

const mapStateToProps = state => ({
    isLoading: state.app.isLoading,
});

const mapDispatchToProps = dispatch => ({
    onAppLoad: () => dispatch(appLoad()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
