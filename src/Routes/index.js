import Contact from '../Pages/Contact';
import Home from '../Pages/Home';
import Men from '../Pages/Men';
import About from '../Pages/About';
import Women from '../Pages/Women';

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
];


export default RouteLink;