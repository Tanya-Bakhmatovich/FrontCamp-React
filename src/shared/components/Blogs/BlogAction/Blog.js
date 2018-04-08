import React from 'react';

export default class Blog extends React.Component {

    render() {
        const { title, author, published, text, hidden } = this.props.blog;
        const isHiddenClass = hidden ? 'd-none' : '';

        return (
            <div className={`blog-block col-md-4 list-group-item ${isHiddenClass}`}>
                <div className='blog-title'><strong>Title:</strong> {title}</div>
                <div className='blog-author'><strong>Author:</strong> {author}</div>
                <div className='blog-date'><strong>Published:</strong> {published}</div>
                <br/>
                <div className='blog-text'>{text}</div>
            </div>
        );
    }
}
