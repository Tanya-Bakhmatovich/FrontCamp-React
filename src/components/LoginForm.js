import React from 'react';
import { Link } from 'react-router-dom';

export default class WelcomePage extends React.Component {
    redirectToBlogs = (e) => {
        e.preventDefault();
        this.props.history.push('/blogs');
    }

    render() {

        return (
            <div>
                <form action='http://localhost:3000/users/login' method='post'>
                    <div className="form-group">
                        <label>Username</label>
                        <input name='username' type='text' className='form-control' />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input name='password' type='password' className='form-control' />
                    </div>
                    <button onClick={this.redirectToBlogs} id='login-btn' type='submit' className='btn btn-primary'>
                        Log in
                    </button>
                </form>
            </div>
        );
    }
}
