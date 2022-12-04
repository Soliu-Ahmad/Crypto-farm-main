import React from "react";
import Breadcrumb from "./Breadcrumb";
import Card from "./Card";

function UserDetail() {
  const path = [
    {
      title: "Dashboard",
      url: "/dashboard",
    },
    {
      title: "Form",
      url: "/user-detail",
    },
  ];
  return (
    <div className="main-content-container p-4 container-fluid">
      <Breadcrumb title={"User Detail"} path={path} />
      <div className="right-panel"></div>
      <div class="row">
        <div class="col-lg-12">
          <Card>hello</Card>
        </div>
      </div>
    </div>
  );
}

export default UserDetail;
