import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({ search, setSearch, categoryFilter, setCategoryFilter, categories }) {
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
    <NavLink
      to="/categories"
      className='navlink'
    >
      Categories
    </NavLink>
    <input
      className="navbar-input"
      type="text"
      id="search"
      name="search"
      placeholder="Search name..."
      value={search}
      onChange={e => setSearch(e.target.value)}
    />
    <select className="navbar-input" type="text"
      id="category"
      name="category"
      value={categoryFilter}
      onChange={e => setCategoryFilter(e.target.value)}
    >
      <option value='all'>All</option>
      {categories}
    </select>
  </div>;
}

export default NavBar;
