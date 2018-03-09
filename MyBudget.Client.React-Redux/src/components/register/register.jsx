import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
    Grid,
    Row,
    Form,
    Col,
    Button,
    FormGroup,
    InputGroup,
    ControlLabel,
    HelpBlock,
    FormControl,
} from 'react-bootstrap';

import FooterPanel from '../footer-panel/footer-panel.jsx';

import './register.less';

export default class RegisterPage extends React.PureComponent {
    static propTypes = {
        registering: PropTypes.bool.isRequired,
        onRegister: PropTypes.func.isRequired,
    };

    state = {
        user: {
            username: '',
            password: '',
        },
        submitted: false,
    };

    handleChange = (event) => {
        const { name, value } = event.target;
        const { user } = this.state;

        this.setState({
            user: {
                ...user,
                [name]: value,
            },
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
        const { onRegister } = this.props;
        if (user.username && user.password) {
            onRegister(user);
        }
    };

    render() {
        const { registering } = this.props;
        const { user, submitted } = this.state;

        return (
            <Grid className='sing-up-container'>
                <Row>
                    <Col md={6} mdOffset={3}>
                        <h2>Register form</h2>
                        <Form name='form' className='signup-form' onSubmit={this.handleSubmit}>
                            <FormGroup validationState={submitted && !user.username ? 'error' : null}>
                                <InputGroup bsSize='large'>
                                    <ControlLabel>Username</ControlLabel>
                                    <FormControl
                                        type='text'
                                        className='form-control'
                                        name='username'
                                        value={user.username}
                                        onChange={this.handleChange}
                                    />
                                    {submitted && !user.username && <HelpBlock>Username is required</HelpBlock>}
                                </InputGroup>
                            </FormGroup>
                            <FormGroup validationState={submitted && !user.password ? 'error' : null}>
                                <InputGroup bsSize='large'>
                                    <ControlLabel>Password</ControlLabel>
                                    <FormControl
                                        type='password'
                                        className='form-control'
                                        name='password'
                                        value={user.password}
                                        onChange={this.handleChange}
                                    />
                                    {submitted && !user.password && <HelpBlock>Username is required</HelpBlock>}
                                </InputGroup>
                            </FormGroup>
                            <FormGroup>
                                <Button type='submit' bsSize='large' disabled={registering}>
                                    {registering ? 'Registering...' : 'Register'}
                                </Button>
                                <Button bsStyle='link' bsSize='large'>
                                    <Link to='/login'>Cancel</Link>
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
