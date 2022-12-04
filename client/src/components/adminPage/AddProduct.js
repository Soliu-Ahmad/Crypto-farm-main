import React, { Component } from "react";
import Breadcrumb from "./Breadcrumb";
import TextInput from "./TextInput";
import SelectBox from "./SelectBox";
import TextInputArea from "./TextInputArea";
import CategoryModal from "./shared/CategoryModal";
import { Button, Form } from "react-bootstrap";
import {categories, vendors} from "../data.js";
import { Link } from "react-router-dom";

import api from "../../utils/api";

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: categories,

      vendors: vendors,

      vendor: "",
      name: "",
      category: "",
      description: "",
      price: "",
      photo: "",
      available_qty: 0,
      purcahse_qty: 0,

      nameError: false,
      categoryError: false,
      descriptionError: false,
      priceError: false,
      addCategory: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getCategory=this.getCategory.bind(this)
    //this.getCategory()
  }

  handleChange=(e)=> {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    //console.log(value);
  }

  openModal = () => {
    this.props.history.push("admin-add-category")
  };

  handleSelectCategory=(value)=>{
    //const { value } = e.target;
    this.setState({category:value[0].id});
  }

  handleVendorCategory=(value)=>{
    //const { value } = e.target;
    this.setState({category:value[0].id});
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  getCategory = async()=>{
    try{
      const categories = await api.get("/categorys");
      if(categories){
          this.setState({categories:categories});
      }
    }catch(e){
        console.log(e)
    }
  }

  submitFormHandler = async(event) => {
    event.preventDefault();
    const newProduct = {
      vendore_id: this.state.vendor,
      sku: new Date().getTime().toString(),
      name: this.state.name,
      category: this.state.category,
      description: this.state.description,
      available_qty: this.state.available_qty,
      purcahse_qty: this.state.purcahse_qty,
      selling_price: this.state.price,
      photo: this.state.photo,
    };
    //this.setState([...data, newProduct]);
    try{
      const data = await api.post("/products", newProduct);
      if(data){
        alert("Product added successfully.");
        this.setState({vendor_id:0, name: '', category:0,description: '', available_qty:0, purcahse_qty: 0, price:0.0, photo:''})
      }
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
        <Breadcrumb title={"Add product"} path={path} />
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
                      label="Vendor"
                      options={this.state.vendors}
                      onChange={this.handleVendorCategory}
                    />

                    <div class="group-container">
                      <SelectBox
                        name="category"
                        valueField="id"
                        labelField="name"
                        label="Category"
                        options={this.state.categories}
                        onChange={this.handleSelectCategory}
                      />
                      <button type="button" class="add" onClick={this.openModal}>+</button>
                    </div>

                    <TextInput
                      name="name"
                      value={this.state.name}
                      label="Name"
                      onChange={this.handleChange}
                      error={this.state.nameError}
                      errorText="please Enter Valid Name"
                      inputType="text"
                    />

                    <TextInputArea
                      name="description"
                      inputType="text"
                      value={this.state.description}
                      label="Description"
                      rows={3}
                      controlFunc={this.handleChange}
                    />
                    <div class="row">
                      <div class="col-md-4">
                        <TextInput
                          name="available_qty"
                          value={this.state.available_qty}
                          label="Qty"
                          onChange={this.handleChange}
                          inputType="number"
                        />
                      </div>
                      <div class="col-md-4">
                        <TextInput
                          name="purcahse_qty"
                          value={this.state.purcahse_qty}
                          label="Supplied Qty"
                          onChange={this.handleChange}
                          inputType="number"
                        />
                      </div>
                      <div class="col-md-4">
                        <TextInput
                          name="price"
                          value={this.state.price}
                          label="Price"
                          onChange={this.handleChange}
                          inputType="number"
                        />
                      </div>
                      
                    </div>
                    
                    

                    <TextInput
                      name="photo"
                      inputType="file"
                      value={this.state.photo}
                      label="photo"
                      onChange={this.handleChange}
                    />

                    <Button type="submit">Save</Button>
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
