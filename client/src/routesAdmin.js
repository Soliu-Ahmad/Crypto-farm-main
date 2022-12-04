import AddProduct from "./components/adminPage/AddProduct";
import BaseLayout from "./components/adminPage/BaseLayout.js";
import Dashboard from "./components/adminPage/Dashboard";
import AllProduct from "./components/adminPage/AllProduct";
import EditProduct from "./components/adminPage/EditProduct";
import ProductDetail from "./components/adminPage/ProductDetail";
import AddUser from "./components/adminPage/AddUser";
import AllUser from "./components/adminPage/AllUser";
import EditUser from "./components/adminPage/EditUser";
import UserDetail from "./components/adminPage/UserDetail";
import OrderPage from "./components/adminPage/OrderPage.js";
import AddCategory from "./components/adminPage/AddCategory";

var routesAdmin = [
  
  {
    path: "/admin-dashboard",
    layout: BaseLayout,
    component: Dashboard,
  },

  {
    path: "/admin-add-category",
    layout: BaseLayout,
    component: AddCategory,
  },

  {
    path: "/add-product",
    layout: BaseLayout,
    component: AddProduct,
  },
  {
    path: "/edit-product/:id",
    layout: BaseLayout,
    component: EditProduct,
  },
  {
    path: "/list-product",
    layout: BaseLayout,
    component: AllProduct,
  },

  {
    path: "/detailed-product/:id",
    layout: BaseLayout,
    component: ProductDetail,
  },

  {
    path: "/add-user",
    layout: BaseLayout,
    component: AddUser,
  },

  {
    path: "/all-users",
    layout: BaseLayout,
    component: AllUser,
  },

  {
    path: "/edit-user",
    layout: BaseLayout,
    component: EditUser,
  },

  {
    path: "/user-detail",
    layout: BaseLayout,
    component: UserDetail,
  },

  {
    path: "/order-page",
    layout: BaseLayout,
    component: OrderPage,
  },
];

export default routesAdmin;
