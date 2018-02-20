import React from 'react';
import PostCreator from './PostCreator';
import PostDeletingForm from './PostDeletingForm';

export default class Menu extends React.Component {

  constructor() {
      super();
      this.state = {
          disabled: true,
          deleting: false,
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

  createBlock = (value) => {
      this.props.onAddingPostHandler(value);
  }

  deletePost = (id) => {
      this.props.onDeletingPostHandler(id);
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
    const { disabled, deleting } = this.state;
    const { posts } = this.props;
    const classForAddingPostForm = disabled ? "hidden" : "show";
    const classForDeletingPostForm = deleting ? "hidden" : "show";

    return (
        <div>
            <button
                onClick={this.showHideFormAddingPost}
                disabled={!disabled}
                className={`btn btn-primary`}
            >
                Add post
            </button>
            <button
                onClick={this.showHideFormAddingPost}
                disabled={disabled}
                className={`btn btn-primary`}
            >
                Hide form
            </button>
            <button
                onClick={this.changeDeleteState}
                disabled={!posts.length}
                className={`btn btn-primary`}
            >
                Delete post
            </button>
            {!disabled && <PostCreator createBlock={this.createBlock} />}
            {deleting && <PostDeletingForm deletePost={this.deletePost} />}
            <br/>
        </div>
    );
  }
}
