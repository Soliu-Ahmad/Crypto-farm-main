import styled from 'styled-components'

export const Container = styled.div`
  //background-color: red;
  padding-bottom: 20px;
  @media(max-width: 768px){
        width: 500px;
        z-index: -1;
    }

`

export const BackgroundImage = styled.div`
  min-height: 400px;
  background-image: url("images/fruit1.jpg");
  background-repeat: no-repeat;
  //position: relative;
  //background-color: red;
  padding-top: 40px;
  //padding-bottom: 20px;
  //position: relative;

  @media(max-width: 768px){
        background-size: 500px;
        width: 100%;
        height: 100%;
    }
`

export const ImageContent = styled.div`
  //margin-top: 20px;
  //position: absolute;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 350px;
  background-color: white;
  margin: auto;
  height: 350px;
  opacity: 0.7;
  text-align: center;
  //position: absolute;
  //z-index: -1px;

  @media(max-width: 768px){
    width: 220px;
    height: 220px;
    margin: center;
    //z-index: -1px;
    
  }

  h2{
    font-size: 40px;
    //margin-top: 40px;
    //opacity: 0.9;
    @media(max-width: 768px){
      font-size: 25px;
    }
  }
  
  span{
    margin-top: 40px;
    @media(max-width: 768px){
      font-size: 15px;
    }
  }

  
`

export const Text = styled.div`
  font-size: 15px;
    padding: 10px;
    background-color: black;
    color: white;
    width: 100px;
    margin: auto;
    border-radius: 10px;
    cursor: pointer;
`

export const Section = styled.div`
  padding-top: 40px;
  width: 1200px;
  margin: auto;
  //background-color: blue;

  @media(max-width: 768px){
    width: 450px;
    //margin: auto;
    //background-color: blue;
  }
  
`

export const MarketPlace = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  //margin-left: 20px;
  text-align:center;
  @media(max-width: 768px){
    
    p{
      font-size: 5px;
      font-weight: 1000;
      //color: black;
    }

    h1{
    font-size: 10px;
    font-weight: 200;
  }
  }

  h1{
    font-size: 25px;
    font-weight: 200;
  }
`

export const MyText = styled.div`
  width: 800px;
  margin: auto;

  @media(max-width: 768px){
    width: 400px;
    //margin: auto;
    //background-color: blue;
  }

  p{
    text-align: center;
    padding-top: 50px;
  }

`

export const MyText2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span{
    padding: 20px;
  }
`

export const SocialIcon = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;

  img{
    width: 25px;
    height: 25px;
    padding-left: 15px;
    padding-right: 15px;
  }
`

export const Mailing = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  h1{
    font-size: 30px;
  }

  p{
    padding: 20px;
  }

`

export const NewsLetter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;

  input{
    padding: 15px; 
    border-radius: 10px;
    margin-right: 20px;
    width: 400px;
    outline-color: grey;
    
    @media(max-width: 768px){
      width: 180px;
    }
    
  }

  P{
    padding: 17px;
    background-color: black;
    color: white;
    border-radius: 10px;
    margin-left: 20px;
  }


`

export const Buttom = styled.div`
  margin-top: 100px;
  line-height: 2;
  display: flex;
  flex-direction: column;
  //background-color: red;
  width: 750px;
  margin: auto;

  @media(max-width: 768px){
    width: 450px;
  

    p{
        //text-align: center;
        
        font-weight: bold;
    }
}
@media(max-width: 768px){
    flex-wrap: wrap;
}
`