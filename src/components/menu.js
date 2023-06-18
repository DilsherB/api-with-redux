import React from "react";
import { NavLink } from "react-router-dom";

// Navbar component
const Menu = () => {
  const menuItems = {
    "all-users": "All Users",
    "add-user": "Add User",
  };
  return (
    <div className="flex-auto">
      <h5 className="flex-1">Math Magicians</h5>
      <ul className="flex-">
        {Object.keys(menuItems).map((item) => (
          <li key={item} className="list-group-item">
            <NavLink to={`${item}`} className="text-decoration-none text-dark">
              {menuItems[item]}
            </NavLink>
          </li>
        ))}
      </ul>

      <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default Menu;
