import React, { Component } from "react";
import Breadcrumb from "../adminPage/Breadcrumb";
import TextInput from "../adminPage/TextInput";
import TextInputArea from "../adminPage/TextInputArea";
//import Button from "./Button";
import { Button, Form } from "react-bootstrap";
import data from "../data.js";
import { Link } from "react-router-dom";

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      title: "",
      category: "",
      description: "",
      price: "",
      photo: "",

      titleError: false,
      categoryError: false,
      descriptionError: false,
      priceError: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    //console.log(value);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  submitFormHandler = (event) => {
    event.preventDefault();
    const newProduct = {
      id: new Date().getTime().toString(),
      title: this.state.title,
      category: this.state.category,
      description: this.state.description,
      price: this.state.price,
      photo: this.state.photo,
    };
    //this.setState([...data, newProduct]);
    data.push(newProduct);
    console.log(newProduct);
  };

  render() {
    const path = [
      {
        title: "Dashboard",
        url: "/vendor-dashboard",
      },
      {
        title: "Form",
        url: "/vendor-add-product",
      },
    ];
    return (
      <div className="main-content-container p-4 container-fluid">
        <Breadcrumb title={"Form"} path={path} />
        <div className="right-panel">
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-header">
                  <strong className="card-title">Add Product</strong>
                </div>
                <div className="card-body">
                  <Form onSubmit={this.submitFormHandler}>
                    <TextInput
                      name="title"
                      value={this.state.title}
                      label="Title"
                      onChange={this.handleChange}
                      error={this.state.titleError}
                      errorText="please Enter Valid Name"
                      inputType="text"
                    />

                    <TextInput
                      name="category"
                      value={this.state.category}
                      label="Category"
                      onChange={this.handleChange}
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
                    <TextInput
                      name="price"
                      value={this.state.price}
                      label="Price"
                      onChange={this.handleChange}
                      inputType="number"
                    />

                    <TextInput
                      name="photo"
                      inputType="file"
                      value={this.state.photo}
                      label="photo"
                      onChange={this.handleChange}
                    />

                    <Link to="/list-product">
                      <Button type="submit">Save</Button>
                    </Link>
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
