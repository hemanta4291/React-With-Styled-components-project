import React from 'react'
import { Container } from './styles/Container.styled'
import { FooterWrapper,FooterCopyWrite,FooterContainer,FooterLeft,FooterMiddle1,FooterMiddle2,FooterRight } from './styles/Footer.styled'
import Logo from '../assets/images/header-logo.png'
import Icons from './Icons'

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <FooterContainer>
          <FooterLeft>
            <img src={Logo} />
            <p>The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.</p>
            <ul className='social'>
                <li className='facebook'> <a href='#'/>{Icons.facebook}</li>
                <li className='twitter'> <a href='#'/>{Icons.twitter}</li>
                <li className='linkdin'> <a href='#'/>{Icons.linkdin}</li>
            </ul>
          </FooterLeft>
          <FooterMiddle1>
            <h6>Market Place</h6>
            <ul className='footer_link'>
              <li> <a href="#" />All NFTs</li>
              <li> <a href="#" />New</li>
              <li> <a href="#" />Art</li>
              <li> <a href="#" />Sports</li>
              <li> <a href="#" />Utility</li>
              <li> <a href="#" />Music</li>
              <li> <a href="#" />Domain Name</li>
            </ul>
          </FooterMiddle1>
          <FooterMiddle2>
            <h6>My Account</h6>
            <ul className='footer_link'>
              <li> <a href="#" />Profile</li>
              <li> <a href="#" />Favorite</li>
              <li> <a href="#" />My Collections</li>
              <li> <a href="#" />Settings</li>
            </ul>
          </FooterMiddle2>
          <FooterRight>
            <h6>Stay in the loop</h6>
            <p>Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating NFTs.</p>

            <div className='subscriber'> 
              <input placeholder='Enter your email address..'/>
              <button>Subscribe Now</button>
            </div>
          
          </FooterRight>
        </FooterContainer>
        <FooterCopyWrite>
          <p>Copyright © 2022 Avi Yansah</p>
        </FooterCopyWrite>
      </Container>
    </FooterWrapper>
  )
}

export default Footer