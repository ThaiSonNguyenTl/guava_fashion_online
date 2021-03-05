import React, { Component } from "react";
import { FaRegUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";

class Nav extends Component {
  state = {
    show: true,
    scrollPos: 0,
    activeClass: "",
  };

  // Adds an event listener when the component is mount.
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  // Hide or show the menu.
  handleScroll = () => {
    this.setState({
      scrollPos: document.body.getBoundingClientRect().top,
      show: document.body.getBoundingClientRect().top > this.state.scrollPos,
    });
  };

  render() {
    let { activeClass } = this.state;
    return (
      <nav
        className={
          this.state.show
            ? "show navbar navbar-expand-lg fixed-top navbar-light header__menu"
            : "hidden navbar navbar-expand-lg fixed-top navbar-light header__menu"
        }
      >
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            GUAVA
          </NavLink>{" "}
          <button
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            className="navbar-toggler"
            data-target="#navbarSupportedContent"
            data-toggle="collapse"
            type="button"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto header__right__widget">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  exact
                  to="/"
                  activeClassName="activeStyle"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link "
                  to="/women"
                  activeClassName="activeStyle"
                >
                  Women's
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link "
                  to="/men"
                  activeClassName="activeStyle"
                >
                  Men's
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link "
                  to="/kid"
                  activeClassName="activeStyle"
                >
                  Kid's
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/cart" activeClassName="activeStyle">
                  <span className="icon_bag_alt"></span>
                  <div className="tip">2</div>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/login"
                  activeClassName="activeStyle"
                >
                  <FaRegUser />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
export default Nav;
