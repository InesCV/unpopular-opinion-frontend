import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Provider } from 'mobx-react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import appStore from '../stores/app-store';
import AuthProvider from '../lib/AuthProvider';
import routes from './routes';

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
    <Provider appStore={appStore}>
      <AuthProvider>
        <Switch>
          {routes.map(({type: Route, path, component}, key) => 
              <Route exact whereAmI={path} path={path} component={component} key={key} />
          )}
        </Switch>
      </AuthProvider>
    </Provider>
  </BrowserRouter>
)
