import React from 'react'

import { Link } from 'react-router-dom'
import {Container, BackgroundImage, ImageContent, Section, MarketPlace, MyText, MyText2, Text, SocialIcon, Mailing,NewsLetter, Buttom } from "./Style"

function Home() {
  return (
    <Container>
      <BackgroundImage>
        <ImageContent>
          <h2>A Community Farmers Market 9000+ Local Farmers</h2>
          <span>FRESH . LOCAL . SEASONAL</span>
          
            <Text><Link to="/products" style={{color: "white"}}>
            SHOP NOW
            </Link></Text>
        
        </ImageContent>
      </BackgroundImage>

      <Section>
        <MarketPlace>
        <p>________________________________________</p>
        <h1>The Marketplace</h1>
        <p>________________________________________</p>
        </MarketPlace>
        

        <MyText>
          <p>The Farmers Marketplace is an online community farmers
              market serving Placer County and the greater Sacramento
              region. We offer farm fresh produce, herbs, flowers, honey,
              eggs, grass fed beef, pastured poultry, pork, lamb, fish,
              preserves, ferments, olive oil, vinegar, pantry staples, fresh
              baked bread, pies and other crafted products sourced from
              our network of local family farmers and artisans.
              </p>
              <p>Our motto is “THINK global, ACT local” and we are committed
              to building a regenerative local food system, bringing FRESH,
              LOCAL, SEASONAL grocery, garden and eco-lifestyle products
              to our community.
              </p>
              <MyText2>
                <span>SHOP on the HUB</span>
                <span>Sunday - Tuesday</span>
                <span>PICKUP or DELIVERY</span>
                <span>Every Thursday</span>
                <p>________   Social   _________</p>
              </MyText2>
        </MyText>

        <SocialIcon>
          <Link to="https://www.facebook.com/kehinde.abubakar.940">
          <img src="images/facebook.png" alt='' />
          </Link>
          <img src="images/instagram.png" alt='' />
          <img src="images/linkedin.png" alt='' />
          <Link to="https://twitter.com/PCashprince"><img src="images/twitter.png" alt='' /></Link>
        </SocialIcon>

        <Mailing>
          <h1>Join Our Mailing List</h1>
          <p>Be the first to hear about what's in season, upcoming events and the
                  backstory on our featured producers!</p>
        </Mailing>

        <NewsLetter>
          
          <input type="email" placeholder='Email Address' />
          <Link to="/register" style={{ color: "white" }}><p>Sign Up</p></Link>
        </NewsLetter>

        <Buttom>
          <p>Contact Us</p>
          <p>Do you have questions or comments? Send us a message, and we will get back to you soon!
</p>

<br />

<p>The Farmers Marketplace
</p>
<p>1273 High Street, Auburn, California 95603, United States</p>

<br />
<p>916-390-7628
</p>

<br />
 <p>Hours & Locations
</p>
<p>SHOP on the HUB
</p>

<br />
<p>Sunday 9am - Tuesday Midnight
</p>

<br />
<br />

<p>Auburn HUBstore
</p>

<br />
<p>Thurs 4 - 7pm
</p>

<p>1273 High St., Auburn, CA 95603
</p>

        </Buttom>
      </Section>
    </Container>
  )
}

export default Home