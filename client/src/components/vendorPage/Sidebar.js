import { AddBusiness, FeaturedPlayList, Home } from "@mui/icons-material";
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
          <li className={active === "/vendor-dashboard" ? "active" : null}>
            <a href="/vendor-dashboard">
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

          <li className={active === "/vendor-add-product" ? "active" : null}>
            <Link to="/vendor-add-product">
              <div className="menu-icon">
                <AddBusiness />
              </div>
              <span className="menu-title">Add Products</span>
            </Link>
          </li>

          <li className={active === "/vendor-list-product" ? "active" : null}>
            <Link to="/vendor-list-product">
              <div className="menu-icon">
                <FeaturedPlayList />
              </div>
              <span className="menu-title">List of Product</span>
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
