import React from 'react';

export default class PostCreator extends React.Component {

    createBlock = () => {
        const valueNewPost = {
            title: this.inputTitle.value,
            author: this.inputAuthor.value,
            published: this.inputDate.value,
            text: this.inputText.value,
            id: this.inputId.value,
        }

        this.inputTitle.value = '';
        this.inputAuthor.value = '';
        this.inputDate.value = '';
        this.inputText.value = '';
        this.inputId.value = ''

        this.props.createBlock(valueNewPost);
    }

  render() {
    const { classForm } = this.props;

    return (
      <div className={`form-group ${classForm}`}>
          <div>
              <div className='col-auto'>
                  <label> Title </label>
                      <input ref={input => this.inputTitle = input} type='text' className='form-control'/>
              </div>
              <div className='col-auto'>
                  <label> Author </label>
                      <input ref={input => this.inputAuthor = input} type='text' className='form-control'/>
              </div>
              <div className='col-auto'>
                  <label> Published </label>
                      <input ref={input => this.inputDate = input} type='text' className='form-control'/>
              </div>
              <div className='col-auto'>
                  <label> Text </label>
                      <input ref={input => this.inputText = input} type='text' className='form-control'/>
              </div>
              <div className='col-auto'>
                  <label> Id </label>
                      <input ref={input => this.inputId = input} type='text' className='form-control'/>
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
}
