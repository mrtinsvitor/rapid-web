import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Container, Navbar, Nav } from "shards-react";

import NavbarSearch from "./NavbarSearch";
import NavbarToggle from "./NavbarToggle";
import UserActions from './UserActions';

const MainNavbar = ({ stickyTop, history }) => {
  const classes = classNames(
    "main-navbar",
    "bg-white",
    stickyTop && "sticky-top"
  );

  return (
    <div className={classes}>
      <Container className="p-0">
        <Navbar type="light" className="align-items-stretch flex-md-nowrap p-0">
          <NavbarSearch />

          <Nav navbar className="border-left flex-row">
            <UserActions history={history} />
          </Nav>

          <NavbarToggle />
        </Navbar>
      </Container>
    </div>
  );
};

MainNavbar.propTypes = {
  /**
   * The layout type where the MainNavbar is used.
   */
  layout: PropTypes.string,
  /**
   * Whether the main navbar is sticky to the top, or not.
   */
  stickyTop: PropTypes.bool
};

MainNavbar.defaultProps = {
  stickyTop: true
};

export default MainNavbar;
