const Blog = require('./../models/blogs');

const express = require('express');
const blogRouter = express.Router();
const logger = require('./../logger');

// blogRouter.use((req, resp, next) => {
//     logger.info(`path: ${req.url}; date: ${(new Date().toLocaleString())}`);
//     next();
// });

// blogRouter.get('/list', (req, resp, next) => {
//     Blog.find((err, blogs) =>
//       err ? next(err) : resp.json(blogs))
// });

// blogRouter.get('/:id', (req, resp, next) => {
//   Blog.findOne({
//     _id:req.params.id
//   }, (err, blog) =>
//       err ? next(err) : resp.json(blog))
// });

blogRouter.post('/', (req, resp, next) => {
  Blog.create(req.body, (err, blogs) =>
  err ? next(err) : resp.send(blogs))
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
