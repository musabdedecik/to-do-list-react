import Login from "./components/Pages/Login";
import { Switch, Route, Redirect } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { getToken } from "./config/auth";
import DashboardLayout from "./components/Layouts/DashboardLayout";
import NotFound from "./components/Pages/NotFound";
import { useState } from "react";
import { useSelector } from "react-redux";

function App() {
  const [isAuth, setAuth] = useState(getToken());
  const loading = useSelector((state) => state.user.loading)
  return (
    <Switch>
      <Route exact path="/login" component={Login}>
        {isAuth && <Redirect from="/login" to="/dashboard"></Redirect>}
      </Route>
      <Route path="/dashboard" component={DashboardLayout}>
        {!isAuth && <Redirect from="/dashboard" to="/login"></Redirect>}
      </Route>
      <Redirect exact from="/" to={isAuth ? "/dashboard" : "/login"} />
      <Route component={NotFound}>
        <Redirect to="/dashboard"></Redirect>
      </Route>
    </Switch>
  );
}

export default withRouter(App);