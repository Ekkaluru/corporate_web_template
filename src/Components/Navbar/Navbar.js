import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/Images/your-logo.png";

const Navbar = ({ onMenuItemClick }) => {
  const menu = (
    <>
      <li>
        <Link to="#home" onClick={() => onMenuItemClick("home")}>Home</Link>
      </li>
      <li>
        <Link to="#services" onClick={() => onMenuItemClick("services")}>Services</Link>
      </li>
      <li>
        <Link to="#about" onClick={() => onMenuItemClick("about")}>About Us</Link>
      </li>
      <li>
        <Link to="#contact" onClick={() => onMenuItemClick("contact")}>Contact Us</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menu}
          </ul>
        </div>
        <Link to="#home" className="text-2xl font-bold">
          <img src={logo} alt="" className="w-[300px] h-[70px]"/>
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg font-semibold">{menu}</ul>
      </div>
    </div>
  );
};

export default Navbar;
