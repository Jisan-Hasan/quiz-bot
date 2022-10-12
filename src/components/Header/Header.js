import { Navbar } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar fluid={false} rounded={true}>
        <Link to="/">
          <Navbar.Brand>
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Quiz Bot
            </span>
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Link to="/">
            <Navbar.Link>Topics</Navbar.Link>
          </Link>
          <Link to="/statistics">
            <Navbar.Link>Statistics</Navbar.Link>
          </Link>
          <Link to="/blogs">
            <Navbar.Link>Blogs</Navbar.Link>
          </Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
