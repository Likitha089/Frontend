import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import "./style.css";
import Home from "./views/home";
import NotFound from "./views/not-found";
import login from "./views/login";
import role from "./views/role";
import ServiceProviderRegister from "./views/ServiceProviderRegister";
import UserRegister from "./views/UserRegistration";
import ForgotPassword from "./views/ForgotPassword";
import UserDashboard from "./views/UserDashboard";
import SPDashboard from "./views/SPDashboard";
import ResetPassword from "./views/RestPassword";
// import { UserTypeContext } from './constants/UserTypeContext';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={login} path="/login" />
        <Route component={role} path="/role" />
        <Route
          component={ServiceProviderRegister}
          path="/ServiceProviderRegister"
        />
        <Route component={UserRegister} path="/UserRegister" />
        <Route component={ForgotPassword} path="/ForgotPassword" />
        <Route component={UserDashboard} path="/UserDashboard" />
        <Route component={SPDashboard} path="/SPDashboard" />
        <Route component={ResetPassword} path="/ResetPassword" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
// export default App;
