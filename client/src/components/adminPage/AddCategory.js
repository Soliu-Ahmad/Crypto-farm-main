import React, { Component } from "react";
import Breadcrumb from "./Breadcrumb";
import TextInput from "./TextInput";
import SelectBox from "./SelectBox";
import TextInputArea from "./TextInputArea";
import CategoryModal from "./shared/CategoryModal";
import { Button, Form } from "react-bootstrap";
import data from "../data.js";
import { Link } from "react-router-dom";

import api from "../../utils/api";

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vendors: [
        {id: 1, name: 'FoodnLunch'},
        {id: 2, name: 'Portofino'},
        {id: 3, name: 'Pounded Yam village'}
      ],

      name: "",
      vendor: "",

      nameError: false,
      addVendor: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getVendors=this.getVendors.bind(this)
    //this.getVendors()
  }

  handleChange(e) {
    
    console.log("selected value: ", e);
  }

  handleSelectCategory(e){
    const { value } = e.target;
    this.setState({vendor:value});
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  async getVendors(){
    try{
      const vendors = await api.get("/vendors");
      if(vendors){
          this.setState({vendors:vendors});
      }
    }catch(e){
        console.log(e)
    }
  }

  submitFormHandler = async(event) => {
    event.preventDefault();
    const userDetail={
        name: this.state.name,
        vendor: this.state.vendor
      }
      try{
          const data=await api.post("/categors", userDetail);
          
      }catch(e){
          console.log(e)
      }
  };

  

  render() {
    const path = [
      {
        title: "Dashboard",
        url: "/dashboard",
      },
      {
        title: "Form",
        url: "/add-product",
      },
    ];
    return (
      <div className="main-content-container p-4 container-fluid">
        <Breadcrumb title={"Add category"} path={path} />
        <div className="right-panel">
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-header">
                  <strong className="card-title">Add Product</strong>
                </div>
                <div className="card-body">
                  <Form onSubmit={this.submitFormHandler}>
                    <SelectBox
                    name="vendor"
                    valueField="id"
                    labelField="name"
                    value={this.state.vendor}
                    label="Vendor"
                    options={this.state.vendors}
                    onChange={this.handleChange}
                    />

                    <TextInput
                    name="name"
                    value={this.state.name}
                    label="Name"
                    onChange={this.handleTextChange}
                    inputType="text"
                    />

                    <Button type="submit">Add</Button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddProduct;
