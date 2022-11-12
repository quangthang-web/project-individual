import Contact from '../Pages/Contact';
import Home from '../Pages/Home';
import Men from '../Pages/Men';
import About from '../Pages/About';
import Women from '../Pages/Women';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';
import Details from '../Pages/Details';
import Cart from '../Pages/Cart';

const RouteLink = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/Contact',
        component: Contact,
    },
    {
        path: '/Men',
        component: Men,
    },
    {
        path: '/About',
        component: About,
    },
    {
        path: '/Women',
        component: Women,
    },
    {
        path: '/login',
        component: Login,
        layout: Login,
    },
    {
        path: '/signup',
        component: Signup,
        layout: Signup,
    },
    {
        path: '/details',
        component: Details,
    },
    {
        path: '/cart',
        component: Cart,
    },
];


export default RouteLink;