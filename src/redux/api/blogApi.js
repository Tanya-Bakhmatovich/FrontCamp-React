
class BlogApi {
  static getBlogs() {
    return fetch('http://localhost:3000/blogs').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default BlogApi;
