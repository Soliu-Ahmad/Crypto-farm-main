import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./styles/payment.css";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import {setCarts} from "../../../store/actions/cartAction"

import api from "../../../utils/api";

function PaymentForm() {
  const [userDetail, setUserDetail] = useState({})
  const [transaction, setTransaction] = useState(JSON.parse(localStorage.getItem("transactions")))
  const [config, setConfig] = useState({})
  const carts = useSelector((store) => store.carts);
  let userDetails=localStorage.getItem("userDetail");
  
  
  const dispatch = useDispatch();
  const history = useHistory();

  const qty=carts.reduce((qty, obj) => obj.qty + qty,0);
  const amount=carts.reduce((price, obj) => (obj.selling_price * obj.qty) + price,0);

  const handleFlutterPayment = useFlutterwave({
    public_key: 'FLWPUBK_TEST-SANDBOXDEMOKEY-X',
    tx_ref: Date.now(),
    amount: amount,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: `${userDetail.email}`,
      phone_number: userDetail.mobile || '08065627281',
      name: `${userDetail.lastname} ${userDetail.firstname}`,
    },
    customizations: {
      title: 'Crypto Farm',
      description: 'Payment for items',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  });

  const processPayment=async(response)=>{
    
    try{
      const data=await api.post(`/transactions/payment/${transaction.id}`, response);
      if(data){
        localStorage.removeItem("transactions");
        dispatch(setCarts([]))
        history.push("/receipt")
      }else{
          alert(data.message)
      }
    }catch(e){
        console.log(e)
    }
  }
  

  useEffect(()=>{
    userDetails=localStorage.getItem("userDetail");
    setUserDetail(JSON.parse(userDetails))
    if(!userDetails){
      localStorage.setItem("currentPage", window.location)
      history.push("/login")
    }
  }, [userDetails])

  return (
    <>
      <div class="container mt-5 p-3 rounded cart">
        <div class="row no-gutters">
          <div class="col-md-8">
            <div class="product-details mr-2">
              <div class="d-flex flex-row align-items-center">
                <i class="fa fa-long-arrow-left"></i>
                <span class="ml-2">Continue Shopping</span>
              </div>
              <hr />
              <h6 class="mb-0">Shopping cart</h6>
              <div class="d-flex justify-content-between">
                <span>You have {carts.length} items in your cart</span>
                <div class="d-flex flex-row align-items-center">
                  <span class="text-black-50">Sort by:</span>
                  <div class="price ml-2">
                    <span class="mr-1">price</span>
                    <i class="fa fa-angle-down"></i>
                  </div>
                </div>
              </div>
              <CartTable>
                <table>
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Products</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {carts.length > 0 && carts.map((cart) => {
                      return (
                        <tr key={cart.id}>
                          <td>
                              <img
                                max-width="20px"
                                height="20px"
                                src={cart.photoUrl}
                                alt=""
                              />
                          </td>
                          <td>{cart.name}</td>
                          <td>${cart.selling_price}</td>

                          <td> {cart.qty}</td>

                          <td>${cart.selling_price * cart.qty}</td>

                          
                        </tr>
                      )
                    })}
                      
                  </tbody>
                </table>
              </CartTable>
            </div>
          </div>
          <div class="col-md-4">
            <div class="payment-info">
              <div class="d-flex justify-content-between align-items-center">
                <span>Card details</span>
                <img
                  class="rounded"
                  src="https://i.imgur.com/WU501C8.jpg"
                  width="30"
                  alt=""
                />
              </div>
              <span class="type d-block mt-3 mb-1">Card type</span>
              <label class="radio">
                {" "}
                <input type="radio" name="card" value="payment" checked />{" "}
                <span>
                  <img
                    width="30"
                    src="https://img.icons8.com/color/48/000000/mastercard.png"
                    alt=""
                  />
                </span>{" "}
              </label>

              <label class="radio">
                {" "}
                <input type="radio" name="card" value="payment" />{" "}
                <span>
                  <img
                    width="30"
                    src="https://img.icons8.com/officel/48/000000/visa.png"
                    alt=""
                  />
                </span>{" "}
              </label>

              <label class="radio">
                {" "}
                <input type="radio" name="card" value="payment" />{" "}
                <span>
                  <img
                    width="30"
                    src="https://img.icons8.com/ultraviolet/48/000000/amex.png"
                    alt=""
                  />
                </span>{" "}
              </label>

              <label class="radio">
                {" "}
                <input type="radio" name="card" value="payment" />{" "}
                <span>
                  <img
                    width="30"
                    src="https://img.icons8.com/officel/48/000000/paypal.png"
                    alt=""
                  />
                </span>{" "}
              </label>
              <div>
                <label class="credit-card-label">Name on card</label>
                <input
                  type="text"
                  class="form-control credit-inputs"
                  placeholder="Name"
                />
              </div>
              <div>
                <label class="credit-card-label">Card number</label>
                <input
                  type="text"
                  class="form-control credit-inputs"
                  placeholder="0000 0000 0000 0000"
                />
              </div>
              <div class="row">
                <div class="col-md-6">
                  <label class="credit-card-label">Date</label>
                  <input
                    type="text"
                    class="form-control credit-inputs"
                    placeholder="12/24"
                  />
                </div>
                <div class="col-md-6">
                  <label class="credit-card-label">CVV</label>
                  <input
                    type="text"
                    class="form-control credit-inputs"
                    placeholder="342"
                  />
                </div>
              </div>
              <hr class="line" />
              <div class="d-flex justify-content-between information">
                <span>Subtotal</span>
                <span>#{amount}.00</span>
              </div>
              <div class="d-flex justify-content-between information">
                <span>Shipping</span>
                <span>#0.00</span>
              </div>
              <div class="d-flex justify-content-between information">
                <span>Total(Incl. taxes)</span>
                <span>#{amount}.00</span>
              </div>
              <button
                class="btn btn-primary btn-block d-flex justify-content-between mt-3"
                type="button"
                onClick={() => {
                  handleFlutterPayment({
                    callback: (response) => {
                      processPayment(response)
                      closePaymentModal() // this will close the modal programmatically
                    },
                    onClose: () => {},
                  });
                }}
              >
                <span>#{amount}.00</span>
                <span>
                  Pay<i class="fa fa-long-arrow-right ml-1"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default PaymentForm;

const CartTable = styled.div`
  //background-color: red;
  
  @media(max-width: 768px){
    width: 400px;
    
    tbody{
      tr{
        td{
          img{
            max-width: 50px;
            max-height: 50px;
            border-radius: 10px;
          }
        }
      }
    }
  }
  table{
    text-align: center;
    border-collapse: collapse;
    //background-color: red;
    width: 100%;
    
    thead{
      th{
        padding:20px;
        border-bottom: 1px solid black;
        @media(max-width: 768px){
          padding: 12px;
        }
      }
    }
    tbody{
      border-bottom: 1px solid black;
      padding-bottom: 10px;
      padding-top: 10px;
      tr:last-child>td{
        background-color: transparent;
        border: 0px;
      }
    }
  }
`