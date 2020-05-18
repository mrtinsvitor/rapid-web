import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { FirebaseAuthProvider } from './providers/FirebaseAuth/FirebaseAuthProvider';

import routes from "./routes";
import withTracker from "./withTracker";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/shards-dashboards.1.1.0.min.css";
import "./styles/index.css";
import "./styles/spinner.css";
import "./styles/main.css";
import "./styles/util.css";

export default () => (
  <Router basename={process.env.REACT_APP_BASENAME || ""}>
    <div>
      {/* No Auth Routes */}
      {routes.open.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={withTracker(props => {
              return (
                <route.component {...props} />
              );
            })}
          />
        );
      })}

      {/* Authenticated Routes */}
      {routes.closed.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={withTracker(props => {
              return (
                <FirebaseAuthProvider history={props.history}>
                  <route.layout {...props}>
                    <route.component {...props} />
                  </route.layout>
                </FirebaseAuthProvider>
              );
            })}
          />
        );
      })}
    </div>
  </Router>
);
