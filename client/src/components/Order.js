import React from 'react'
import styled from 'styled-components'

function Order() {
  return (
    <Container>
        <Content>
            <FormHead>
                <h1>Orders</h1>
                <hr />
            </FormHead>

            <Myorder>
                <SingleOrder>
                    <img src='images/mango.jpg' alt='' />
                    <p>Herds of Sheeps</p>
                    <span>Delivered</span>
                </SingleOrder>
                <SingleOrder>
                    <img src='images/mango.jpg' alt='' />
                    <p>Herds of Sheeps</p>
                    <span>Delivered</span>
                </SingleOrder>
                <SingleOrder>
                    <img src='images/mango.jpg' alt='' />
                    <p>Herds of Sheeps</p>
                    <span>Delivered</span>
                </SingleOrder>
            </Myorder>
        </Content>
    </Container>
  )
}

export default Order

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

const Myorder = styled.div`
    width: 800px;

    @media(max-width: 768px){
        width: 450px;
    }
    
`

const SingleOrder = styled.div`

margin-top: 50px;
display: flex;
justify-content: space-between;
align-items: center;
    
    img{
        width: 200px;
        height: 100px;
        border-radius: 5px;
    }

    span{
        border: 2px solid black;
        padding: 10px;
        border-radius: 10px;
        font-weight: bold;
    }
`