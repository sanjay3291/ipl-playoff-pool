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
            <a id="logo" className="navbar-brand mr-auto" href="#">
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
                <a href="#">About</a>
              </li>
              <li id="button-link">
                <a className="" href="#">
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

/*<nav classNameName="navbar navbar-expand-lg navbar-dark ">
        <a className="navbar-brand" href="#">
          <img
            src={IPL_Logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="IPL_Logo"
          ></img>
          Ipl playoff pool
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#basicExampleNav"
          aria-controls="basicExampleNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="basicExampleNav">
          <ul className="navbar-nav ml-auto mr-3 pr-4">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Register
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item dropdown active">
              <a
                className="nav-link dropdown-toggle"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Groups
              </a>
              <div
                className="dropdown-menu dropdown-primary"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a className="dropdown-item" href="#">
                  BumChikBum
                </a>
                <a className="dropdown-item" href="#">
                  LocalBoys
                </a>
                <a className="dropdown-item" href="#">
                  NewGroup
                </a>
              </div>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
          </ul>
        </div>
      </nav>*/
