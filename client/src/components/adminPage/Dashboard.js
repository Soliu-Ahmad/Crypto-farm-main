/*
 **Author: Santosh Kumar Dash
 **Author URL: http://santoshdash.epizy.com/
 **Github URL: https://github.com/quintuslabs/dashio-admin
 */
import {
  AccountBoxSharp,
  CreditCard,
  MonetizationOn,
  ShoppingBag,
} from "@mui/icons-material";
import React, { Component } from "react";
import Card from "./Card";
import CardBody from "./CardBody";
import ChartSection from "./ChartSection";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.isUserLoggedIn = this.isUserLoggedIn.bind(this);

    this.isUserLoggedIn();
  }

  isUserLoggedIn(){
    const user=localStorage.getItem("userAdminDetail");
    if(!user){
      this.props.history.push("admin-login")
    }
  }
  render() {
    return (
      <div className="main-content-container p-4 container-fluid">
        <div className="right-panel">
          <div className="row-layout">
            <Card borderRadius="5px">
              <CardBody>
                <div className="stat-widget-five">
                  <div className="stat-icon dib flat-color-1">
                    <AccountBoxSharp
                      style={{ height: "50px", width: "50px", color: "blue" }}
                    />
                  </div>
                  <div className="stat-content">
                    <div className="text-left dib">
                      <div className="stat-text">
                        <span className="count">23569</span>
                      </div>
                      <div className="stat-heading">Total User</div>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>

            <Card borderRadius="5px">
              <CardBody>
                <div className="stat-widget-five">
                  <div className="stat-icon dib flat-color-1">
                    <MonetizationOn
                      style={{ height: "50px", width: "50px" }}
                    />
                  </div>
                  <div className="stat-content">
                    <div className="text-left dib">
                      <div className="stat-text">
                        $<span className="count">3435</span>
                      </div>
                      <div className="stat-heading">Total Sales</div>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
            
            <Card borderRadius="5px">
              <CardBody>
                <div className="stat-widget-five">
                  <div className="stat-icon dib flat-color-1">
                    <ShoppingBag
                      style={{
                        height: "50px",
                        width: "50px",
                        color: "purple",
                      }}
                    />
                  </div>
                  <div className="stat-content">
                    <div className="text-left dib">
                      <div className="stat-text">
                        $<span className="count">3435</span>
                      </div>
                      <div className="stat-heading">Total Products</div>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
            
            <Card borderRadius="5px">
              <CardBody>
                <div className="stat-widget-five">
                  <div className="stat-icon dib flat-color-1">
                    <CreditCard
                      style={{
                        height: "50px",
                        width: "50px",
                        color: "orange",
                      }}
                    />
                  </div>
                  <div className="stat-content">
                    <div className="text-left dib">
                      <div className="stat-text">
                        $<span className="count">3435</span>
                      </div>
                      <div className="stat-heading">Total Orders</div>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>

          </div>
          <ChartSection />
        </div>
      </div>
    );
  }
}

export default Dashboard;

