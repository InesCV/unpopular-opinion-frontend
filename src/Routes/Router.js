import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import routes from './routes';
import AuthProvider from "../lib/AuthProvider";

// Notifications configuration
toast.configure({
  position: "bottom-right",
  autoClose: 3000,
  hideProgressBar: false,
  newestOnTop: false,
  closeOnClick: true,
  rtl: true,
  pauseOnVisibilityChange: false,
  draggable: true,
  pauseOnHover: true,
});

export default () => (
  <BrowserRouter>
    <AuthProvider>
      <Switch>
        {routes.map(({type: Route, path, component}, key) => 
            <Route exact whereAmI={path} path={path} component={component} key={key} />
        )}
      </Switch>
    </AuthProvider>
  </BrowserRouter>
)
