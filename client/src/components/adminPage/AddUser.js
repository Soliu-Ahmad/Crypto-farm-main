import React, { Component } from "react";
import Breadcrumb from "./Breadcrumb";
import TextInput from "./TextInput";
import TextInputArea from "./TextInputArea";
import Button from "./Button";
import { Form } from "react-bootstrap";
import api from "../../utils/api";

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      mobile: "",
      password: "",
      passwordRetry: "",
      photoUrl: "",
      address: "",

      nameError: false,
      emailError: false,
      mobileError: false,
      passwordError: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  
  submitFormHandler = async(event) => {
    event.preventDefault();
    if(this.state.password !== this.state.passwordRetry){
      alert("Password not match");
      return false;
    }
    const newUser = {
      lastname: this.state.last_name,
      firstname: this.state.first_name,
      email: this.state.email,
      phoneNumber: this.state.mobile,
      password: this.state.password,
      address: this.state.address,
      photoUrl: this.state.photoUrl,
    };
    
    try{
      const data = await api.post("/admin-users", newUser);
      if(data){
        alert("User added successfully.");
        this.setState({last_name:"", first_name: '', email:"" ,mobile: '', password:"", passwordRetry:"", photoUrl: "", address:""})
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
        url: "/add-user",
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
                  <strong className="card-title">Add User</strong>
                </div>
                <div className="card-body">
                  <Form onSubmit={this.submitFormHandler}>
                    <TextInput
                      name="first_name"
                      value={this.state.first_name}
                      label="First name"
                      onChange={this.handleChange}
                      error={this.state.nameError}
                      errorText="please Enter Valid Name"
                      inputType="text"
                    />

                    <TextInput
                      name="last_name"
                      value={this.state.last_name}
                      label="Last name"
                      onChange={this.handleChange}
                      inputType="text"
                    />

<TextInput
                      name="mobile"
                      inputType="number"
                      value={this.state.mobile}
                      label="Phone number"
                      onChange={this.handleChange}
                    />

                    

                    <TextInputArea
                      name="address"
                      inputType="text"
                      value={this.state.address}
                      label="Address"
                      rows={3}
                      controlFunc={this.handleChange}
                    />

                    <TextInput
                      name="photoUrl"
                      inputType="file"
                      value={this.state.photoUrl}
                      label="photo"
                      onChange={this.handleChange}
                    />

                    <TextInput
                      name="email"
                      value={this.state.email}
                      label="Email"
                      onChange={this.handleChange}
                      inputType="email"
                    />

                    <TextInput
                      name="password"
                      value={this.state.password}
                      label="Password"
                      onChange={this.handleChange}
                      inputType="password"
                    />

                    <TextInput
                      name="passwordRetry"
                      value={this.state.passwordRetry}
                      label="Retry Password"
                      onChange={this.handleChange}
                      inputType="password"
                    />

                    

                    <Button onClick={() => null} type="submit">
                      Save
                    </Button>
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

export default AddUser;
