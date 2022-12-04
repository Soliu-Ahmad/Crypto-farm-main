import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

function Profile() {
  return (
    <Container>
        <Content>
            <FormHead>
                <h1>Profile</h1>
                <hr />
            </FormHead>

            <MyProfile>
              <ImmageIcon>
                  <img src='/images/account.svg' alt='' />
              </ImmageIcon>
              <h2>PAUL LOGAN</h2>
              <p>cjhxhxhxhxhxhxhhxhxhxhxhx</p>
              <br />
              <Link to="/edit-profile"><span>Edit Profile</span></Link>
              
            </MyProfile>
            <hr />

            <Interest>
              <InterestTop>
                <h1>My Interest</h1>
                <h1>Edit</h1>
                
              </InterestTop>
              <InterestSection1>
                <p>Liverstocks</p>
              </InterestSection1>

              <InterestSection2>
                <Sect>
                  <p>hhhhshshs</p>
                </Sect>
                <Sect>
                  <p>hhhhshshs</p>
                </Sect>
              </InterestSection2>
            </Interest>
            <hr />

            <MyAccount>
            <InterestTop>
                <h1>Account</h1>
                <h1>Edit</h1>
              </InterestTop>
              <InterestSection1>
                <p>Orders</p>
              </InterestSection1>
            </MyAccount>


          </Content>
     </Container>     
  )
}

export default Profile

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
        height: 1px;
        //font-weight: 900;
        background-color: black;
        //margin-top: 70px;

        @media(max-width: 768px){
            width: 350px;
            //margin-left: 5px;
        }
    }

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
            width: 350px;
            margin-left: 5px;
        }
    }

    h1{
        font-size: 25px;
        @media(max-width: 768px){
            font-size: 30px;
        }
    }
`

const MyProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: flex-start;
  //background-color: blue;
  width: 1000px;
  margin-top: 20px;
  margin-bottom: 50px;

  @media(max-width: 768px){
    width: 450px;
  }

  h2{
    //margin-top: 20px;
    margin-bottom: 20px;
    font-size: 25px;
  }

  span{
    margin-top: 20px;
    background-color: black;
    color: white;
    width: 100px;
    padding: 10px;
    text-align: center;
    border-radius: 10px;
  }
`

const ImmageIcon = styled.div`
  width: 500px;
  height: 300px;
  background-color: grey;
  //width: ;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  position: relative;
  border: 3px solid black;

  @media(max-width: 768px){
    width: 450px;
  }

  

  img{
    width: 50px;
    height: 50px;
    //position: absolute;
    top: 10px;
    //right: 0;
    //left: 0;
    //bottom: 0;
    //margin: auto;
  }

`

const Interest = styled.div`
  //background-color: red;
  width: 1000px;
  @media(max-width: 768px){
    width: 450px;
  }

  
`

const InterestTop = styled.div`
  display: flex;
  justify-content: space-between;
  h1{
    font-size: 20px;
  }
`

const InterestSection1 = styled.div`
  height: 200px;
  //background-color: red;
  width: 950px;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 30px;
  border-radius: 20px;
  border: 2px solid black;

  p{
    text-align: center;
    margin-top: 80px;
  }

  @media(max-width: 768px){
    width: 450px;
  }
`

const InterestSection2 = styled.div`
  height: 200px;
  //background-color: red;
  width: 950px;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  @media(max-width: 768px){
    width: 450px;
  }
`

const Sect = styled.div`
  //background-color: red;
  width: 450px;
  border-radius: 10px;
  border: 2px solid;
  margin-bottom: 80px;  

  p{
    text-align: center;
    margin-top: 80px;
  }

  @media(max-width: 768px){
    width: 200px;
  }
`

const MyAccount = styled.div`
  //background-color: red;
  width: 1000px;
  

  @media(max-width: 768px){
    width: 450px;
  }
`