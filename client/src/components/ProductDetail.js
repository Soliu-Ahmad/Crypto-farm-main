import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link, useParams } from 'react-router-dom'
import items from './data.js'
import cartData from './cartData.js'

function ProductDetail() {
    const { id } = useParams();
    //const[detailData, setDetailData] = useState();
    const[data, setData] = useState(items)


    const jj = () =>{
        const myData = data.filter((mm) => String(mm.id) === id);
        console.log(myData)
        setData(myData[0]);
    }

    const addToCart = (id) =>{
        if(id){
            const getCart = items.find((myCart) => myCart.id === id);
            // setCart([...cart, getCart]);
            // console.log(getCart)
            getCart.quantity = getCart.quantity + 1
            cartData.push(getCart);
            //console.log(cartData);
        }   
    }

    /*const removeCart = (id) => {
        const data = cartData.filter((del) => del.id !== id);
        if (data.length === 0) {
          //setDeleteCart([]);
          cartData.length = 0;
        }
        //setDeleteCart(data)
    
      }

    const removeSingleCart = (id) => {
        const data = cartData.map((add) => {
          if (add.id === id) {
            add.quantity = add.quantity - 1;
            if (add.quantity === 0) {
              removeCart(add.id);
            }
            return { ...add, quantity: add.quantity }
          }
          return add
        })
        //setDeleteCart(data)
      }

      const addToSingleCart = (id) => {
        const data = cartData.map((add) => {
          if (add.id === id) {
            add.quantity = add.quantity + 1;
            return { ...add, quantity: add.quantity }
          }
          return add
        })
        //console.log(data)
        //setDeleteCart(data)
      }*/

    
    

    //console.log(detailData)


    useEffect(() =>{
        jj()
    },[id])
    

      

  return (
    <Container>
        <Content>
            <ProductImg>
                <img src={data.img} alt='' />
            </ProductImg>
            
            <ProductInfo>
                <h1>{data.title}</h1>
                <br />
                <br />
                <p style={{ fontSize: "20px", color: "green" }}>${data.price}</p>
                <br />
                <br />
                <p>{data.desc}</p>
                <br />
                <br />

                <Btn>
                    <Link to="/cart">
                    <CartBtn2>
                        <p onClick={() => addToCart(data.id)}>Add to cart</p>
                    </CartBtn2>
                    </Link>
                    
                </Btn>
            </ProductInfo>
        </Content>
    </Container>
  )
}

export default ProductDetail

const Container = styled.div`
    width: 1100px;
    margin: auto;
    //height: 2000px;
    position: relative;
    //display:flex;
    @media(max-width: 768px){
        width: 490px;
        margin:auto;
        
    }
`

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: left;
    padding: 20px;
    //background-color: blue;

`

const ProductImg = styled.div`
    padding: 40px;
    //background-color: red;
    border: 1px solid grey;
    border-radius: 10px;

    img{
        width: 300px;
        height: 400px;
    }
`

const ProductInfo = styled.div`
    //background-color: green;
    width: 350px;
    h1{
        font-size: 25px;
        color: grey;
    }
`

const Btn = styled.div`
    display: flex;
    justify-content: flex-start;
    place-items: center;
    padding: 5px;
`

/*const CartBtn1 = styled.div`
display: flex;
justify-content: center;
items-align: center;
//padding-left: 10px;
padding: 20px;
border: 1px solid black;
border-radius: 10px;
margin-right: 20px;
text-align: center;
//cursor: pointer;

p{
    //background-color: red;
    padding-left: 5px;
    padding-right: 5px;
    margin-left: 10px;
    margin-right: 10px;
    border: 1px solid black;
    border-radius: 50%;
    cursor: pointer;
}
`*/

const CartBtn2 = styled.div`
display: flex;
justify-content: center;
place-items: center;
padding: 20px;
border: 1px solid black;
border-radius: 10px;
margin-left: 20px;
text-align: center;
cursor: pointer;
background-color: black;
color: white;
`