import { Route } from 'react-router-dom';

import PrivateRoute from "../components/PrivateRoute";
import AnonRoute from "../components/AnonRoute";
import App from "../App";
import Private from "../pages/Private";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Opinions from "../components/opinions/Opinions";
import CreateOpinion from "../pages/CreateOpinion";
import NotFound from '../pages/NotFound';

const routes = [
  {
    route: Route,
    path: '/',
    component: App,
  }, 
  {
    route: AnonRoute,
    path: '/signup',
    component: Signup,
  }, 
  {
    route: AnonRoute,
    path: '/login',
    component: Login,
  }, 
  {
    route: PrivateRoute,
    path: '/private',
    component: Private,
  },
  {
    route: Route,
    path: '/opinions',
    component: Opinions,
  },
  {
    route: Route,
    path: '/opinions/create',
    component: CreateOpinion,
  },
  {
    route: Route,
    path: '*',
    component: NotFound,
  },
];

export default routes;
