import React from 'react'
import styled from 'styled-components'

function PaymentInfo() {
  return (
    <Container>
        <Content>
        <FormHead>
                <h1>Payment Information
</h1>
                <hr />
            </FormHead>
            
            <PaymentContainer>
            <p>All transctions are safe and encrypted</p>
            <PayInfo>
                <Info>
                <p>Debit |</p>
                <p>Credit |</p>
                <p>Transfer |</p>
                <p>USSD |</p>
                <img src='images/mc.png' alt='' />
                <img src='images/verve.png' alt='' />
                <img src='images/visa.jpg' alt='' />
                </Info>

                

                <PaymentCompany>
                <hr />
                    <p>Powered by Flutterwave: Accepts Mastercard, Visa, Verve,
                        Discover, AMEX, Diners Club and Union Pay.</p>
                </PaymentCompany>
            </PayInfo>

            
            </PaymentContainer>
            
        </Content>
        <p><u>Pay with crytocurrency</u></p>
    </Container>
  )
}

export default PaymentInfo

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

const PaymentContainer = styled.div`
    width: 1100px;
    
    p{
        font-size: 20px;
        padding-bottom: 20px;
    }

`

const PayInfo = styled.div`
    min-height: 200px;
    //background-color: red;
    width: 900px;
    border: 1px solid black;

`

const Info = styled.div`

    display: flex;
    padding: 10px;


    img{
        width: 20px;
        height: 20px;
        padding-left: 10px;
    }

    p{
        font-size: 20px;
        padding-left: 10px;
    }

`

const PaymentCompany = styled.div`
    p{
        font-size: 30px;
    }

`