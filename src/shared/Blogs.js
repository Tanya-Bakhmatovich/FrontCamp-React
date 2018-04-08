import React, { Component } from 'react';
import { connect } from 'react-redux';
import Blog from './components/Blogs/BlogAction/Blog';
import Menu from './components/Blogs/BlogAction/Menu';
import FilterPosts from './components/Blogs/BlogAction/FilterPosts';
import { addBlog, removeBlog, filterBlogs } from '../redux/actions/actions';

export class Blogs extends Component {
    componentDidMount() {
        const HOST = 'http://localhost:3000';
        const PATH = '/blogs';
        fetch(`${HOST}${PATH}`, {
            method: 'GET',
          })
          .then((resp) => {
              console.log('resp', resp);
              return resp;
          })
          .catch(e => {
              console.log(e);
          // .then(r => {
          //     console.log(r.json());
          // })

    });
    }

    render() {
        return (
            <div>
                <h3>Posts</h3>
                <FilterPosts
                    filterBlogs={this.props.filterBlogs}
                />
                <Menu
                    blogs={this.props.blogs}
                    addBlog={this.props.addBlog}
                    removeBlog={this.props.removeBlog}
                />
                <br/>
                <div className='container-posts row'>
                    {this.props.blogs.map((blog, index) => <Blog key={index} blog={blog} />)}
                </div>
            </div>
        )
    }
};

const mapStateToProps = state => ({
    blogs: state
});

const mapDispatchToProps = dispatch => ({
    addBlog(objBlog) {
        dispatch(addBlog(objBlog));
    },
    removeBlog(id) {
        dispatch(removeBlog(id));
    },
    filterBlogs(value) {
        dispatch(filterBlogs(value));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Blogs);
