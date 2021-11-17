import React, { useState } from "react";
import { Route } from "react-router-dom";
import Home from "./home";
import Service from "./service";
import Settings from "./settings";
import Signin from "./Login";
import Signup from "./Signup";
import NotificationPopup from "./NotificationPopup";
import NotificationContext from "./NotificationContext";
import Background from "./backgroundAll.png";
import Cancelled from "./CancelledOrder";
import History from "./OrderHistory";
import Wallet from "./Wallet";
import Order from "./Order";
import Current from "./CurrentOrder";
function App() {
  const [popUpActive, setPopUpActive] = useState(false);
  return (
    <NotificationContext.Provider value={{ popUpActive, setPopUpActive }}>
      <switch>
        <Route path="/Signup" component={Signup} default />
        <Route path="/SignIn" component={Signin} exact />
        <Route path="/" component={Home} exact />
        <Route path="/CurrentOrder" component={Current} exact />
        <Route path="/Wallet" component={Wallet} exact />
        <Route path="/Order" component={Order} exact />
        <Route path="/CancelledOrder" component={Cancelled} exact />
        <Route path="/OrderHistory" component={History} exact />
        <Route path="/service" component={Service} />
        <Route path="/settings" component={Settings} />
      </switch>
    </NotificationContext.Provider>
  );
}
export default App;
