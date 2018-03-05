import React from 'react';

export default class RegisterForm extends React.Component {

    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            email: '',
            name: '',
        };
    }

    handleChange = ({ field }) => (e) => {
        const newValue = {};
        newValue[field] = e.target.value;
        this.setState(newValue);
    }

    redirectToLoginForm = (e) => {
//         e.preventDefault();
//         fetch("http://localhost:3000/users", {
//   method: "POST",
//   body: JSON.stringify(this.state),
//   headers: new Headers({
//     'Content-Type': 'application/json'
//   }),
// })
// .then((resp) => {
//   console.log(resp)
// })
// .catch(() => {
//   console.log('failed')
// });
  this.props.history.push('/users/login');
    }

    render() {

        return (
            <div>
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
                    <button onClick={this.redirectToLoginForm} id='register-btn' type='submit' form='reg' className='btn btn-primary'>
                        Register
                    </button>
                </form>
            </div>
        );
    }
}
