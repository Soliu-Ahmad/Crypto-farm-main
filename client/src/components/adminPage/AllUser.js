import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Breadcrumb from "./Breadcrumb";
import Card from "./Card";
import { Link } from "react-router-dom";
import { Delete } from "@mui/icons-material";

import api from "../../utils/api";

class AllUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users:[]
    };
    this.getAllUsers = this.getAllUsers.bind(this);
    this.deleteUser = this.deleteUser.bind(this);

    this.getAllUsers();
  }

  getAllUsers=async()=>{
    try{
      const users = await api.get("/admin-users");
      if(users){
        this.setState({users: users});
      }
    }catch(e){
        console.log(e)
    }
  }

  deleteUser = async(id) => {
    const data = this.state.users.filter((user) => user.id !== id);
    this.setState({ users: data });
    try{
      const user = await api.delete(`/admin-users/${id}`);
      if(user){
        alert("User deleted successfully.")
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
        title: "Table",
        url: "/all-users",
      },
    ];
    return (
      <div className="main-content-container p-4 container-fluid">
        <Breadcrumb title={"All Users"} path={path} />
        <div className="right-panel">
          <div className="row">
            <div className="col-lg-12">
              <Card>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Last name</th>
                      <th>First name</th>
                      <th>Email</th>
                      <th>Phone No</th>
                      <th>Image</th>
                    </tr>
                  </thead>
                  <tbody>
                  {this.state.users &&
                      this.state.users.map((user) => (
                        <tr key={user.id}>
                          <td>{user.lastname}</td>
                          <td>{user.firstname}</td>
                          <td>{user.email}</td>
                          <td>{user.phoneNumber}</td>
                          <td>
                            <div className="round-img">
                              <img
                                max-width="50px"
                                height="50px"
                                className="rounded-square"
                                src={user.photoUrl}
                                alt=""
                              />
                            </div>
                          </td>
                          <td>
                            <Link to={`/user-detail/${user.id}`}>
                              <Button>View</Button>
                            </Link>

                            <Delete
                              onClick={() => this.deleteUser(user.id)}
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

export default AllUser;
