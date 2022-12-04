import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Breadcrumb from "./Breadcrumb";

import api from "../../utils/api";

//function OrderPage() {
class OrderPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions:[]
    };
    this.getAllTransactions = this.getAllTransactions.bind(this);

    this.getAllTransactions();
  }

  getAllTransactions=async()=>{
    try{
      const transactions = await api.get("/transactions");
      if(transactions){
        this.setState({transactions: transactions});
      }
    }catch(e){
        console.log(e)
    }
  }
  render() {
    const path = [
      {
        title: "Dashboard",
        url: "/dashboard",
      },
      {
        title: "Transactions",
        url: "/transactions",
      },
    ];
    return (
      <div className="main-content-container p-4 container-fluid">
        <Breadcrumb title={"All transactions"} path={path} />
        <div className="orders">
          <div className="row">
            <div className="col-xl-12">
              <div className="card">
                <div className="card-body">
                  <h4 className="box-title">Transactions </h4>
                </div>

                <div className="card-body--">
                  <div className="table-stats order-table ov-h">
                    <table className="table ">
                      <thead>
                        <tr>
                          <th className="serial">#</th>
                          <th className="avatar">Avatar</th>
                          <th>ID</th>
                          <th>Name</th>
                          <th>Product</th>
                          <th>Quantity</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        
                        {this.state.transactions &&
                        this.state.transactions.map((trans, index) => (
                          <tr key={trans.id}>
                            <td>{index+1}</td>
                            <td><div className="round-img">
                                <img
                                  max-width="50px"
                                  height="50px"
                                  className="rounded-square"
                                  src={trans?.product?.photoUrl}
                                  alt=""
                                />
                              </div>
                            </td>
                            <td>{trans?.order_id}</td>
                            <td>{`${trans?.user?.lastname} ${trans?.user?.firstname}`}</td>
                            <td>{trans?.product?.name}</td>
                            <td>{trans?.qty}</td>
                            <td>{trans?.price}</td>
                            
                            <td>
                              {trans.payment_status ? (
                                <span className="badge badge-complete">Complete</span>
                              ):(
                                <span className="badge badge-pending">Pending</span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OrderPage;
