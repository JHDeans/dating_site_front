import React from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  NavLink as Link
} from "react-router-dom";

import Logo from "../../../static/images/logos/circular-logic-logo.jpg";

import Home from "../pages/home";
import CardForm from "../infoForm";

const NavBar = () => {
  return (
    <BrowserRouter>
      <div className="navbar-container">
        <div className="navbar-wrapper">
          <div className="top-navbar">
            <div className="h1-wrapper">
              <h1>USERNAME</h1>
            </div>
          </div>
          <div className="bottom-navbar">
            <div className="right-side">
              <div className="logo-wrapper">
                <img src={Logo} alt="Doughnut Logo" />
              </div>
            </div>

            <div className="left-side">
              <div className="links-wrapper">
                <div className="link-wrapper">
                  <Link exact to="/">
                    HOMEPAGE
                  </Link>
                </div>
                <div className="link-wrapper">
                  <Link to="/form">FORM</Link>
                </div>
                <div className="link-wrapper">
                  <Link to="/">CONTACT</Link>
                </div>
                <div className="link-wrapper">
                  <Link to="/">LOGIN</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/form" component={CardForm} />
        </Switch>
        <div className="footer-wrapper">
          <div className="links-wrapper">
            <div className="link-wrapper">
              <Link exact to="/">
                HOMEPAGE
              </Link>
            </div>
            <div className="link-wrapper">
              <Link to="/form">FORM</Link>
            </div>
            <div className="link-wrapper">
              <Link to="/">CONTACT</Link>
            </div>
            <div className="link-wrapper">
              <Link to="/">LOGIN</Link>
            </div>
          </div>
          <div className="copyright-wrapper">
            <h1>COPYRIGHT</h1>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default NavBar;
