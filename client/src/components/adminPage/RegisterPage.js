// import React from "react";
// import "./styles/Login.css";
// import { Link } from "react-router-dom";

// function Register() {
//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-md-6 offset-md-3">
//           <h2 className="text-center text-dark mt-5">Register Form</h2>
//           <div className="card my-5">
//             <form className="card-body cardbody-color p-lg-5">
//               <div className="text-center">
//                 <img
//                   src="/images/account.svg"
//                   className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
//                   width="200px"
//                   alt="profile"
//                 />
//               </div>

//               <div className="mb-3">
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="Username"
//                   aria-describedby="emailHelp"
//                   placeholder="User Name"
//                 />
//               </div>
//               <div className="mb-3">
//                 <input
//                   type="password"
//                   className="form-control"
//                   id="password"
//                   placeholder="password"
//                 />
//               </div>
//               <div style={{ width: "300px", padding: "20px" }}>
//                 <select name="membership" id="membership">
//                   <option value="free" selected>
//                     Register as...
//                   </option>
//                   <option value="free">Admin</option>
//                   <option value="bronze">Vendor</option>
//                 </select>
//               </div>
//               <br />
//               <div className="text-center">
//                 <Link to="/admin-login">
//                   <button
//                     type="submit"
//                     className="btn btn-color px-5 mb-5 w-100"
//                   >
//                     Register
//                   </button>
//                 </Link>
//               </div>
//               <div
//                 id="emailHelp"
//                 className="form-text text-center mb-5 text-dark"
//               >
//                 Already Registered?{" "}
//                 <a href="/admin-login" className="text-dark fw-bold">
//                   {" "}
//                   Login Here
//                 </a>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Register;
