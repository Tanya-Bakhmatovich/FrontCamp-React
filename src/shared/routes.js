import NavBar from './NavBar';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import Blogs from './Blogs';
import { fetchBlogs } from './api';

const routes = [
    {
        path: '/',
        exact: true,
        component: NavBar,
    },
    {
        path: '/users/register',
        component: RegisterForm,
    },
    {
        path: '/users/login',
        component: LoginForm,
    },
    {
        path: '/blogs',
        exact: true,
        component: Blogs,
    },
]

export default routes;
