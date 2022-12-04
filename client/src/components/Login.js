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
    
    const loginUser= async()=>{
        const userLoginInitials={
            email:email,
            password:password
        }
        try{
            const data=await api.post("/users/login/admin-dashboard", userLoginInitials);
            if(data){
                storeAuthToken(data.password)
                localStorage.setItem("userDetail", JSON.stringify(data));
                const currentPage=localStorage.getItem("currentPage")
                if(currentPage){
                    window.location.href=currentPage;
                    localStorage.removeItem("currentPage")
                }else{
                    history.push("/")
                }
            }else{
                alert(data.message)
            }
        }catch(e){
            console.log(e)
        }
    }



    return (
        <Container>
            <Content>
                <LoginRegister>
                    <LoginForm>
                        <Form1>
                            <p>Username Or Email</p>
                            <input type="text" placeholder='Username Or Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
                            <br />
                            <p>Password</p>
                            <input type="password" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)} />

                            <br />
                            <RemeForg>
                                <CheckPass>
                                    <input type="checkbox" />
                                    <p>Remember</p>
                                </CheckPass>
                                <Link to="/forgot-password"><p>Forgot Password</p></Link>

                            </RemeForg>

                            <br />
                            <br />
                            <div>
                                <button type="button" onClick={() => loginUser()}>
                                    <Link to="/admin-dashboard">
                                    <span>Login</span>
                                    </Link>
                                    
                                </button>
                                <u style={{ color: "red", cursor: "pointer" }} onClick={() => history.push("/register")}>Not a member? register here</u>
                            </div>
                        </Form1>
                    </LoginForm>
                </LoginRegister>
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

    button{
        border: 0px;
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