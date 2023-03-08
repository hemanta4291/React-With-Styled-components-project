import React from 'react'
import { ButtonLargeContained } from './styles/Buttons.styled'
import { Container, FlexContainer } from './styles/Container.styled'
import { HeroWrapper,ButtonWithCountWr,HeroLeft ,HeroRight,HeroCount} from './styles/Hero.styled'

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
                    <h1>Discover, and collect Digital Art  NFTs </h1>
                </HeroRight>
            </FlexContainer>
        </Container>
    </HeroWrapper>
  )
}

export default HeroSection