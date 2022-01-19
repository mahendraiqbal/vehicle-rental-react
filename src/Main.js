import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import store from "./redux/store";

import Profile from "./pages/Profile/Profile";
import SignUp from "./pages/SignUp/index";
import Login from "./pages/Login/index";
import Home from "./pages/Home/index";
import Detail from "./pages/Detail/index";
import getProfile from "./pages/Profile/getProfile";
import ForgotPassword from "./pages/ForgotPassword";
import VehicleType from "./pages/VehicleType/index";
import MoreDetail from "./pages/ViewMoreDetail";
import Reservation from "./pages/Reservation";
import Payment from "./pages/Payment";
import NewItem from "./pages/AddNewItem";
import EditItem from "./pages/EditItem";
import ChatList from "./pages/ChatList";
import ChatDetail from "./pages/ChatDetail";
import NotFound from "./pages/NotFound";
import getImage from "./pages/Profile/getImage";
import History from "./pages/History";
import EditPassword from "./pages/EditPassword";

function Main() {
  const token = JSON.parse(localStorage.getItem("vehicle-rental-token"));
  return (
    <ReduxProvider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />;
          <Route 
          path="/login"
          render={(routerProps) => {
            if (token) return <Redirect to="/" />;
            return <Login {...routerProps} />;
          }}
          component={Login} 
          />
          <Route 
          path="/signUp" 
          render={(routerProps) => {
            if (token) return <Redirect to="/login" />;
            return <SignUp {...routerProps} />;
          }}
          />
          <Route path="/detail" component={Detail} />;
          <Route 
          path="/profile" 
          render={(routerProps) => {
            if (!token) return <Redirect to="login" />;
            return <Profile {...routerProps} />
          }}
          />
          <Route path="/getProfile" component={getProfile} />;
          <Route 
          path="/forgotPassword" 
          render={(routerProps) => {
            if (token) return <Redirect to="/login" />;
            return <ForgotPassword {...routerProps} />;
          }}
          />
          <Route path="/vehicleType" component={VehicleType} />
          <Route path="/moreDetail" component={MoreDetail} />
          <Route path="/getImage" component={getImage} />
          <Route 
          path="/reservation" 
          render={(routerProps) => {
            if (!token) return <Redirect to="/login" />
            return <Reservation {...routerProps} />
          }}
          />
          <Route 
          path="/payment"
          render={(routerProps) => {
            if (!token) return <Redirect to="/login" />
            return <Payment {...routerProps} />
          }}
          />
          <Route 
          path="/addItem" 
          render={(routerProps) => {
            if (!token) return <Redirect to="/login" />;
            return <NewItem {...routerProps} />
          }}
          />
          <Route 
          path="/editItem" 
          render={(routerProps) => {
            if (!token) return <Redirect to="/login" />;
            return <EditItem {...routerProps} />
          }}
          />
          <Route 
          path="/chatList"
          render={(routerProps) => {
            if (!token) return <Redirect to="/login" />;
            return <ChatList {...routerProps} />
          }} 
          />
          <Route 
          path="/chatDetail"
          render={(routerProps) => {
            if (!token) return <Redirect to="/login" />;
            return <ChatDetail {...routerProps} />;
          }}
          />
          <Route 
          path="/history"
          render={(routerProps) => {
            if (!token) return <Redirect to="/login" />;
            return <History {...routerProps} />;
          }}
          />
          <Route 
          path="/editPassword"
          render={(routerProps) => {
            if (!token) return <Redirect to="/login" />;
            return <EditPassword {...routerProps} />;
          }}
          />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
     </ReduxProvider>
  );
}

export default Main;
