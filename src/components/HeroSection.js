import React from 'react'
import { ButtonLargeContained } from './styles/Buttons.styled'
import { Container, FlexContainer } from './styles/Container.styled'
import { HeroWrapper,ButtonWithCountWr,HeroLeft ,HeroRight,HeroCount} from './styles/Hero.styled'
import Heroimg1 from '../assets/images/sell-nfts-large.png'
import HeroimgPersion from '../assets/images/sell-nfts-persion1.png'
import Icons from './Icons'


const HeroSection = () => {
  return (
    <HeroWrapper>
        <Container>
            <FlexContainer alignItem="flex-start">
                <HeroLeft>
                    <h1>Discover, and collect Digital Art  NFTs </h1>
                    <p>Digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, Sell, and discover exclusive digital assets.</p>
                    <ButtonWithCountWr>
                        <ButtonLargeContained>
                            Explore Now
                        </ButtonLargeContained>
                        <HeroCount>
                            <div>
                                <h2>98k+</h2>
                                <span>Artwork</span>
                            </div>
                            <div>
                                <h2>12k+</h2>
                                <span>Auction</span>
                            </div>
                            <div>
                                <h2>15k+</h2>
                                <span>Artis</span>
                            </div>
                        </HeroCount>
                    </ButtonWithCountWr>
                </HeroLeft>
                <HeroRight>
                    <div className='hero_right'>
                        <img className='hero_img' src={Heroimg1} />
                        <div className='profile'>
                            <h4>Abstr Gradient NFT</h4>
                            <div className='pro_content'>
                                <img src={HeroimgPersion} />
                                <span>Arkhan17</span>
                            </div>
                            
                        </div>
                        <div>
                            <div>
                                <span>Current Bid</span>
                                <div>
                                    <span>{Icons.ethereum1}</span>
                                    <span>0.25 ETH</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </HeroRight>
            </FlexContainer>
        </Container>
    </HeroWrapper>
  )
}

export default HeroSection