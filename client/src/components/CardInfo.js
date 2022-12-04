import React from 'react'
import styled from 'styled-components'

function CardInfo() {
  return (
    <Container>
        <Content>
        <FormHead>
                <h1>Payment Information
</h1>
                <hr />
            </FormHead>
            <AllForm>
            <p>All transctions are safe and encrypted</p>
            <Form1>
            <input type="text" placeholder='card number' />
                <input type="text" placeholder='card type' />
            </Form1>
            
            
            
            <Form2>
            <InnerForm>
            <input type="text" placeholder='cvv' />
                <input type="text" placeholder='expiry date' />
                </InnerForm>
                
                <span>Done</span>
            
            </Form2>
            
            
        </AllForm>
          </Content>
</Container>
  )
}

export default CardInfo

const Container = styled.div`
     width: 1200px;
    margin: auto;

    @media(max-width: 768px){
        width: 450px;
        margin: auto;
    }

    p{
        text-align: right;
        margin-top: 40px;
        font-size: 30px;
        cursor: pointer;
    }
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    //background-color: red;

    p{
        text-align: left;
        font-size: 25px;
    }
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
            font-size: 21px;
        }
    }
`

const AllForm = styled.div`
    width: 1070px;
    //background-color: red;
    display: flex;
    flex-direction: column;
    justify-content: start;
    padding: 10px;

    p{
      font-size: 20px;
    }

    @media(max-width: 768px){
        width: 450px;
    //background-color: red;
    display: flex;
    flex-direction: column;
    p{
        font-size: 20px;
    }
    }
`
const Form1 = styled.div`
    //background-color: red;
    display: flex;
    width: 600px;
    height: 40px;
    margin-top: 20px;
    justify-content: space-between;
    align-items: center;

    input{
        //margin-left: 10px;
        margin-right: 20px;
        padding: 10px;
        border-radius: 5px;
        width: 100%;
        outline: grey;
        border: 2px solid grey;
    }

    @media(max-width: 768px){
        width: 470px;
    }

`

const Form2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;

  span{
    margin-right: 20px;
    padding: 10px;
    background-color: black;
    color: white;
    border-radius: 20px;
    font-weight: bold;
    cursor: pointer;
  }
`

const InnerForm = styled.div`
    
    input{
      width: 150px;
      margin-right: 10px;
      height: 35px;
      border-radius: 5px;
      border: 2px solid grey;
    }
`
