import React, { Component } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/BaseLayout.css";

export default class BaseLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleClass: "",
    };
  }

  onToggle = () => {
    if (this.state.toggleClass === "active") {
      this.setState({ toggleClass: "" });
    } else {
      this.setState({ toggleClass: "active" });
    }
  };

  render() {
    return (
      <div>
        <Navbar onToggleClick={() => this.onToggle()} />
        <div className="wrapper">
          <div className="sidebar-container">
            <Sidebar toggleClass={this.state.toggleClass} />
          </div>

          <div id="content" className={this.state.toggleClass}>
            <div className="layout-Container">{this.props.children}</div>

            <div className="container-fluid footer-container">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
