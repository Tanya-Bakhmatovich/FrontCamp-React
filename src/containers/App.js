import React from 'react';
import { connect } from 'react-redux';
import Blog from './../components/Blogs/BlogAction/Blog';
import Menu from './../components/Blogs/BlogAction/Menu';
import FilterPosts from './../components/Blogs/BlogAction/FilterPosts';
import { addBlog, removeBlog, filterBlogs } from '../redux/actions/actions';

const App = props => (
    <div>
        <h3>Posts</h3>
        <FilterPosts
            filterBlogs={props.filterBlogs}
        />
        <Menu
            addBlog={props.addBlog}
            removeBlog={props.removeBlog}
            blogs={props.blogs}
        />
        <br/>
        <div className='container-posts row'>
            {props.blogs.map((blog, index) => <Blog key={index} blog={blog} />)}
        </div>
    </div>
);

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

export default connect(mapStateToProps, mapDispatchToProps)(App);
