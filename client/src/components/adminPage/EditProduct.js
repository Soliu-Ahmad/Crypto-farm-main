/*
 **Author: Santosh Kumar Dash
 **Author URL: http://santoshdash.epizy.com/
 **Github URL: https://github.com/quintuslabs/dashio-admin
 */

import React, { useState, useEffect } from "react";
import Breadcrumb from "./Breadcrumb";
import TextInput from "./TextInput";
import Button from "./Button";
import { Form } from "react-bootstrap";
import TextInputArea from "./TextInputArea";
import data from "../data.js";
import { useParams, Link } from "react-router-dom";

function EditProduct() {
  /*constructor(props) {
    super(props);
    this.state = {
      product: data,
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
  }*/

  const { id } = useParams();
  //const [listData, setListData] = useState();
  const [titleInput, setTitleInput] = useState("");
  const [categoryInput, setCategoryInput] = useState("");
  const [descInput, setDescInput] = useState("");
  const [priceInput, setPriceInput] = useState("");

  useEffect(() => {
    productId();
  }, [id]);

  function handleChangeTitle(e) {
    setTitleInput(e.target.value);
  }

  function handleChangeCategory(e) {
    setCategoryInput(e.target.value);
    console.log(e.target.value);
  }

  function handleChangeDesc(e) {
    setDescInput(e.target.value);
  }

  function handleChangePrice(e) {
    setPriceInput(e.target.value);
  }

  function productId() {
    const vv = data.find((prodId) => String(prodId.id) === id);
    setTitleInput(vv.title);
    setCategoryInput(vv.category);
    setDescInput(vv.desc);
    setPriceInput(vv.price);
  }

  /*function handleSubmit(e) {
    e.preventDefault();
  }*/

  const submitFormHandler = (event) => {
    event.preventDefault();
    data.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          title: titleInput,
          category: categoryInput,
          desc: descInput,
          price: priceInput,
        };
      }
      console.log(item);
      return item;
    });
  };

  const path = [
    {
      title: "Dashboard",
      url: "/dashboard",
    },
    {
      title: "Form",
      url: "/form",
    },
  ];
  return (
    <div className="main-content-container p-4 container-fluid">
      <Breadcrumb title={"Edit Product"} path={path} />
      <div className="right-panel">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header">
                <strong className="card-title">Edit Product</strong>
              </div>
              <div className="card-body">
                <Form onSubmit={submitFormHandler}>
                  <TextInput
                    name="title"
                    value={titleInput}
                    label="Title"
                    onChange={handleChangeTitle}
                    inputType="text"
                  />

                  <TextInput
                    name="category"
                    value={categoryInput}
                    label="Category"
                    onChange={handleChangeCategory}
                    inputType="text"
                  />
                  <TextInputArea
                    name="desc"
                    inputType="text"
                    value={descInput}
                    label="Description"
                    rows={3}
                    controlFunc={handleChangeDesc}
                  />
                  <TextInput
                    name="price"
                    value={String(priceInput)}
                    label="Price"
                    onChange={handleChangePrice}
                    inputType="text"
                  />

                  <Link to="/list-product">
                    <Button onClick={() => null} type="submit">
                      Save
                    </Button>
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

export default EditProduct;
