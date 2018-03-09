import { ADD_BLOG, REMOVE_BLOG, FILTER_BLOGS } from '../actions';

let blogs = [];

export default (state = [], action) => {
    switch(action.type) {
        case ADD_BLOG: {
            return [...state, action.objBlog];
        }
        case REMOVE_BLOG: {
            return state.filter(blog => blog.id !== action.id);
        }
        case FILTER_BLOGS: {
            return state.map((blog) => {
                blog.hidden = blog.author.indexOf(action.value) === -1;

                return blog;
            });
        }
        default:
            return state;
    }
}
