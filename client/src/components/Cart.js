import React, { useState } from 'react'
import styled from 'styled-components'
//import cart from './cartData.js'
import cartData from './cartData.js'
import {setCarts} from "../store/actions/cartAction"
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import * as short  from 'short-uuid';

import api from "../utils/api";


function Cart() {
  const [deleteCart, setDeleteCart] = useState(cartData);
  const dispatch = useDispatch();
  const history = useHistory();

  const carts = useSelector((store) => store.carts);

  

  const increaseCartQty = (id) => {
    const data = carts.filter(cat=>cat.id !=id);
    let newData=carts.find(add=>add.id==id)
    if (newData) {
      const qty=newData.qty+1
      newData.qty = (newData.available_qty > qty) ? qty : newData.qty;
      dispatch(setCarts([...data, newData]))
    }
  }

  const decreaseCartQty = (id) => {
    const data = carts.filter(cat=>cat.id !=id);
    let newData=carts.find(add=>add.id==id)
    if (newData) {
      newData.qty = newData.qty> 1 ? newData.qty - 1 : 1;
      dispatch(setCarts([...data, newData]))
    }
  }

  const removeCart = (id) => {
    const data = carts.filter(cat=>cat.id !=id)
    dispatch(setCarts(data))
  }

  const clearCart = () => {
    dispatch(setCarts([]))
  }

  const goToCheckout=async()=>{
    const decimalTranslator = short("0123456789"); 
    const qty=carts.reduce((qty, obj) => obj.qty + qty,0);
    const amount=carts.reduce((price, obj) => (obj.selling_price * obj.qty) + price,0);
    const newtrans = {
      order_id: decimalTranslator.generate(),
      user_id: 1,
      qty: qty,
      price: amount,
      payment_status: false,
    };
    
    try{
      const data = await api.post("/transactions", newtrans);
      if(data){
        localStorage.setItem("transactions", JSON.stringify(data));
        let noError=true;
        carts.map(async(cart)=>{
          let newDetail ={
            transaction_id: data.id,
            product_id: cart.id,
            qty: cart.qty,
            unit_amount: cart.selling_price,
            price: cart.selling_price * cart.qty,
          };
          
          const newdata = await api.post("/transaction-details", newDetail);
          
          if(newdata){
            noError=false
          }
        })
        
        
        if(noError){
          
          history.push("/payment-form")
        }
        
      }
    }catch(e){
        console.log(e)
    }
    
  }



  return (
    <Container>
        <SearchBtn>
          <input type="text" placeholder='Search' />
          <p>Search</p>
        </SearchBtn>

        <CartTable>
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Products</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>remove</th>
              </tr>
            </thead>
            <tbody>
              {carts.length > 0 ? carts.map((cart) => {
                return (
                  <tr key={cart.id}>
                    <td>
                      <ImgContainer>
                        <img
                          max-width="20px"
                          height="20px"
                          src={cart.photoUrl}
                          alt=""
                        />
                      </ImgContainer>
                    </td>
                    <td>{cart.name}</td>
                    <td>${cart.selling_price}</td>

                    <td>
                      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <p style={{ paddingRight: "15px", paddingTop: "15px", fontSize: "20px", fontWeight: "bolder", cursor: "pointer" }} onClick={() => decreaseCartQty(cart.id)}>-</p>{cart.qty}<p style={{ paddingLeft: "15px", paddingTop: "15px", fontSize: "20px", fontWeight: "bold", cursor: "pointer" }} onClick={() => increaseCartQty(cart.id)}>+</p>
                      </div>
                    </td>

                    <td>${cart.selling_price * cart.qty}</td>

                    <td>
                      <DeleteImage onClick={() => removeCart(cart.id)}>
                        <img src='images/delete.svg' alt='' />
                      </DeleteImage>
                    </td>


                  </tr>
                )
              }) :
                <tr>
                  <td colSpan="6"><p style={{ textAlign: "center" }}>Cart is empty</p></td>
                </tr>
              }
              {carts.length > 0 &&
                <tr>
                  <td colSpan="6"><button style={{ borderWidth:"0px", height:"50px", padding: "5px", textAlign: "right", backgroundColor:"black", color: "white", borderRadius:"5px" }} onClick={goToCheckout}>Continue to checkout</button></td>
                </tr>
              }
                
            </tbody>
          </table>
        </CartTable>
        <CheckOutBtn>
          {deleteCart.length > 0 &&
            <p>PROCEED TO CHECKOUT</p>
          }

          {deleteCart.length > 0 &&
            <div onClick={() => clearCart()}>
              <p>Clear Cart</p>
            </div>
          }
        </CheckOutBtn>
    </Container>
  )
}

export default Cart

const Container = styled.div`
  width: 1200px;
    margin: auto;
    //height: 2000px;
    position: relative;
    //display:flex;
    @media(max-width: 768px){
        width: 450px;
        //margin:auto;
        
    }
`

const ImgContainer = styled.div`
  height:40px;
  width:40px;
  border-radius: 50%;
`

const SearchBtn = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;

    input{
        height: 40px;
        border-radius: 10px;
        margin-right: 30px;
    }

    p{
        padding: 10px;
        background-color: black;
        color: white;
        border-radius: 10px;
        font-weight: 10;
    }

    @media(max-width: 768px){
      input{
        display: none;
      }

      p{
        display: none;
      }
    }
`

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
const DeleteImage = styled.div`
  //background-color: red;
  display: flex;
  justify-content: flex-end;
  margin: auto;
  width: 20px;
  height: 20px;

  img{
    width: 20px;
    max-height: 20px;
    cursor: pointer;
  }
 `

const CheckOutBtn = styled.div`
  display: flex;
  justify-content: space-between;

  p{
    
    margin-top: 30px;
    text-align: right;
    background-color: black;
    color: white;
    
    padding: 10px;
    border-radius: 10px;
  }

  div{
    width: 100px;
    cursor: pointer;
    p{
      background-color: red;
      text-align: center;
    }
  }
`

