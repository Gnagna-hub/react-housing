import React from "react";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import UserProvider from "./context";
import "./styles/index.scss"
import HomePage from "./pages/HomePage";




const App = () => {
  return(
<>
      <Router>
        <UserProvider>
        
          <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/houses' exact component={Home} />
            <Route path='/about' exact component={About} />
            <Route path='/admin' exact component={Admin} />
            <Route  component={NotFound}/>
           
          </Switch>
         
        </UserProvider>
      </Router>
    </>
 
  );
  
};

export default App;
