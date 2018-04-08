import React from 'react';
import PostCreator from './PostCreator';
import PostDeletingForm from './PostDeletingForm';
// import ResultOfAction from './ResultOfAction';

export default class Menu extends React.Component {

  constructor() {
      super();
      this.state = {
          disabled: true,
          deleting: false,
          showResult: false,
          message: '',
      };
  }

  showHideFormAddingPost = () => {
      this.setState(prevState => {
          return {
              disabled: !prevState.disabled,
              deleting: false,
          }
      })
  }

  createBlog = ({ value, message, success }) => {
      this.setState({ showResult: !!message, message, success });
      if(value) {
          this.props.addBlog(value);
      }
      setTimeout(() => this.setState({ showResult: false }), 3000);
  }

  deleteBlog = (id) => {
      this.props.removeBlog(id);
  }

  changeDeleteState = () => {
      this.setState(prevState => {
          return {
            deleting: !prevState.deleting,
            disabled: true,
          }
      })
  }

  render() {
    const { disabled, deleting, showResult, message, success } = this.state;
    const { blogs, addBlog, removeBlog } = this.props;

    return (
        <div>
            <button
                onClick={this.showHideFormAddingPost}
                disabled={!disabled}
                className='btn btn-primary'
            >
                Add post
            </button>
            <button
                onClick={this.showHideFormAddingPost}
                disabled={disabled}
                className='btn btn-primary'
            >
                Hide form
            </button>
            <button
                onClick={this.changeDeleteState}
                disabled={!blogs.length}
                className='btn btn-primary'
            >
                Delete post
            </button>
            {!disabled && <PostCreator createBlog={this.createBlog} />}
            {deleting && <PostDeletingForm deleteBlog={this.deleteBlog} />}
            <br/>
        </div>
    );
  }
}
