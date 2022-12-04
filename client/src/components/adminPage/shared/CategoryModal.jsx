import React, { useState, useEffect } from 'react';
import TextInput from "../TextInput";
import SelectBox from "../SelectBox";
import { Button, Form, Modal } from "react-bootstrap";
import api from "../../../utils/api";

function CategoryModal({showModal}) {
  const [show, setShow] = useState(false);
  const [vendor, setVendor] = useState("");
  const [name, setName] = useState("");
  const [saving, setSavings] = useState(false)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleTextChange=(e)=>{
    setName(e.target.value);
  }

  const handleChange=(e)=>{
    setVendor(e);
  }

  const handleSubmit=async()=>{
    const userDetail={
      name: name,
      vendor: vendor
    }
    try{
        const data=await api.post("/categors", userDetail);
        if(data.status){
          setSavings(!saving);
        }
    }catch(e){
        console.log(e)
    }
  }

  useEffect(()=>{
    console.log("Modal: ",show, "showModal:", showModal)
    handleShow()
  }, [showModal])
  

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <SelectBox
              name="vendor"
              value={vendor}
              label="Vendor"
              onChange={handleChange}
            />

            <TextInput
              name="name"
              value={name}
              label="Name"
              onChange={handleTextChange}
              inputType="text"
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSubmit}>Add Category</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CategoryModal;