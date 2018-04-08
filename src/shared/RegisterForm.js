import React from 'react';
import NavBar from './NavBar';

export default class RegisterForm extends React.Component {

    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            email: '',
            name: '',
            hasErrors: false,
            errors: []
        };
    }

    handleChange = ({ field }) => (e) => {
        const newValue = {};
        newValue[field] = e.target.value;
        this.setState(newValue);
    }

    redirectToLoginForm = (e) => {
        const { username, password, email, name } = this.state;
        const newErrors = [];
        [{value: username, name: 'Username'},
        {value: password, name: 'Password'},
        {value: email, name:'Email'},
        {value: name, name: 'Name'}]
        .forEach(({value, name}) => {
            if(!value) {
                newErrors.push(`${name} is required`)
            }
        })
        if(newErrors.length) {
            this.setState({hasErrors: true, errors: newErrors});
            this.props.history.replace('/users/register');
        }
        e.preventDefault();
        fetch("http://localhost:3000/users", {
          method: "POST",
          body: JSON.stringify(this.state),
          headers: new Headers({
            'Content-Type': 'application/json'
          }),
        })
        .then((resp) => {
          this.props.history.push('/users/login');
        })
    }

    render() {
        const { hasErrors, errors } = this.state;

        return (
            <div>
                <NavBar />
                <form id='reg'>
                    <div className="form-group">
                        <label>Username</label>
                        <input onChange={this.handleChange({ field: 'username' })} name='username' type='text' className='form-control' />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input onChange={this.handleChange({ field: 'password' })} name='password' type='password' className='form-control' />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input onChange={this.handleChange({ field: 'email' })} name='email' type='text' className='form-control' />
                    </div>
                    <div className="form-group">
                        <label>Name</label>
                        <input onChange={this.handleChange({ field: 'name' })} name='name' type='text' className='form-control' />
                    </div>
                    {hasErrors &&
                        <div>
                            {errors.map((error, idx) => <p key={idx}>{error}</p>)}
                        </div>
                    }
                    <button onClick={this.redirectToLoginForm} id='register-btn' type='submit' form='reg' className='btn btn-primary'>
                        Register
                    </button>
                </form>
            </div>
        );
    }
}
