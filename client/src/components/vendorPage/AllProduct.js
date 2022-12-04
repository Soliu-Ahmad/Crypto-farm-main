import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Breadcrumb from "../adminPage/Breadcrumb";
import Card from "../adminPage/Card";
import { Link } from "react-router-dom";
import { Delete } from "@mui/icons-material";
import data from "../data.js";

class AllProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: data,
    };
    //this.deleteProduct = this.deleteProduct.bind(this);
  }

  render() {
    const path = [
      {
        title: "Dashboard",
        url: "/vendor-dashboard",
      },
      {
        title: "Product",
        url: "/list-product",
      },
    ];

    const deleteProduct = (id) => {
      const data = this.state.product.filter((prodId) => prodId.id !== id);
      this.setState({ product: data });
    };

    return (
      <div className="main-content-container p-4 container-fluid">
        <Breadcrumb title={"All Products"} path={path} />
        <div className="right-panel">
          <div className="row">
            <div className="col-lg-12">
              <Card>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Category</th>
                      <th>Price</th>
                      <th>Image</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.product &&
                      this.state.product.map((prod) => (
                        <tr key={prod.id}>
                          <td>{prod.title}</td>
                          <td>{prod.category}</td>
                          <td>${prod.price}</td>
                          <td>
                            <div className="round-img">
                              <img
                                max-width="50px"
                                height="50px"
                                className="rounded-square"
                                src={prod.img}
                                alt=""
                              />
                            </div>
                          </td>
                          <td>
                            <Link to={`/detailed-product/${prod.id}`}>
                              <Button>View</Button>
                            </Link>

                            <Delete
                              onClick={() => deleteProduct(prod.id)}
                              style={{ color: "red", marginLeft: "20px" }}
                            />
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AllProduct;
