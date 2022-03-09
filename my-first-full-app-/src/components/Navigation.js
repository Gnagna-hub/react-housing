import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return(
        <div className="navigation">
            <NavLink exact to="/" activeClassName="nav-active">
               Home
           </NavLink>
           <NavLink exact to="/houses" activeClassName="nav-active">
               Houses
           </NavLink>
           <NavLink exact to="/about" activeClassName="nav-active">
               About
           </NavLink>
           <NavLink exact to="/admin" activeClassName="nav-active">
               Admin
           </NavLink>

        </div>
    );
};

export default Navigation;