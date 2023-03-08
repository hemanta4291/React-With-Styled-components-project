import React from 'react'
import Icons from './Icons'
import { Container } from './styles/Container.styled'
import { DiscoverMoreWrapper,FilterTabMenu } from './styles/DiscoverMore.styled'

const DiscoverMoreSection = () => {
  return (
    <DiscoverMoreWrapper>
        <Container>
            <h3>Discover more NFTs</h3>
            <FilterTabMenu>
                <ul>
                    <li className='active'>All Categories</li>
                    <li>Arts</li>
                    <li>Celebrities</li>
                    <li>Gaming</li>
                    <li>Sport</li>
                    <li>Music</li>
                    <li>Crypto</li>
                </ul>
                <div className='filter'>
                    <span>{Icons.filter}</span>
                    <span>All Filters</span>
                </div>
            </FilterTabMenu>
        </Container>
    </DiscoverMoreWrapper>
  )
}

export default DiscoverMoreSection