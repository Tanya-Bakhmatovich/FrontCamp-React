import React from 'react';

export default class WelcomePage extends React.Component {
    redirectToRegisterForm = (e) => {
        e.preventDefault();
        this.props.history.push('/users/register');
    }

    render() {

        return (
            <div>
                <form className="form-inline">
                    <div className="form-group">
                        <button onClick={this.redirectToRegisterForm} className='btn btn-primary btn-lg active'>
                            Register
                        </button>
                    </div>
                    <div className="form-group">
                        <button className='btn btn-primary btn-lg active'>
                            Log in
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}
