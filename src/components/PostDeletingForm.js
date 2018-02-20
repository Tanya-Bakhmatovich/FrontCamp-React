import React from 'react';

export default class PostDeletingForm extends React.Component {

  deletePost = () => {
    const id = document.getElementById('id-input-delete');

    this.props.deletePost(id.value);

    id.value = '';
  }

  render() {

    return (
      <div className={`form-group`}>
          <div className='col-auto'>
              <label> Enter Id for deleting</label>
                  <input id='id-input-delete' type='text' className='form-control'/>
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
};
