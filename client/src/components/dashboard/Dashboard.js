import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Sidemenu from "../../components/side-menu/content";
//import Navbar from "../../components/layout/Navbar";
//import RouterLink from "react-metismenu-router-link";
//import ReactDOM from "react-dom";
//import MetisMenu from "react-metismenu";
//import App from "../../App";
import MainNavbar from "../../components/layout/MainNavbar/MainNavbar";

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;

    return (
      <div style={{ height: "75vh" }} classNames="container valign-wrapper">
        <div classNames="col">
          <MainNavbar />
        </div>
        ,
        <aside>
          <Sidemenu />
        </aside>
        <div classNames="row">
          <div classNames="col">
            <h4>
              <b>Hey there,</b> {user.name.split(" ")[0]}
              <p classNames="flow-text grey-text text-darken-1">
                You are logged into the future{" "}
                <span style={{ fontFamily: "monospace" }}>
                  Converged Portal
                </span>{" "}
                app 👏
              </p>
            </h4>
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              classNames="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
