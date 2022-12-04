import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Breadcrumb from "./Breadcrumb";
import Card from "./Card";
import CardBody from "./CardBody";
import CardHeader from "./CardHeader";
import { useParams } from "react-router-dom";
import {categories, vendors} from "../data.js";
import { Link } from "react-router-dom";

import api from "../../utils/api";

function ProductDetail() {
  const { id } = useParams();
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

  
  const [uniqueData, setUniqueData] = useState(null);

  const getCategory=(category)=>{
    const categ=categories.find(cat=>cat.id==category)
    return categ?categ.name:""
  }

  const getVendor=(vendor)=>{
    const vendr=vendors.find(vend=>vend.id==vendor)
    return vendr?vendr.name:""
  }

  const productId = async() => {
    try{
      const product = await api.get(`/products/${id}`);
      if(product){
        setUniqueData(product);
      }
    }catch(e){
        console.log(e)
    }
  };

  // eslint-disable-next-line
  useEffect(() => {
    productId();
  }, [id]);

  return (
    <div className="main-content-container p-4 container-fluid">
      <Breadcrumb title={"Product Detail"} path={path} />
      <div className="right-panel"></div>
      <div className="row">
        <div className="col-lg-6">
          <Card>
            <CardHeader>Product Details</CardHeader>
            <CardBody>
              <p>
                <span style={{ fontWeight: "bold" }}>Name: </span>
                {uniqueData && uniqueData.name}
              </p>
              <p>
                <span style={{ fontWeight: "bold" }}>Category: </span>
                {uniqueData && getCategory(uniqueData.category)}
              </p>
              <p>
                <span style={{ fontWeight: "bold" }}>Vendor: </span>
                {uniqueData && getVendor(uniqueData.vendore_id)}
              </p>
              <p>
                <span style={{ fontWeight: "bold" }}>Description: </span>
                {uniqueData && uniqueData.description}
              </p>
              <p>
                <span style={{ fontWeight: "bold" }}>Price: </span>
                {uniqueData && uniqueData.selling_price}
              </p>
              <Link to={`/edit-product/${uniqueData && uniqueData.id}`}>
                <Button>Edit</Button>
              </Link>
            </CardBody>
          </Card>
        </div>
        <div className="col-lg-6">
          <Card>
            <CardBody>
              <img
                src={uniqueData && uniqueData.img}
                width="100%"
                height="250px"
                alt=""
              />
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
