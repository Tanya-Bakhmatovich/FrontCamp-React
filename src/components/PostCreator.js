import React from 'react';

export default class PostCreator extends React.Component {

    createBlock = () => {
        const title = document.getElementById('title-input-post');
        const author = document.getElementById('author-input-post');
        const published = document.getElementById('date-input-post');
        const text = document.getElementById('text-input-post');
        const id = document.getElementById('id-input-post');
        const valueNewPost = {
            title: title.value,
            author: author.value,
            published: published.value,
            text: text.value,
            id: id.value,
        }

        title.value = '';
        author.value = '';
        published.value = '';
        text.value = '';
        id.value = ''

        this.props.createBlock(valueNewPost);
    }

  render() {
    const { classForm } = this.props;

    return (
      <div className={`form-group ${classForm}`}>
          <div>
              <div className='col-auto'>
                  <label> Title </label>
                      <input id='title-input-post' type='text' className='form-control'/>
              </div>
              <div className='col-auto'>
                  <label> Author </label>
                      <input id='author-input-post' type='text' className='form-control'/>
              </div>
              <div className='col-auto'>
                  <label> Published </label>
                      <input id='date-input-post' type='text' className='form-control'/>
              </div>
              <div className='col-auto'>
                  <label> Text </label>
                      <input id='text-input-post' type='text' className='form-control'/>
              </div>
              <div className='col-auto'>
                  <label> Id </label>
                      <input id='id-input-post' type='text' className='form-control'/>
              </div>
              <div id='result-creating'></div>
          </div>
          <br/>
          <button
              id='post-blog-button'
              type='button'
              className='btn btn-primary'
              onClick={this.createBlock}
          >
            Create
          </button>
      </div>
    );
  }
};
