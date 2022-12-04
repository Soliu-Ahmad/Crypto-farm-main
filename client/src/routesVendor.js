import AddProduct from "./components/vendorPage/AddProduct";
import BaseLayout from "./components/vendorPage/BaseLayout.js";
import Dashboard from "./components/vendorPage/Dashboard";
import AllProduct from "./components/vendorPage/AllProduct";
import EditProduct from "./components/adminPage/EditProduct";
import ProductDetail from "./components/adminPage/ProductDetail";

var routesVendor = [
  {
    path: "/vendor-dashboard",
    layout: BaseLayout,
    component: Dashboard,
  },

  {
    path: "/vendor-add-product",
    layout: BaseLayout,
    component: AddProduct,
  },
  {
    path: "/edit-product/:id",
    layout: BaseLayout,
    component: EditProduct,
  },
  {
    path: "/vendor-list-product",
    layout: BaseLayout,
    component: AllProduct,
  },

  {
    path: "/detailed-product/:id",
    layout: BaseLayout,
    component: ProductDetail,
  },
];

export default routesVendor;
