import React from 'react';
import PropTypes from 'prop-types';
import { Row, Form, Col, Button, FormGroup, InputGroup, Glyphicon, FormControl } from 'react-bootstrap';

import './login.less';

class Login extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            submitted: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;

        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        const { username, password } = this.state;

        this.setState({ submitted: true });

        if (username && password) {
            this.props.onLogin(username, password);
        }

        e.preventDefault();
    }

    render() {
        const { loggingIn } = this.props;
        const { username, password, submitted } = this.state;

        return (
            <div className='container sing-in-container'>
                <div className='logo-panel'>
                    <span className='budget-icon' />
                </div>
                <Row>
                    <Col md={6} mdOffset={3}>
                        <Form name='form' className='signin-form' onSubmit={this.handleSubmit}>
                            <FormGroup validationState={submitted && (!username && !password) ? 'error' : null} >
                                <InputGroup bsSize='large' >
                                    <InputGroup.Addon>
                                        <Glyphicon glyph='user' />
                                    </InputGroup.Addon>
                                    <FormControl type='text' name='username' placeholder='Username' required onChange={this.handleChange} />
                                </InputGroup>
                                <InputGroup bsSize='large'>
                                    <InputGroup.Addon>
                                        <Glyphicon glyph='lock' />
                                    </InputGroup.Addon>
                                    <FormControl type='password' name='password' placeholder='Password' required onChange={this.handleChange} />
                                </InputGroup>
                            </FormGroup>
                            <FormGroup>
                                <Button
                                    type='submit'
                                    bsSize='large'
                                    block
                                    disabled={loggingIn}
                                >{loggingIn ? 'Signing in...' : 'Sign in'}</Button>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
                <div className='signin-footer-panel'>
                    <span>myBudget application</span>
                </div>
            </div>
        );
    }
}

Login.propTypes = {
    loggingIn: PropTypes.bool,
    onLogin: PropTypes.func.isRequired,
};

export default Login;
