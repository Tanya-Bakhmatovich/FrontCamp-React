import React from 'react';
import Post from './Post';
import Menu from './Menu';
import FilterPosts from './FilterPosts';

export default class AppContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            posts: [],
        };
    }

    onAddingPostHandler = (value) => {

        this.setState(({ posts }) => {
             const newPosts = posts;
             newPosts.push(value);

              return {
                  posts: newPosts
              }
        })
  }

    onDeletingPostHandler = (ident) => {

        this.setState(({ posts }) => {
            const indexPostForDeleting = posts.findIndex(({ id }) => id === ident);

            const newPosts = posts;

            if (indexPostForDeleting > -1) {
                newPosts.splice(indexPostForDeleting, 1);
            }

            return {
                posts: newPosts
            }
        })
    }

    filter = () => {
        const valueOfFilter = this.inputElement.value;

        this.setState(({ posts }) => {
            const newPosts = posts.filter(({ author }) => author.indexOf(valueOfFilter) > -1);

            return {
                posts: newPosts
            }
        });
    }

    render() {
        const { posts } = this.state;

        return (
            <div>
            <h3>Posts</h3>
            <FilterPosts
                posts={posts}
                filterPosts={this.filter}
                inputRef={el => this.inputElement = el}
            />
            <Menu
                onAddingPostHandler={this.onAddingPostHandler}
                onDeletingPostHandler={this.onDeletingPostHandler}
                posts={posts}
            />
            <br/>
            <div className='container-posts row'>
                {posts.map((post, index) => <Post key={index} post={post} />)}
            </div>
            </div>
        );
    }
}
