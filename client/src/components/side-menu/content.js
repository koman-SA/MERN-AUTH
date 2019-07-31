import React, { Component } from "react";
import {  BrowserRouter as Router, Route , Link } from "react-router-dom";
// import React, { Component } from "react";
// import ReactDOM, {Link} from "react-dom";
import { hashHistory } from "react-dom";
// import MetisMenu from "react-metismenu";
// import RouterLink from "react-metismenu-router-link";

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
    icon: "dashboard",
    label: "Menu 1",
    to: "menu-1"
  },
  {
    icon: "bell",
    label: "Menu 2",
    to: "menu-2"
  },
  {
    icon: "bolt",
    label: "Menu 3",
    content: [
      {
        icon: "bolt",
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
// const App = props => (
//   <div>
//     <MetisMenu content={menu} LinkComponent={RouterLink} />
//     <h2>Page Content</h2>
//     {props.children || "Greeter Page"}
//   </div>
// );

// class Sidemenu extends Component {
//   render() {
//     // return (
//     //     <div>
//     //     <Router history={hashHistory}>
//     //       <Route path="../../App" component={App}>
//     //         <Route path="menu-1" component={Menu1} />
//     //         <Route path="menu-2" component={Menu2} />
//     //         <Route path="sub-menu" component={SubMenu} />
//     //       </Route>
//     //     </Router>
//     //     </div>
//     // );
//     return (
//       <div className="navbar-fixed">
//         <nav className="z-depth-0">
//           <div className="nav-wrapper white">
//             <Link
//               to="/"
//               style={{
//                 fontFamily: "monospace"
//               }}
//               className="col s5 brand-logo center black-text"
//             >
//               <i className="material-icons">code</i>
//               Converged Portal
//             </Link>
//           </div>
//         </nav>
//       </div>
//     );
//   }
// }
// export default Sidemenu;
class Navbar extends Component {
  render() {
    return (
      <div>
        testing
        <Router history={hashHistory}>
          <Route path="menu-1" component={Menu1} />
          <Route path="menu-2" component={Menu2} />
          <Route path="sub-menu" component={SubMenu} />
        </Router>
        </div>
    );
  }
}
export default Navbar;
