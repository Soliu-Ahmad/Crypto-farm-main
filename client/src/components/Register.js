import React, { useState } from 'react'
import styled from 'styled-components'
import { Link, useHistory } from 'react-router-dom';
import api from "../utils/api";
import {storeAuthToken} from "../utils/authToken";
//import styled from 'styled-components'


// import {useState} from 'react';



function Register() {
    const [logReg, isLogReg] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");




    const history=useHistory();

    const registerBtn = () => {
        isLogReg(!logReg)
    }
    
    

    const loginUseRegistration= async()=>{
        const userDetail={
            firstname: firstname,
            lastname: lastname,
            email:email,
            password:password,
            phone:phone,
            address:address
        }
        try{
            const data=await api.post("/users", userDetail);
            if(data){
                setEmail("");
                setPassword("");
                setAddress("");
                setPhone("");
                setLastname("");
                setFirstname("");
                history.push("/login")
            }
        }catch(e){
            console.log(e)
        }
    }


    return (
        <Container>
            <Content>
            <RegisterForm>
                            <h1>Register</h1>
                            <Form2>
                                <p>First Name</p>
                                <input type="text" placeholder='Firstname' value={firstname} onChange={(e)=>{setFirstname(e.target.value)}} />
                                <br />
                                <br />
                                <br />
                                <p>Last Name</p>
                                <input type="text" placeholder='Lastname' value={lastname} onChange={(e)=>{setLastname(e.target.value)}} />
                                <br />
                                <br />
                                <br />
                                <p>Email</p>
                                <input type="email" placeholder='Email' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                                <br />
                                <br />
                                <br />
                                <p>Password</p>
                                <input type="password" placeholder='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                                <br />
                                <br />
                                <p>Phone Number</p>
                                <input type="text" placeholder='Phone number' value={phone} onChange={(e)=>{setPhone(e.target.value)}} />
                                <br />
                                <br />
                                <br />
                                <p>Address</p>
                                <textarea type="text" placeholder='Address' rows="10" cols="50" value={address} onChange={(e)=>{setAddress(e.target.value)}}></textarea>
                                <br />
                                <br />
                                <br />
                                <p>Your personal data will be used to support your experience
                                    throughout this website, to manage access to your account,
                                    and for other purposes described in our privacy policy.</p>

                                <br />
                                <br />
                                <div>
                                    <span onClick={() => loginUseRegistration()} >Register</span>
                                    <u style={{ color: "red", cursor: "pointer" }} onClick={() => history.push("/login")}>already a member? login here</u>
                                </div>
                            </Form2>
                </RegisterForm>
            </Content>
        </Container>
    )
}


export default Register

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

const LoginRegister = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;

    @media(max-width: 768px){
        display: flex;
        flex-direction: column;
        align-items: center;
    padding: 10px;
    }
`

const LoginForm = styled.div`
    width: 520px;
    //background-color: red;
    margin: 20px;
    //padding-bottom: 20px;

    @media(max-width: 768px){
        width: 450px;
    }

    h1{
        font-size: 30px;
    }
`

const RegisterForm = styled.div`
    width: 520px;
    //background-color: blue;
    margin: 20px;

    @media(max-width: 768px){
        width: 450px;
    }
    h1{
        font-size: 30px;
    }
`

const Form1 = styled.div`
    border: 2px solid black;
    padding: 10px;
    margin-top: 20px;
    padding-bottom: 50px;
    padding-top: 40px;
    padding-right: 30px;
    span{
        padding: 15px;
        background-color: black;
        color: white;
        border-radius: 10px;
        cursor: pointer;
    }

    input{
        width: 100%;
        height: 40px;
        border-radius: 10px;
        border: 1px solid grey;
        padding-left: 15px;
        
        &:focus{
            border: 1px solid grey;
            outline: none;
            
        }
    }

    p{
        padding-bottom: 10px;
        font-weight: bold;
    }

    div{
        display: flex;
        justify-content: space-between;
        align-: center;
    }

    
    //width: width: 520px;
`

const Form2 = styled(Form1)``

const RemeForg = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const CheckPass = styled.div`
    display: flex;
    align-items: center;

    p{
        margin-left: 10px;
        text-align: center;
    }
`

const VendorHead = styled(FormHead)`

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
        border-radius: 10px;
        border: 1px solid grey;
        &:focus{
            border: 1px solid grey;
            outline: none;
            
        }
    }
`

const Gvc = styled.div`
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

    span{
        
        margin-right: 20px;
        padding: 20px;
        background-color: grey;
        color: white;
        border-radius: 10px;
        cursor: pointer;
    }

`

const Reg = styled(Gvc)``