import React from 'react'
import styled from 'styled-components'

function ShoppingInterest() {
  return (
    <Container>
        <Content>
        <FormHead>
                <h1>Shopping Interest
</h1>
                <hr />
            </FormHead>
            <ShopInterest>
                <Food1>
                    <p>Grains</p>
                </Food1>
                <Food1>
                    <p>Grains</p>
                </Food1>
                <Food1>
                    <p>Grains</p>
                </Food1>
            </ShopInterest>
            <ShopInterest>
                <Food1>
                    <p>Grains</p>
                </Food1>
                <Food1>
                    <p>Grains</p>
                </Food1>
                <Food1>
                    <p>Grains</p>
                </Food1>
            </ShopInterest>
            <ShopInterest>
                <Food1>
                    <p>Grains</p>
                </Food1>
                <Food1>
                    <p>Grains</p>
                </Food1>
                <Food1>
                    <p>Grains</p>
                </Food1>
            </ShopInterest>
            <BtnDone>
                <p>Done</p>
            </BtnDone>
        </Content>
    </Container>
  )
}

export default ShoppingInterest

const Container = styled.div`
    //background-color: red;
    width: 1200px;
    margin: auto;

    @media(max-width: 768px){
        width: 450px;
        margin: auto;
    }
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`

const FormHead = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    hr{
        width: 800px;
        height: 1px;
        //font-weight: 900;
        background-color: black;
        margin-left: 10px;

        @media(max-width: 768px){
            width: 220px;
            margin-left: 5px;
        }
    }

    h1{
        font-size: 25px;
        @media(max-width: 768px){
            font-size: 17px;
        }
    }
`

const ShopInterest =  styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    width: 1000px;

    @media(max-width: 768px){
        width: 450px;
        //height: 40px;
    }
`

const Food1 = styled.div`
    //background-color: red;
    width: 200px;
    padding: 20px;
    border: 2px solid black;
    border-radius: 5px;

    @media(max-width: 768px){
        width: 100px;
    }

    p{
        text-align: center;
    }
`

const BtnDone = styled.div`
    display: flex;
    align-items: right;
    width: 1000px;
    justify-content: flex-end;

    margin-top: 20px;
    cursor: pointer;

    @media(max-width: 768px){
        width: 450px;
    }

    p{
        background-color: black;
        color: white;
        padding: 15px;
        border-radius: 5px;
    }
`