import { Route } from 'react-router-dom';

import App from "../App";
import Private from "../pages/Private";
import Profile from "../pages/Profile";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Opinions from "../pages/Opinions";
import CreateOpinion from "../pages/CreateOpinion";
import Statistics from "../pages/Statistics";
import NotFound from '../pages/NotFound';
import Users from '../pages/Users';
import PrivateRoute from "../components/PrivateRoute";
import AnonRoute from "../components/AnonRoute";

const routes = [
  {
    type: Route,
    path: '/',
    component: App,
  }, 
  {
    type: AnonRoute,
    path: '/signup',
    component: Signup,
  }, 
  {
    type: AnonRoute,
    path: '/login',
    component: Login,
  }, 
  {
    type: PrivateRoute,
    path: '/private',
    component: Private,
  },
  {
    type: PrivateRoute,
    path: '/profile',
    component: Profile,
  },
  {
    type: PrivateRoute,
    path: '/user',
    component: Users,
  },
  {
    type: Route,
    path: '/opinions',
    component: Opinions,
  },
  {
    type: Route,
    path: '/opinions/all',
    component: Opinions,
  },
  {
    type: Route,
    path: '/opinions/create',
    component: CreateOpinion,
  },
  {
    type: Route,
    path: '/statistics',
    component: Statistics,
  },
  {
    type: Route,
    path: '*',
    component: NotFound,
  },
];

export default routes;
