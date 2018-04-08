import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });

import LoginForm from './../shared/LoginForm';
import NavBar from './../shared/NavBar';
import NoMatch from './../shared/NoMatch';
import RegisterForm from './../shared/RegisterForm';
import Blog from '../shared/components/Blogs/BlogAction/Blog';
import BlogUpdatingForm from './../shared/components/Blogs/BlogAction/BlogUpdatingForm';
import FilterPosts from '../shared/components/Blogs/BlogAction/FilterPosts';
import Menu from '../shared/components/Blogs/BlogAction/Menu';
import PostCreator from '../shared/components/Blogs/BlogAction/PostCreator';
import PostDeletingForm from '../shared/components/Blogs/BlogAction/PostDeletingForm';

describe('Component', () => {
  it('NoMatch should match snapshot', () => {
    const wrapper = shallow(<NoMatch />);
    expect(toJson(wrapper)).toMatchSnapshot();
});

it('LoginForm should match snapshot', () => {
  const wrapper = shallow(<LoginForm />);
  expect(toJson(wrapper)).toMatchSnapshot();
});

it('NavBar should match snapshot', () => {
  const wrapper = shallow(<NavBar />);
  expect(toJson(wrapper)).toMatchSnapshot();
});

it('RegisterForm should match snapshot', () => {
  const wrapper = shallow(<RegisterForm />);
  expect(toJson(wrapper)).toMatchSnapshot();
});

it('Blog should match snapshot', () => {
    const blogMock = {
         title: 'title',
         author: 'author',
         published: 'published',
         text: 'text',
         hidden: true
    }
  const wrapper = shallow(<Blog blog={blogMock} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});

it('RegisterForm should match snapshot', () => {
  const wrapper = shallow(<RegisterForm />);
  expect(toJson(wrapper)).toMatchSnapshot();
});

it('BlogUpdatingForm should match snapshot', () => {
  const wrapper = shallow(<BlogUpdatingForm />);
  expect(toJson(wrapper)).toMatchSnapshot();
});

it('FilterPosts should match snapshot', () => {
  const wrapper = shallow(<FilterPosts />);
  expect(toJson(wrapper)).toMatchSnapshot();
});

it('Menu should match snapshot', () => {
    const blogsMock = [{}, {}];
  const wrapper = shallow(<Menu blogs={blogsMock} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});

it('PostCreator should match snapshot', () => {
  const wrapper = shallow(<PostCreator />);
  expect(toJson(wrapper)).toMatchSnapshot();
});

it('PostDeletingForm should match snapshot', () => {
  const wrapper = shallow(<PostDeletingForm />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
});
