import React from 'react'
import styled from 'styled-components'

function Shipping() {
  return (
    <Container>
        <Content>
        <FormHead>
                <h1>Shipping Information
</h1>
                <hr />
            </FormHead>
        <AllForm>
            <p>Shipping address</p>
            <Form1>
            <input type="text" placeholder='first name' />
                <input type="text" placeholder='last name' />
            </Form1>
            
            <Form2>
            <input type="text" placeholder='street address' />
                <input type="text" placeholder='apartment,suite,etc' />
                <input type="text" placeholder='company name (optional)' />
                
            </Form2>
            <Form3>
            <input type="text" placeholder='country' />
                <input type="text" placeholder='postal code' />
                <input type="text" placeholder='local gov' />
                
            </Form3>
            <Form2>
            <input type="text" placeholder='town/city' />
                <input type="text" placeholder='phone number' />
            </Form2>
            <Btn>
                <p>Done</p>
            </Btn>
        </AllForm>
        </Content>
    </Container>
  )
}

export default Shipping

const Container = styled.div`
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

const Form3 = styled(Form1)``

const Form2 = styled.div`
    //background-color: red;
    //height: 0px;
    width: 600px;
    //margin-top: 15px;
    display: flex;
    flex-direction: column;

    input{
        height: 30px;
        width: 565px;
        //margin-right: 20px;
        padding: 5px;
        border-radius: 5px;
        margin-top: 20px;
        outline: grey;
        border: 2px solid grey;
    }

    @media(max-width: 768px){
        width: 470px;
        input{
            width: 435px;
        }
    }
`





const Btn = styled.div`
    width: 80px;
    cursor: pointer;
    p{
        margin-top: 20px;
        padding: 10px;
        background-color: black;
        color: white;
        border-radius: 5px;
        text-align: center;
    }
`