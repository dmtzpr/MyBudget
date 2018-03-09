import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Grid, Row, Form, Col, Button, FormGroup, InputGroup, Glyphicon, FormControl } from 'react-bootstrap';

import LogoPanel from '../logo-panel/logo-panel.jsx';
import FooterPanel from '../footer-panel/footer-panel.jsx';

import './login.less';

export default class Login extends React.PureComponent {
    static propTypes = {
        isSignInFailed: PropTypes.bool.isRequired,
        loggingIn: PropTypes.bool.isRequired,
        onLogin: PropTypes.func.isRequired,
        onLogout: PropTypes.func.isRequired,
    };

    state = {
        username: '',
        password: '',
        submitted: false,
    };

    componentWillMount() {
        this.props.onLogout();
    }

    handleChange = (e) => {
        const { name, value } = e.target;

        this.setState({ [name]: value });
    };

    handleSubmit = (e) => {
        const { username, password } = this.state;

        this.setState({ submitted: true });

        if (username && password) {
            this.props.onLogin(username, password);
        }

        e.preventDefault();
    };

    render() {
        const { loggingIn, isSignInFailed } = this.props;
        const { username, password, submitted } = this.state;

        return (
            <Grid className='sing-in-container'>
                <Row>
                    <LogoPanel />
                    <Col md={6} mdOffset={3}>
                        <Form name='form' className='signin-form' onSubmit={this.handleSubmit}>
                            <FormGroup
                                validationState={
                                    isSignInFailed || (submitted && (!username && !password)) ? 'error' : null
                                }
                            >
                                <InputGroup bsSize='large'>
                                    <InputGroup.Addon>
                                        <Glyphicon glyph='user' />
                                    </InputGroup.Addon>
                                    <FormControl
                                        type='text'
                                        name='username'
                                        placeholder='Username'
                                        required
                                        onChange={this.handleChange}
                                    />
                                </InputGroup>
                                <InputGroup bsSize='large'>
                                    <InputGroup.Addon>
                                        <Glyphicon glyph='lock' />
                                    </InputGroup.Addon>
                                    <FormControl
                                        type='password'
                                        name='password'
                                        placeholder='Password'
                                        required
                                        onChange={this.handleChange}
                                    />
                                </InputGroup>
                            </FormGroup>
                            <FormGroup>
                                <Button type='submit' bsSize='large' block disabled={loggingIn}>
                                    {loggingIn ? 'Signing in...' : 'Sign in'}
                                </Button>
                                <Button bsStyle='link' bsSize='large'>
                                    <Link to='/register'>Register</Link>
                                </Button>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
                <FooterPanel />
            </Grid>
        );
    }
}
