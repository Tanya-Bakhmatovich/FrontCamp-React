import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
// const passport = require('passport');

export default class LoginForm extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            hasErrors: false,
            errors: []
        };
    }

    handleChange = ({ field }) => (e) => {
        const newValue = {};
        newValue[field] = e.target.value;
        this.setState(newValue);
    }

    redirectToBlogs = (e) => {
        // passport.authenticate('local', {
        //   successRedirect: '/blogs',
        //   failureRedirect: '/users/login',
        //   // failureFlash: true,
        // })
        // e.preventDefault();
        // fetch("http://localhost:3000/users/login", {
        //   method: "POST",
        //   body: JSON.stringify(this.state),
        //   headers: new Headers({
        //     'Content-Type': 'application/json'
        //   }),
        // })
        // .then((resp) => {
        //     console.log(resp);
        //   this.props.history.push('/blogs');
        // })
        // .catch(() => {
        //     this.setState({hasErrors: true});
        // })
    }

    render() {
const { hasErrors } = this.state;
        return (
            <div>
                <NavBar />
                <form action='http://localhost:3000/users/login' method='post'>
                    <div className="form-group">
                        <label>Username</label>
                        <input onChange={this.handleChange({ field: 'username' })} name='username' type='text' className='form-control' />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input onChange={this.handleChange({ field: 'password' })} name='password' type='password' className='form-control' />
                    </div>
                    {hasErrors && <div>You are not registered, check your data or register</div>}
                    <button onClick={this.redirectToBlogs} id='login-btn' type='submit' className='btn btn-primary'>
                        Log in
                    </button>
                </form>
            </div>
        );
    }
}
