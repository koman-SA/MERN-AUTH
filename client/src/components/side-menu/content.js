import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import React, { Component } from "react";
// import ReactDOM, {Link} from "react-dom";
import { hashHistory } from "react-dom";
import MetisMenu from "react-metismenu";
import RouterLink from "react-metismenu-router-link";
import "../../App.css";

const Menu1 = () => (
  <div>
    <u>Menu 1 View</u>
  </div>
);
const Menu2 = () => (
  <div>
    <i>Menu 2 View</i>
  </div>
);
const SubMenu = () => (
  <div>
    <s>SubMenu View</s>
  </div>
);

const menu = [
  {
    label: "Dashboard",
    to: "Dashboard"
  },
  {
    label: "Environment",
    to: "menu-2",
    content: [
      {
        label: "Physical Servers",
        to: "sub-menu"
      },
      {
        label: "Virtual Machines",
        to: "sub-menu"
      },
      {
        label: "Desktops/Laptops",
        to: "sub-menu"
      },
      {
        label: "Storage Devices",
        to: "sub-menu"
      },
      {
        label: "Databases",
        to: "sub-menu"
      },
      {
        label: "Applications",
        to: "sub-menu"
      }
    ]
  },
  {
    label: "Monitor",
    content: [
      {
        icon: "bolt",
        label: "Jobs",
        label: "Sub Menu",
        to: "sub-menu"
      },
      {
        icon: "bolt",
        label: "Jobs",
        label: "Sub Menu",
        to: "sub-menu"
      }
    ]
  },
  {
    label: "Administer",
    content: [
      {
        icon: "bolt",
        label: "Jobs",
        label: "Sub Menu",
        to: "sub-menu"
      },
      {
        icon: "bolt",
        label: "Jobs",
        label: "Sub Menu",
        to: "sub-menu"
      }
    ]
  },
  {
    label: "Secure",
    content: [
      {
        icon: "bolt",
        label: "Jobs",
        label: "Sub Menu",
        to: "sub-menu"
      },
      {
        icon: "bolt",
        label: "Jobs",
        label: "Sub Menu",
        to: "sub-menu"
      }
    ]
  },
  {
    label: "Backup",
    content: [
      {
        icon: "bolt",
        label: "Jobs",
        label: "Sub Menu",
        to: "sub-menu"
      },
      {
        icon: "bolt",
        label: "Jobs",
        label: "Sub Menu",
        to: "sub-menu"
      }
    ]
  },
  {
    label: "Archive",
    content: [
      {
        icon: "bolt",
        label: "Jobs",
        label: "Sub Menu",
        to: "sub-menu"
      },
      {
        icon: "bolt",
        label: "Jobs",
        label: "Sub Menu",
        to: "sub-menu"
      }
    ]
  },
  {
    label: "Configure",
    content: [
      {
        icon: "bolt",
        label: "Jobs",
        label: "Sub Menu",
        to: "sub-menu"
      },
      {
        icon: "bolt",
        label: "Jobs",
        label: "Sub Menu",
        to: "sub-menu"
      }
    ]
  },
  {
    label: "Resources",
    content: [
      {
        icon: "bolt",
        label: "Jobs",
        label: "Sub Menu",
        to: "sub-menu"
      },
      {
        icon: "bolt",
        label: "Jobs",
        label: "Sub Menu",
        to: "sub-menu"
      }
    ]
  },
  {
    label: "Locations",
    content: [
      {
        icon: "bolt",
        label: "Jobs",
        label: "Sub Menu",
        to: "sub-menu"
      },
      {
        icon: "bolt",
        label: "Jobs",
        label: "Sub Menu",
        to: "sub-menu"
      }
    ]
  },
  {
    icon: "external-link",
    label: "External Link",
    externalLink: true,
    to: "https://www.google.com"
  }
];

class Sidemenu extends Component {
  render() {
    return (
      <div>
        <Router history={hashHistory}>
          <MetisMenu content={menu} activeLinkFromLocation />
          <Route path="menu-1" component={Menu1} />
          <Route path="menu-2" component={Menu2} />
          <Route path="sub-menu" component={SubMenu} />
        </Router>
      </div>
    );
  }
}
export default Sidemenu;
