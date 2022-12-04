import Header from "./components/Header";
import Home from "./components/Home";
import Register from "./components/Register"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ForgotPass from "./components/ForgotPass";
import Products from "./components/Products";
import Cart from "./components/Cart"
import Shipping from "./components/Shipping";
import PaymentInfo from "./components/PaymentInfo";
import CardInfo from './components/CardInfo'
import CryptoPay from "./components/CryptoPay";
import Profile from "./components/Profile";
import EditProfile from "./components/EditProfile";
import ShoppingInterest from "./components/ShoppingInterest";
import Orderf from "./components/Order";
import ProductDetail from "./components/ProductDetail";
import routesAdmin from "./routesAdmin.js";
import routesVendor from "./routesVendor";
import Login from "./components/Login";
import LoginAdmin from "./components/adminPage/LoginAdmin";
import RegisterPage from "./components/adminPage/RegisterPage";
import PaymentForm from "./components/userPage/payments/PaymentForm";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/styles";
import CashOnDelivery from "./components/userPage/payments/CashOnDelivery";
import {store} from "./store"
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";



function App() {
  const theme = createTheme();
  let persistor = persistStore(store);
  return (
      <Provider  store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <div className="App">
              <Router>
                <Switch>
                  <Route exact path="/">
                    <Header />
                    <Home />
                  </Route>

                  <Route path="/register">
                    <Header />
                    <Register />
                  </Route>
                  <Route path="/login">
                    <Header />
                    <Login />
                  </Route>

                  <Route path="/forgot-password">
                    <Header />
                    <ForgotPass />
                  </Route>

                  <Route path="/products">
                    <Header />
                    <Products />
                  </Route>

                  <Route path="/carts">
                    <Header />
                    <Cart />
                  </Route>

                  <Route path="/shipping">
                    <Header />
                    <Shipping />
                  </Route>

                  <Route path="/payment-info">
                    <Header />
                    <PaymentInfo />
                  </Route>

                  <Route path="/payment-form">
                    <Header />
                    <PaymentForm />
                  </Route>

                  <Route path="/card-info">
                    <Header />
                    <CardInfo />
                  </Route>

                  <Route path="/cod">
                    <Header />
                    <CashOnDelivery />
                  </Route>

                  <Route path="/crypto-pay">
                    <Header />
                    <CryptoPay />
                  </Route>

                  <Route path="/profile">
                    <Header />
                    <Profile />
                  </Route>

                  <Route path="/edit-profile">
                    <Header />
                    <EditProfile />
                  </Route>
                  <Route path="/shopping-interest">
                    <Header />
                    <ShoppingInterest />
                  </Route>

                  <Route path="/order">
                    <Header />
                    <Orderf />
                  </Route>

                  <Route path="/product-detail/:id">
                    <Header />
                    <ProductDetail />
                  </Route>

                  <Route path="/admin-login">
                    <LoginAdmin />
                  </Route>

                  <Route path="/admin-register">
                    <RegisterPage />
                  </Route>

                  {routesAdmin.map((route, index) => {
                    return (
                      <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={(props) => {
                          return (
                            <route.layout {...props}>
                              <route.component {...props} />
                            </route.layout>
                          );
                        }}
                      />
                    );
                  })}

                  {routesVendor.map((route, index) => {
                    return (
                      <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={(props) => {
                          return (
                            <route.layout {...props}>
                              <route.component {...props} />
                            </route.layout>
                          );
                        }}
                      />
                    );
                  })}
                </Switch>
              </Router>
            </div>   
          </ThemeProvider>
            
        </PersistGate>
      </Provider>
  );
}

export default App;
