import React from "react";
import {Route} from "react-router-dom";
import Home from "./home";
import Service from "./service";
import Settings from "./settings";
import Signin from "./Login";
import Signup from "./Signup";
function App(){
  
  return (
    <switch>
      <Route path="/Signup" component={Signup} default />
      <Route path="/" component={Signin} exact />
      <Route path="/dashboard" component={Home} exact />
      <Route path="/service" component={Service} />
      <Route path="/settings" component={Settings} />
    </switch>
  );
}
export default App;
