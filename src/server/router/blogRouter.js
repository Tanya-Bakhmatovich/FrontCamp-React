const Blog = require('./../models/blogs');

const express = require('express');
const blogRouter = express.Router();
// const logger = require('./../logger');

// blogRouter.use((req, resp, next) => {
//     logger.info(`path: ${req.url}; date: ${(new Date().toLocaleString())}`);
//     next();
// });

blogRouter.get('/', (req, resp, next) => {
    console.log("I work");
    Blog.find()
 .then(blogs => res.status(200).json(blogs))
 .catch(err => next(err));
    // Blog.find((err, blogs) => {
    //     console.log('resp', resp.json(blogs));
    //     return err ? next(err) : resp.json(blogs)});
});

// blogRouter.get('/:id', (req, resp, next) => {
//   Blog.findOne({
//     _id:req.params.id
//   }, (err, blog) =>
//       err ? next(err) : resp.json(blog))
// });

blogRouter.post('/', (req, resp, next) => {
  Blog.create(req.body, (err, blogs) => {
      console.log(blogs);
      return err ? next(err) : resp.send(blogs);
  })
});

blogRouter.put('/:id', (req, resp, next) => {
  Blog.findOneAndUpdate({
    _id:req.params.id
  }, req.body, (err, blog) =>
  err ? next(err) : resp.send(blog))
});

blogRouter.delete('/:id', (req, resp, next) => {
  Blog.findOneAndRemove({
    _id:req.params.id
  }, (err, blog) =>
  err ? next(err) : resp.json(blog))
});

module.exports = blogRouter;
