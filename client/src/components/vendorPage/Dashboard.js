/*
 **Author: Santosh Kumar Dash
 **Author URL: http://santoshdash.epizy.com/
 **Github URL: https://github.com/quintuslabs/dashio-admin
 */
import { AccountBoxSharp, ShoppingBag } from "@mui/icons-material";
import React, { Component } from "react";
import Card from "../adminPage/Card";
import CardBody from "../adminPage/CardBody";
import ChartSection from "../adminPage/ChartSection";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="main-content-container p-4 container-fluid">
        <div className="right-panel">
          <div className="row">
            <div className="col-lg-6">
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
                        <div className="stat-heading">Total Sales</div>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>

            <div className="col-lg-6">
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
            </div>
          </div>
          <ChartSection />
        </div>
      </div>
    );
  }
}

export default Dashboard;
