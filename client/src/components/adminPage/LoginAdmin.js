import React, {useState, useEffect} from "react";
import "./styles/Login.css";
import { Link } from "react-router-dom";
import {storeAuthToken} from "../../utils/authToken";
import { useHistory } from "react-router-dom";


import api from "../../utils/api";

function LoginAdmin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const loginUser= async()=>{
    const userLoginInitials={
        email:email,
        password:password
    }
    try{
        const data=await api.post("/admin-users/login", userLoginInitials);
        if(data && data.status==false){
          alert(data.message)
          return false
        }
        
        storeAuthToken(data.password)
        localStorage.setItem("userAdminDetail", JSON.stringify(data));
        const currentPage=localStorage.getItem("currentPage")
        history.push("/admin-dashboard")
    }catch(e){
        console.log(e)
    }
}

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card my-5">
            <form className="card-body cardbody-color p-lg-5">
              <div className="text-center">
                <img
                  src="/images/account.svg"
                  className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                  width="200px"
                  alt="profile"
                />
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="Username"
                  aria-describedby="emailHelp"
                  placeholder="User Name"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="password"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                />
              </div>
              <div className="text-center">
                  <button
                    type="button"
                    className="btn btn-color px-5 mb-5 w-100"
                    onClick={loginUser}
                  >
                    Login
                  </button>
              </div>
              <div
                id="emailHelp"
                className="form-text text-center mb-5 text-dark"
              >
                Not Registered?{" "}
                <a href="/admin-register" className="text-dark fw-bold">
                  {" "}
                  Create an Account
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginAdmin;
