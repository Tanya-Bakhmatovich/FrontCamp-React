import React from 'react';

export default class Post extends React.Component {

  render() {
const { title, author, published, text } = this.props.post;

    return (
      <div className='post-block col-md-4 list-group-item'>
          <div className='post-title'><strong>Title:</strong> {title}</div>
          <div className='post-author'><strong>Author:</strong> {author}</div>
          <div className='post-date'><strong>Published:</strong> {published}</div>
          <br/>
          <div className='post-text'>{text}</div>
      </div>
    );
  }
};
