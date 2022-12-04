import React from 'react'
import styled from 'styled-components'


function CryptoPay() {
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
        <MyForm>
            <Form>
                <p>Wallet name</p>
                <input type="text" placeholder='Metamask' />
                <p>Wallet Address</p>
                <input type="text" value="1skfkb324uhhoF9BG39489EWEBluh934ajf8r08wnojvbwh" />
                
                <input type="text" placeholder='Phone number' />
            </Form>
            <h1>OR</h1>
            <QRCode>
                <p>scan QR Code</p>
                <img src='images/QRcode.png' alt='' />
            </QRCode>
        </MyForm>
        </AllForm>
    </Content>
        <Btn>
        <h1>Done</h1>
        </Btn>
        
    </Container>
  )
}

export default CryptoPay

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

const MyForm = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    p{
        text-align: left;
    }

    @media(max-width: 768px){
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

const Form = styled.div`
    display: flex;
    flex-direction: column;
    align-items: right;
    //justify-content: flex-start;
    @media(max-width: 768px){
        width: 450px;
        
    }
    p{
        font-size: 15px;
        padding-bottom: 10px;
    }

    input{
        width: 500px;
        height: 30px;
        border-radius: 5px;
        border: 2px solid grey;
        margin-top: 10px;
        padding: 5px;

        @media(max-width: 768px){
            width: 430px;
        }
    }
`

const QRCode = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
        width: 200px;
        height: 200px;
    }

    p{
        font-size: 20px;
    }
`

const Btn = styled.div`
    width: 100px;
    display: flex;
    justify-content: flex-end;
    align-items: right;
    h1{
        text-align: right;
        padding: 10px;
        background-color: black;
        color: white;
    }
`
