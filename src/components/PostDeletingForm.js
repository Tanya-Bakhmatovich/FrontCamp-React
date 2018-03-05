import React from 'react';

export default class PostDeletingForm extends React.Component {

    deletePost = () => {
        this.props.deletePost(this.inputDeleteId.value);
        this.inputDeleteId.value = '';
    }

    render() {

        return (
            <div className='form-group'>
            <div className='col-auto'>
                <label> Enter Id for deleting</label>
                    <input
                        type='text'
                        className='form-control'
                        ref={input => this.inputDeleteId = input}
                    />
            </div>
            <br/>
            <button
                id='post-blog-button'
                type='button'
                className='btn btn-primary'
                onClick={this.deletePost}
            >
            Delete
            </button>
            </div>
        );
    }
}
