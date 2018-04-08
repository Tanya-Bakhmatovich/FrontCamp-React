import React from 'react';

export default class PostDeletingForm extends React.Component {

    constructor() {
        super();
        this.state = {
            id: ''
        };
    }

    handleChange = (e) => {
        this.setState({ id: e.target.value });
    }

    deleteBost = () => {
        this.props.deleteBlog(this.state.id);
        this.setState({ id: '' });
    }

    render() {

        return (
            <div className='form-group'>
            <div className='col-auto'>
                <label> Enter Id for deleting</label>
                    <input
                        type='text'
                        className='form-control'
                        value={this.state.id}
                        onChange={this.handleChange}
                    />
            </div>
            <br/>
            <button
                id='post-blog-button'
                type='button'
                className='btn btn-primary'
                onClick={this.deleteBost}
            >
            Delete
            </button>
            </div>
        );
    }
}
