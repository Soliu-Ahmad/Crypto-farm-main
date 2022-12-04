import React from 'react'
import styled from 'styled-components'
//how to create a react js app?


function Categories({cat, getProducts}) {
  return (
    <Category>
            <p>Categories</p>
            <br />
            <br />
            <ul>
                {cat.map((mm, index) =>
                    (
                        <li key = {index} onClick = {() => getProducts(mm)}>{mm.name}</li>
                    )
                )}
            </ul>
            </Category>
  )
}

export default Categories

const Category = styled.div`
    //background-color: red;
    width: 200px;
    
    //top: 2px;
    height: 400px;
    overflow-y: scroll;
    &::-webkit-scrollbar{
        width: 5px;
        border: 1px solid black;
    }

    li{
        list-style: none;
        padding-bottom: 10px;
        cursor: pointer;
        padding: 10px;
        &:hover{
            background-color: black;
        color: white;
        }
    }

    ul{
        //padding-top: 20px;
    }

    p{
        z-index: 100;
        position: sticky;
        //top: 0;

        background-color: white;
        width: 180px;
        font-size: 20px;
        font-weight: bold;
        
        //height: 20px;
    }
`

