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
function App() {
  const [popUpActive, setPopUpActive] = useState(false);
  return (
    <NotificationContext.Provider value={{ popUpActive, setPopUpActive }}>
      <switch>
        <Route path="/Signup" component={Signup} default />
        <Route path="/" component={Signin} exact />
        <Route path="/dashboard" component={Home} exact />
        <Route path="/service" component={Service} />
        <Route path="/settings" component={Settings} />
      </switch>
    </NotificationContext.Provider>
  );
}
export default App;
