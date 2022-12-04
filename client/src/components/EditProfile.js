import React from 'react'
import styled from 'styled-components'

function EditProfile() {
  return (
    <Container>
        <Content>
            <FormHead>
                <h1>Edit Profile</h1>
                <hr />
            </FormHead>
            

            <VendorForm>
                <p>Username</p>
                <input type="text" placeholder='Username' />
                <p>Email</p>
                <input type="text" placeholder='Email' />
            </VendorForm>
            <hr />
            
            <ForgotPassContainer>
            <h2>Forgot Password</h2>
            <br />
            <p>Old Password</p>
            <input type="password" placeholder='Old Password'/>
            <p>New Password</p>
            <input type="password" />
            <p>Confirm Password</p>
            <input type="password" />
            <span>
                Save Changes
            </span>
            </ForgotPassContainer>
        </Content>
    </Container>
  )
}

export default EditProfile

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

    hr{
        width: 900px;
        background-color: black;
        color: black;
        height: 1px;
    }

    h2{
        text-align: left;
    }

`

const FormHead = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    hr{
        width: 950px;
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
        width: 450px;
        margin-bottom: 20px;
    }

    p{
        padding-top: 10px;
        padding-bottom: 10px;
    }

    input{
        width: 100%;
        height: 40px;
        border-radius: 5px;
        border: 1px solid grey;
        margin-bottom: 30px;
        &:focus{
            border: 1px solid black;
            outline: none;
            
        }
    }
`

const ForgotPassContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: right;
    //background-color: red;
    width: 1100px;

    @media(max-width: 768px){
        width: 450px;;
    }

    p{
        margin-bottom: 10px;
    }

    input{
        border-radius: 5px;
        border: 1px solid grey;
        height: 30px;
        margin-bottom: 20px;
        padding: 5px;

        &:focus{
            border: 1px solid black;
            outline: none;
        }
    }

    span{
        background-color: black;
        color: white;
        width: 150px;
        text-align: center;
        padding: 10px;
        border-radius: 5px;
    }
`