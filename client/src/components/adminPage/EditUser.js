import React, { Component } from "react";
import Breadcrumb from "./Breadcrumb";
import TextInput from "./TextInput";
import TextInputArea from "./TextInputArea";
import Button from "./Button";
import { Form } from "react-bootstrap";

class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      mobile: "",
      password: "",

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

  submitFormHandler = (event) => {
    event.preventDefault();
  };

  render() {
    const path = [
      {
        title: "Dashboard",
        url: "/dashboard",
      },
      {
        title: "Form",
        url: "/edit-user",
      },
    ];
    return (
      <div className="main-content-container p-4 container-fluid">
        <Breadcrumb title={"Form"} path={path} />
        <div className="right-panel">
          <div className="row">
            <div className="col-sm-12">
              <div class="card">
                <div class="card-header">
                  <strong class="card-title">Edit User</strong>
                </div>
                <div class="card-body">
                  <Form onSubmit={this.submitFormHandler}>
                    <TextInput
                      name="firstname"
                      value={this.state.first_name}
                      label="First name"
                      onChange={this.handleChange}
                      error={this.state.nameError}
                      errorText="please Enter Valid Name"
                      inputType="text"
                    />

                    <TextInput
                      name="lastname"
                      value={this.state.last_name}
                      label="Last name"
                      onChange={this.handleChange}
                      inputType="text"
                    />

                    <TextInput
                      name="email"
                      value={this.state.mobile}
                      label="email"
                      onChange={this.handleChange}
                      inputType="email"
                    />

                    <TextInput
                      name="password"
                      value={this.state.mobile}
                      label="Password"
                      onChange={this.handleChange}
                      inputType="password"
                    />

                    <TextInput
                      name="password"
                      value={this.state.mobile}
                      label="Retry Password"
                      onChange={this.handleChange}
                      inputType="password"
                    />

                    <TextInput
                      name="phonenumber"
                      inputType="number"
                      value={this.state.password}
                      label="Phone number"
                      onChange={this.handleChange}
                    />

                    <TextInput
                      name="file"
                      inputType="file"
                      value={this.state.password}
                      label="photo"
                      onChange={this.handleChange}
                    />

                    <TextInputArea
                      name="address"
                      inputType="text"
                      value={this.state.email}
                      label="Address"
                      rows={3}
                      controlFunc={this.handleChange}
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

export default EditUser;
