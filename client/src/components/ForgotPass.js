import React from 'react'
import styled from 'styled-components'

function ForgotPass() {
  return (
    <Container>
        <Content>
            <FormHead>
                <h1>Forgot password</h1>
                <hr />
            </FormHead>
            <br />
                <br />
                <br />
            <VendorForm>
                <p>We will send a link to your email to reset your password</p>
                <br />
                <br />
                <br />
                <p>Username or email</p>
                <input type="text" placeholder='Username or email' />
                <Reg>
                    <p>Send</p>
                </Reg>
            </VendorForm>
            </Content>
    </Container>
  )
}

export default ForgotPass

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
        width: 900px;
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

const VendorForm = styled.div`
    //background-color: blue;
    width: 1100px;
    margin-bottom: 20px;

    @media(max-width: 768px){
        width: 400px;
        margin-bottom: 20px;

        input{
        width: 100%;
        height: 40px;
        border-radius: 10px;
        border: 1px solid grey;
        padding-left: 20px;
        &:focus{
            border: 1px solid grey;
            outline: none;
            
        }
    }
    }

    p{
        padding-top: 10px;
        padding-bottom: 10px;
    }

    input{
        width: 100%;
        height: 40px;
        border-radius: 10px;
        border: 1px solid grey;
        padding-left: 20px;
        &:focus{
            border: 1px solid grey;
            outline: none;
            
        }
    }
`

const Reg = styled.div`
    display: flex;
    //text-align: right;
    align-items: center;
    justify-content: right;
    margin-top: 20px;

    p{
        
        margin-right: 20px;
        padding: 20px;
        background-color: black;
        color: white;
        border-radius: 10px;
        cursor: pointer;
    }
`