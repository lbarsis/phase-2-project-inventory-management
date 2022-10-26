import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return <div className="navbar">
    <NavLink
      to="/"
      className='navlink'
    >
      Home
    </NavLink>
    <NavLink
      to="/inventory"
      className='navlink'
    >
      Inventory
    </NavLink>
    <NavLink
      to="/add-item"
      className='navlink'
    >
      Add Item
    </NavLink>
    <NavLink
      to="/on-order"
      className='navlink'
    >
      On Order
    </NavLink>
  </div>;
}

export default NavBar;
