import React from "react";
import PropTypes from "prop-types";
import classNames from "classNames";

import { Container } from "shards-react";
//import { Row, Col } from "shards-react";
import NavbarSearch from "./NavbarSearch";
import NavbarNav from "./NavbarNav/NavbarNav";

/*Dispacement = ({ children, noNavbar }) => (
  <Container fluid>
    <Row>
      <Col
        classNames="main-content p-0"
        lg={{ size: 10, offset: 2 }}
        md={{ size: 9, offset: 3 }}
        sm="12"
        tag="main"
      >
        {!noNavbar && <MainNavbar />}
        {children}
      </Col>
    </Row>
  </Container>
);*/

const MainNavbar = ({ layout, stickyTop }) => {
  const classes = classNames(
    "main-navbar",
    "bg-white",
    stickyTop && "sticky-top"
  );

  return (
    <div classNames={classes}>
      <Container classNames="p-0">
        <NavbarSearch />
        <NavbarNav />
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
