import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import React, { Component } from "react";
// import ReactDOM, {Link} from "react-dom";
import { hashHistory } from "react-dom";
import MetisMenu from "react-metismenu";

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
        to: "sub-menu1"
      },
      {
        label: "Virtual Machines",
        to: "sub-menu"
      },
      {
        label: "Desktops/Laptops",
        to: "sub-menu2"
      },
      {
        label: "Storage Devices",
        to: "sub-menu3"
      },
      {
        label: "Databases",
        to: "sub-menu4"
      },
      {
        label: "Applications",
        to: "sub-menu5"
      }
    ]
  },
  /*{
    label: "Monitor",
    content: [
      {
        icon: "bolt",
        label: "Jobs",
        label: "Sub Menu",
        to: "sub-menu6"
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
        to: "sub-menu7"
      },
      {
        icon: "bolt",
        label: "Jobs",
        label: "Sub Menu",
        to: "sub-menu8"
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
        to: "sub-menu9"
      },
      {
        icon: "bolt",
        label: "Jobs",
        label: "Sub Menu",
        to: "sub-menu10"
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
        to: "sub-menu11"
      },
      {
        icon: "bolt",
        label: "Jobs",
        label: "Sub Menu",
        to: "sub-menu12"
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
        to: "sub-menu13"
      },
      {
        icon: "bolt",
        label: "Jobs",
        label: "Sub Menu",
        to: "sub-menu14"
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
        to: "sub-menu15"
      },
      {
        icon: "bolt",
        label: "Jobs",
        label: "Sub Menu",
        to: "sub-menu16"
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
        to: "sub-menu17"
      },
      {
        icon: "bolt",
        label: "Jobs",
        label: "Sub Menu",
        to: "sub-menu18"
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
        to: "sub-menu19"
      },
      {
        icon: "bolt",
        label: "Jobs",
        label: "Sub Menu",
        to: "sub-menu20"
      }
    ]
  },*/
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
