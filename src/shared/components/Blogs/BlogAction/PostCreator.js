import React from 'react';
const HOST = 'http://localhost:3000';
const PATH = '/blogs';

export default class PostCreator extends React.Component {

    componentWillMount() {
		this.setInitState();
	}

    setInitState() {
		this.setState({
            title: '',
            author: '',
            date: '',
            text: '',
            id: '',
            hidden: false
		});
	}

    handleChange = ({ field }) => (e) => {
        const newValue = {};
        newValue[field] = e.target.value;
        this.setState(newValue);
    }

    successHandler = ({  message }) => {

  element.innerHTML = message;
  element.className = 'alert alert-success';
}

errorHandler = () => {

}

    createBlog = () => {
        console.log(this.props);
        fetch(`${HOST}${PATH}`, {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: new Headers({
              'Content-Type': 'application/json'
            }),
          })
          .then(() => {
              this.props.createBlog({ value: this.state, message: 'Blog added to the collection', success: true });
              this.setInitState();
          })
          .catch(e => {
              this.props.createBlog({ message: `${e}`, success: false });
  });
}

  render() {
    const { classForm } = this.props;
    const { title, author, date, text, id } = this.state;

    return (
      <div className={`form-group ${classForm}`}>
          <div>
              <div className='col-auto'>
                  <label> Title </label>
                      <input value={title} onChange={this.handleChange({field: 'title'})} type='text' className='form-control'/>
              </div>
              <div className='col-auto'>
                  <label> Author </label>
                      <input value={author} onChange={this.handleChange({field: 'author'})} type='text' className='form-control'/>
              </div>
              <div className='col-auto'>
                  <label> Published </label>
                      <input value={date} onChange={this.handleChange({field: 'date'})} type='text' className='form-control'/>
              </div>
              <div className='col-auto'>
                  <label> Text </label>
                      <input value={text} onChange={this.handleChange({field: 'text'})} type='text' className='form-control'/>
              </div>
              <div className='col-auto'>
                  <label> Id </label>
                      <input value={id} onChange={this.handleChange({field: 'id'})} type='text' className='form-control'/>
              </div>
              <div id='result-creating'></div>
          </div>
          <br/>
          <button
              id='post-blog-button'
              type='button'
              className='btn btn-primary'
              onClick={this.createBlog}
          >
            Create
          </button>
      </div>
    );
  }
}
