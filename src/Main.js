import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Provider as ReduxProvider } from "react-redux";
// import store from "./redux/store";

import Profile from "./pages/Profile/Profile";
import SignUp from "./pages/SignUp/index";
import Login from "./pages/Login/index";
import Home from "./pages/Home/index";
import Detail from "./pages/Detail/index";
import getProfile from "./pages/Profile/getProfile";
import ForgotPassword from "./pages/ForgotPassword";
import ForgotPassword2 from "./pages/ForgotPassword2";
import VehicleType from "./pages/VehicleType/index";
import MoreDetail from "./pages/ViewMoreDetail2";
import Reservation from "./pages/Reservation";
import Payment from "./pages/Payment";
import NewItem from "./pages/AddNewItem"

function Main() {
  return (
    // <ReduxProvider store={store}>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signUp" component={SignUp} />
          <Route path="/home" component={Home} />
          <Route path="/detail" component={Detail} />
          <Route path="/profile" component={Profile} />
          <Route path="/getProfile" component={getProfile} />
          <Route path="/forgotPassword" component={ForgotPassword} />
          <Route path="/forgotPassword2" component={ForgotPassword2} />
          <Route path="/vehicleType" component={VehicleType} />
          <Route path="/moreDetail" component={MoreDetail} />
          <Route path="/reservation" component={Reservation} />
          <Route path="/payment" component={Payment} />
          <Route path="/addItem" component={NewItem} />
        </Switch>
      </Router>
    // </ReduxProvider>
  );
}

export default Main;
