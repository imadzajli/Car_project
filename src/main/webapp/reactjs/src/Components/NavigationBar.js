import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <Navbar bg="blue" variant="dark">

        <div className="div2">
        <Link to="/" className="navbar-brand">
                Home
              </Link>
        </div>


      <Nav className="mr-auto">
        <Link to="/add" className="nav-link">
          Add car
        </Link>
        <Link to="/list" className="nav-link">
          List cars
        </Link>
        <Link to="/addProprietaire" className="nav-link">
          add user
        </Link>
        <Link to="/list_prop" className="nav-link">
          List users
        </Link>
      </Nav>
    </Navbar>
  );
}

export default NavigationBar;
