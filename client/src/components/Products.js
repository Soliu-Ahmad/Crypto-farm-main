import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Categories from './Categories.js';
import items from './data.js'
import cartData from './cartData.js'
import { Link } from 'react-router-dom';
import api from "../utils/api";
import {categories, vendors} from "./data.js";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import {setCarts} from "../store/actions/cartAction"

const mydata = [...new Set(items.map((item) => item.category))];
//console.log(mydata);


function Products() {
    const [listItem, setListItem] = useState(items);
    const [cart, setCart] = useState([])
    const [cat, setCat] = useState(categories)
    //const [cart, setCart] = useState();
    const [ products, setProducts] = useState([]);
    const dispatch = useDispatch();

    const carts = useSelector((store) => store.carts);

    
    
    const getProducts = async(cat) =>{
        try{
            const productsItems = await api.get(cat=='all'?`/products`:`/products/category/${cat.id}`);
            if(productsItems){
                setProducts(productsItems);
            }
        }catch(e){
            console.log(e)
        }
    }

    const addToCart = (item) =>{
        
        
        if(item){
            let cartItem=Object.assign({}, carts);
            const index = Array.from(cartItem).findIndex((myCart) => myCart.id === item.id);
            
            if(index >- 1){
                cartItem[index].qty = cartItem[index].qty + 1;
                dispatch(setCarts(cartItem));
                //localStorage.setItem("cart", JSON.stringify(cartItem))
            }else{
                item['qty']=1
                dispatch(setCarts([...carts, item]));
                //localStorage.setItem("cart", JSON.stringify(cartItem))
            }
        }   
    }

    useEffect(()=>{
        getProducts('all');
    }, [])


    return (
        <Container>
            <Content>
                <Categories cat={cat} getProducts={getProducts} />
                <AllProduct>
                    <ProductAndSearch>
                        <p onClick={() => getProducts("all")}>All Products</p>
                        <SearchBtn>
                            <input type="text" placeholder='Search' />
                            <p>Search</p>
                        </SearchBtn>

                    </ProductAndSearch>


                    <ListProduct>
                        {products.map((itemList) =>
                        (
                            <SingleProd key={itemList.id}>
                                <Link to={`/product-detail/${itemList.id}`}><img src={itemList.photoUrl} alt=''/></Link>
                                <p>{itemList.name}</p>
                                <p>{itemList.selling_price}</p>
                                <Cartbtn  onClick={() => addToCart(itemList)}>
                                    <img src='images/shopping-bag.png' alt='' />
                                    <p>Add to cart</p>
                                </Cartbtn>
                            </SingleProd>
                        )
                        )}
                    </ListProduct>



                </AllProduct>

            </Content>
        </Container>
    )
}

export default Products

const Container = styled.div`
    width: 1200px;
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
    

`

const AllProduct = styled.div`
    //background-color: blue;
    width: 950px;

    @media(max-width: 768px){
        width: 400px;
        p{
        font-size: 20px;
        font-weight: bold;
        padding-bottom: 10px;
        margin-left: 10px;
        
    }
    }

    
`

const ProductAndSearch = styled.div`
    display: flex;
    justify-content: space-between;

    p{
        font-size: 20px;
        font-weight: bold;
        padding-bottom: 10px;
        cursor: pointer;
        background-color: black;
        color: white;
        padding: 10px;
        border-radius: 5px;
    }
    
`

const SearchBtn = styled.div`
    display: flex;
    align-items: center;

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

const ListProduct = styled.div`
    display: grid;
    //justify-content: space-between;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    //align-items: center;


    @media(max-width: 768px){
        display: flex;
        flex-direction: column;
        z-index: -1;
    }
`

const SingleProd = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;

    img{
        width: 100%;
        height: 150px;
        border-radius: 10px;
    }

    p{
        text-align: center;
        font-weight: bold;
        padding: 5px;
        font-size: 15px;
    }

    @media(max-width: 768px){
        img{
        width: 280px;
        height: 150px;
        //z-index: -110
    }

    p{
        text-align: center;
        font-weight: none;
        font-size: 15px;
    }
    }


`

const Cartbtn = styled.div`
    display: flex;
    align-items: center;
    background-color: black;
    color: white;
    justify-content: center;
    padding: 5px;
    border-radius: 10px;
    cursor: pointer;

    img{
        width: 30px;
        height: 30px;
    }

    p{
        font-weight: 200px;
        font-size: 12px;
        padding-left: 5px;
    }
`