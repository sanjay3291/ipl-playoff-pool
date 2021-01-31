import React, { Component } from "react";

import IPL_Logo from "./IPL_Logo.svg";
import "./navBar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

class Navbar extends Component {
  state = {};

  render() {
    return (
      <nav id="scanfcode" className="navbar navbar-expand-lg">
        <div className="container-fluid ">
          <div className="navbar-header">
            <button
              type="button"
              id="toggle-button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#myNavbar"
            >
              <span>
                <FontAwesomeIcon icon={faBars} />
              </span>
            </button>
            <a id="logo" className="navbar-brand mr-auto"  href="/">
              <img
                src={IPL_Logo}
                width="40"
                height="40"
                className="d-inline-block align-top"
                alt="IPL_Logo"
              ></img>
              IPL Playoff Pool
            </a>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul id="link" className="nav navbar-nav navbar-right ml-auto">
              <li className="dropdown" id="first-link">
                <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                  Groups
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="#">BumChikBum</a>
                  </li>
                  <li>
                    <a href="#">LocalBoys</a>
                  </li>
                  <li>
                    <a href="#">NewGroup</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/About">About</a>
              </li>
              <li id="button-link">
                <a className="" href="/Register">
                  Register
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;