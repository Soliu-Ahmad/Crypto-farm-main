import {
  AddBusiness,
  FeaturedPlayList,
  GroupAdd,
  Home,
  ListAlt,
  ManageAccounts,
} from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import "./styles/Sidebar.css";

function Sidebar(props) {
  const [active, setActive] = useState("");
  //const [dropdownToggle, setDropDownToggle] = useState(false);
  useEffect(() => {
    setActive(props.location.pathname);
  }, [props.location.pathname, active]);

  return (
    <div
      className="sidebar-container border-right main-sidebar"
      id="sticky-sidebar"
    >
      <nav id="sidebar" className={props.toggleClass}>
        <ul className="list-unstyled components">
          <li className={active === "/admin-dashboard" ? "active" : null}>
            <a href="/admin-dashboard">
              <div className="menu-icon">
                <Home />
              </div>
              <span className="menu-title">Dashboard</span>
            </a>
          </li>

          {/* <li className={active === "/widgets" ? "active" : null}>
             <a href="/widgets">
               <div className="menu-icon">
                 <i className="fa fa-th-large nav_icon" aria-hidden="true"></i>
               </div>
               <span className="menu-title">Widgets</span>
             </a>
           </li> */}

          <li className={active === "/add-product" ? "active" : null}>
            <Link to="/add-product">
              <div className="menu-icon">
                <AddBusiness />
              </div>
              <span className="menu-title">Add Products</span>
            </Link>
          </li>

          <li className={active === "/list-product" ? "active" : null}>
            <Link to="/list-product">
              <div className="menu-icon">
                <FeaturedPlayList />
              </div>
              <span className="menu-title">List of Product</span>
            </Link>
          </li>

          <li className={active === "/add-user" ? "active" : null}>
            <Link to="/add-user">
              <div className="menu-icon">
                <GroupAdd />
              </div>
              <span className="menu-title">Add User</span>
            </Link>
          </li>

          <li className={active === "/list-category" ? "active" : null}>
            <Link to="/all-users">
              <div className="menu-icon">
                <ManageAccounts />
              </div>
              <span className="menu-title">List of Users</span>
            </Link>
          </li>

          <li className={active === "/list-category" ? "active" : null}>
            <Link to="/order-page">
              <div className="menu-icon">
                <ListAlt />
              </div>
              <span className="menu-title">Orders</span>
            </Link>
          </li>
        </ul>

        {/* <ul className="list-unstyled CTAs">
               <li>
                 <a
                   href="https://bootstrapious.com/tutorial/files/sidebar.zip"
                   className="download"
                 >
                   Download source
                 </a>
               </li>
               <li>
                 <a
                   href="https://bootstrapious.com/p/bootstrap-sidebar"
                   className="article"
                 >
                   Back to article
                 </a>
               </li>
       </ul> */}
      </nav>
    </div>
  );
}

export default withRouter(Sidebar);
