import { connect } from 'react-redux';

import App from '../components/app/app.jsx';
import { appLoad } from '../actions/app';

const mapDispatchToProps = dispatch => ({
    onAppLoad: () => dispatch(appLoad()),
});

export default connect(null, mapDispatchToProps)(App);
