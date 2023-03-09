import React from 'react'
import Icons from './Icons'
import { Container } from './styles/Container.styled'
import {LoadMoreBtnWrapper,DiscoverMoreWrapper,FilterTabMenu,DiscoverNtfsList,DiscoverNtfsListItem } from './styles/DiscoverMore.styled'
import Discover from '../assets/images/discover.png'
import DiscoverPersion1 from '../assets/images/discover-persion1.png'
import DiscoverPersion2 from '../assets/images/discover-persion2.png'
import DiscoverPersion3 from '../assets/images/discover-persion3.png'
import DiscoverPersion4 from '../assets/images/discover-persion4.png'
import { ButtonLargeOutline } from './styles/Buttons.styled'

const DiscoverMoreSection = () => {

    const Item = () =>(
        <DiscoverNtfsListItem>
                    <div className='top_box'>
                        <img src={Discover} />
                        <div className='subscribers'>
                            <img src={DiscoverPersion1} />
                            <img src={DiscoverPersion2} />
                            <img src={DiscoverPersion3} />
                            <img src={DiscoverPersion4} />
                        </div>
                    </div>
                    <div className='bottom'>
                        <h5 className='title'>ArtCrypto</h5>
                        <div className='middle'>
                            <div className='middle_left'>
                                <span>{Icons.ethereum2}</span>
                                <span>0.25 ETH</span>
                            </div>
                            <span className='middle_right'>1 of 321</span>
                        </div>
                        <div className='footer'>
                            <div className='f_date'><span>3</span>h <span>50</span>m <span>2</span>s <span>left</span></div>
                            <h6>Place a bid</h6>
                        </div>
                    </div>
        </DiscoverNtfsListItem>
    )

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
            <DiscoverNtfsList>
                {<Item/>}
                {<Item/>}
                {<Item/>}
                {<Item/>}
                {<Item/>}
                {<Item/>}
                {<Item/>}
                {<Item/>}
                {<Item/>}
                {<Item/>}
                {<Item/>}
                {<Item/>}
                {<Item/>}
                {<Item/>}
                {<Item/>}
                {<Item/>}
            </DiscoverNtfsList>
            <LoadMoreBtnWrapper>
                <ButtonLargeOutline>
                    More NFTs
                </ButtonLargeOutline>
            </LoadMoreBtnWrapper>
        </Container>
    </DiscoverMoreWrapper>
  )
}

export default DiscoverMoreSection