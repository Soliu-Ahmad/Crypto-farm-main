import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Breadcrumb from "./Breadcrumb";
import Card from "./Card";
import { Link } from "react-router-dom";
import { Delete } from "@mui/icons-material";
import {categories, vendors} from "../data.js";

import api from "../../utils/api";

class AllProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      categories:categories,
      vendors: vendors,
    };
    this.deleteProduct = this.deleteProduct.bind(this);
    this.getAllProducts = this.getAllProducts.bind(this);
    this.getCategory = this.getCategory.bind(this);
    this.getVendor = this.getVendor.bind(this);
    this.getAllProducts()
  }

  getAllProducts=async()=>{
    try{
      const products = await api.get("/products");
      if(products){
        this.setState({products: products});
      }
    }catch(e){
        console.log(e)
    }
  }

  deleteProduct = async(id) => {
    const data = this.state.products.filter((prodId) => prodId.id !== id);
    this.setState({ products: data });
    try{
      const products = await api.delete(`/products/${id}`);
      if(products){
        alert("Product deleted successfully.")
      }
    }catch(e){
        console.log(e)
    }
  };

  getCategory(category){
    const categ=this.state.categories.find(cat=>cat.id==category)
    console.log("Categ: ", categ)
    return categ?categ.name:""
  }

  getVendor(vendor){
    const vendr=this.state.vendors.find(vend=>vend.id==vendor)
    console.log("Vend: ",vendr)
    return vendr?vendr.name:""
  }

  render() {
    const path = [
      {
        title: "Dashboard",
        url: "/admin-dashboard",
      },
      {
        title: "Product",
        url: "/list-product",
      },
    ];

    

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
                      <th>Name</th>
                      <th>Category</th>
                      <th>Vendor</th>
                      <th>Qty</th>
                      <th>Price</th>
                      <th>Image</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.products &&
                      this.state.products.map((product) => (
                        <tr key={product.id}>
                          <td>{product.name}</td>
                          <td>{this.getCategory(product.category)}</td>
                          <td>{this.getVendor(product.vendore_id)}</td>
                          <td>{product.available_qty}</td>
                          <td>${product.selling_price}</td>
                          <td>
                            <div className="round-img">
                              <img
                                max-width="50px"
                                height="50px"
                                className="rounded-square"
                                src={product.img}
                                alt=""
                              />
                            </div>
                          </td>
                          <td>
                            <Link to={`/detailed-product/${product.id}`}>
                              <Button>View</Button>
                            </Link>

                            <Delete
                              onClick={() => this.deleteProduct(product.id)}
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
