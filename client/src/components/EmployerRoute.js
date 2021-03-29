import { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import api from "../utils/api";
import { useIsAuthenticated } from "../utils/auth";

const EmployerRoute = ({
  component: Component,
  children,
  redirectTo = "/",
  ...props
}) => {
  const isAuth = useIsAuthenticated();

  const render = ({ location }) =>
    isAuth ? (
      Component ? (
        <Component />
      ) : (
        children
      )
    ) : (
      <Redirect to={{ pathname: redirectTo, state: { from: location } }} />
    );

  //   useEffect(() => {
  //     api.getSurvey().then(res => {
  //       console.log("res: ", res);
  //       console.log(res.data[0].date);
  //       // setDate(res.data[0].clockInOne)
  //       // console.log("get Date: " + date)
  //       //ClockInOne - was working
  //       // setClockInOne(res.data[0].clockInOne)
  //       // setClockOutOne(res.data[0].clockOutOne[1])
  //       // console.log("get clockInOne ", clockOutOne)
  //     });
  //   }, []);

  return <Route {...props} render={render} />;
};

export default EmployerRoute;
