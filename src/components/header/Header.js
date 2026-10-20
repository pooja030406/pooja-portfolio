import React, { Component } from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { NavLink, withRouter } from "react-router-dom";
import { greeting, settings } from "../../portfolio.js";
import SeoHeader from "../seoHeader/SeoHeader";

const onMouseEnter = (event, color) => {
  event.currentTarget.style.backgroundColor = color;
};

const onMouseOut = (event) => {
  event.currentTarget.style.backgroundColor = "transparent";
};

class Header extends Component {
  handleNavigation = (event, path) => {
    event.preventDefault();

    const { history, location } = this.props;

    // Close the mobile menu
    const menuButton = document.getElementById("menu-btn");
    if (menuButton) {
      menuButton.checked = false;
    }

    // If already on Home, scroll to the selected section
    if (location.pathname === "/" || location.pathname === "/home") {
      const sectionId = path.replace("#", "");
      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      } else if (path === "#home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }

      return;
    }

    // Navigate to Home from Projects, Resume, or another page
    history.push("/");
    
    // Wait for Home to render, then scroll to the selected section
    if (path !== "#home") {
      setTimeout(() => {
        const sectionId = path.replace("#", "");
        const section = document.getElementById(sectionId);

        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    }
  };

  render() {
    const theme = this.props.theme;
    const logoLink = settings.isSplash ? "/splash" : "/";

    const navItems = [
      { label: "Home", path: "#home" },
      { label: "Education", path: "#education" },
      { label: "Certifications", path: "#certifications" },
      { label: "Projects", path: "#projects" },
      { label: "Contact Me", path: "#contact" },
      { label: "Resume", path: "#resume" }
    ];

    return (
      <Fade top duration={1000} distance="20px">
        <SeoHeader />

        <header className="header">
          <NavLink to={logoLink} className="logo">
            <span style={{ color: theme.text }}>{"<"}</span>
            <span className="logo-name" style={{ color: theme.text }}>
              {greeting.logo_name}
            </span>
            <span style={{ color: theme.text }}>{"/>"}</span>
          </NavLink>

          <input
            className="menu-btn"
            type="checkbox"
            id="menu-btn"
          />

          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon"></span>
          </label>

          <ul className="menu" style={{ backgroundColor: theme.body }}>
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.path}
                  onClick={(event) =>
                    this.handleNavigation(event, item.path)
                  }
                  onMouseEnter={(event) =>
                    onMouseEnter(event, theme.highlight)
                  }
                  onMouseOut={onMouseOut}
                  style={{ color: theme.text }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </header>
      </Fade>
    );
  }
}

export default withRouter(Header);