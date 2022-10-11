import { Navbar } from "flowbite-react";
import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar fluid={false} rounded={true}>
        <NavLink to="/">
          <Navbar.Brand>
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Quiz Bot
            </span>
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <NavLink to="/">
            <Navbar.Link>Topics</Navbar.Link>
          </NavLink>
          <NavLink to="/statistics">
            <Navbar.Link>Statistics</Navbar.Link>
          </NavLink>
          <NavLink to="/blogs">
            <Navbar.Link>Blogs</Navbar.Link>
          </NavLink>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
