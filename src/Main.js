import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
// import { Provider as ReduxProvider } from "react-redux";
// import store from "./redux/store";
import {PersistGate} from 'redux-persist/es/integration/react';
import {persistor} from './redux/store';

import Profile from "./pages/Profile/Profile";
import SignUp from "./pages/SignUp/index";
import Login from "./pages/Login";
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
// import ViewAll from './pages/VehicleType/vehicles';
// import getImage from "./pages/Profile/getImage";
import History from "./pages/History";
import EditPassword from "./pages/EditPassword";
import vehicles from "./pages/VehicleType/vehicles";

function Main() {
  const token = JSON.parse(localStorage.getItem("vehicle-rental-token"));
  return (
    <PersistGate loading={null} persistor={persistor}>
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
          <Route 
          path="/forgotPassword" 
          render={(routerProps) => {
            if (token) return <Redirect to="/login" />;
            return <ForgotPassword {...routerProps} />;
          }}
          />
          <Route path="/vehicle/type" component={VehicleType} />
          <Route path="/vehicle/detail" component={MoreDetail} />
          {/* <Route path="/getImage" component={getImage} /> */}
          <Route path="/detail/:id" component={Detail} />;
          {/* <Route path="/vehicles/:category" component={ViewAll}/> */}
          {/* <Route path="/profile" render={(routerProps) => {
            if (!token) return <Redirect to="/login" />
            return <Profile {...routerProps} />
          }}
          /> */}
          <Route path="/profile" component={Profile} />;
          <Route path="/getProfile" component={getProfile} />;
          {/* <Route 
          path="/reservation" 
          render={(routerProps) => {
            if (!token) return <Redirect to="/login" />
            return <Reservation {...routerProps} />
          }}
          /> */}
          <Route path="/reservation" component={Reservation} />;
          {/* <Route 
          path="/payment"
          render={(routerProps) => {
            if (!token) return <Redirect to="/login" />
            return <Payment {...routerProps} />
          }}
          /> */}
          <Route path="/payment" component={Payment} />;
          {/* <Route 
          path="/vehicle/add" 
          render={(routerProps) => {
            if (!token) return <Redirect to="/login" />;
            return <NewItem {...routerProps} />
          }}
          /> */}
          <Route path="/vehicle/add" component={NewItem}/>
          <Route 
          path="/vehicle/edit" 
          render={(routerProps) => {
            if (!token) return <Redirect to="/login" />;
            return <EditItem {...routerProps} />
          }}
          />
          <Route 
          path="/chat/list"
          render={(routerProps) => {
            if (!token) return <Redirect to="/login" />;
            return <ChatList {...routerProps} />
          }} 
          />
          <Route 
          path="/chat/detail"
          render={(routerProps) => {
            if (!token) return <Redirect to="/login" />;
            return <ChatDetail {...routerProps} />;
          }}
          />
          {/* <Route 
          path="/history"
          render={(routerProps) => {
            if (!token) return <Redirect to="/login" />;
            return <History {...routerProps} />;
          }}
          /> */}
          <Route path="/history" component={History}/>
          <Route 
          path="/edit/password"
          render={(routerProps) => {
            if (!token) return <Redirect to="/login" />;
            return <EditPassword {...routerProps} />;
          }}
          />
          <Route path="/vehicles/:type" component={vehicles}/>
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
     </PersistGate>
  );
}

export default Main;
