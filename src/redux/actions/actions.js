export const ADD_BLOG = 'ADD_BLOG';
export const REMOVE_BLOG = 'REMOVE_BLOG';
export const FILTER_BLOGS = 'FILTER_BLOGS';

export const addBlog = (objBlog) => ({
    type: ADD_BLOG,
    objBlog
});

export const removeBlog = id => ({
    type: REMOVE_BLOG,
    id
})

export const filterBlogs = value => ({
    type: FILTER_BLOGS,
    value
})

// export const request = ({ url, method, body }) => ({
//     return (dispatch) => {
//         dispatch({
//             type: POST_BLOG_REQUEST,
//
//         })
//     }
// })
