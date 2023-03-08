import React from 'react'
import { Container } from './styles/Container.styled'
import { FeaturedWrapper,FeturedInner,FeturedInnerItem } from './styles/Featured.styled'
import FeatureImg from '../assets/images/featured-large1.png'
import FeatureImgSmall1 from '../assets/images/featured-small1.png'
import AuthorPic from '../assets/images/sell-nfts-persion1.png'
import { ButtonExtraSmallOutline } from './styles/Buttons.styled'


const FeaturedSection = () => {
  return (
    <FeaturedWrapper>
        <Container>
            <h4>Collection Featured NFTs</h4>
            <FeturedInner>
                <FeturedInnerItem>
                    <div className='content'>
                        <div>
                            <img src={FeatureImg} />
                        </div>
                        <div>
                            <div><img src={FeatureImgSmall1} /></div>
                            <div><img src={FeatureImgSmall1} /></div>
                            <div><img src={FeatureImgSmall1} /></div>
                        </div>
                    </div>
                    <div className='author'>
                        <div>
                            <h5>Amazing Collection</h5>
                            <div className='author_profile'>
                                <img src={AuthorPic} />
                                <h6>by Arkhan</h6>
                            </div>
                            
                        </div>
                        <ButtonExtraSmallOutline>
                            Total 54 Items
                        </ButtonExtraSmallOutline>
                    </div>
                </FeturedInnerItem>
                <FeturedInnerItem>
                    <div className='content'>
                        <div>
                            <img src={FeatureImg} />
                        </div>
                        <div>
                            <div><img src={FeatureImgSmall1} /></div>
                            <div><img src={FeatureImgSmall1} /></div>
                            <div><img src={FeatureImgSmall1} /></div>
                        </div>
                    </div>
                    <div className='author'>
                        <div>
                            <h5>Amazing Collection</h5>
                            <div className='author_profile'>
                                <img src={AuthorPic} />
                                <h6>by Arkhan</h6>
                            </div>
                            
                        </div>
                        <ButtonExtraSmallOutline>
                            Total 54 Items
                        </ButtonExtraSmallOutline>
                    </div>
                </FeturedInnerItem>
                <FeturedInnerItem>
                    <div className='content'>
                        <div>
                            <img src={FeatureImg} />
                        </div>
                        <div>
                            <div><img src={FeatureImgSmall1} /></div>
                            <div><img src={FeatureImgSmall1} /></div>
                            <div><img src={FeatureImgSmall1} /></div>
                        </div>
                    </div>
                    <div className='author'>
                        <div>
                            <h5>Amazing Collection</h5>
                            <div className='author_profile'>
                                <img src={AuthorPic} />
                                <h6>by Arkhan</h6>
                            </div>
                            
                        </div>
                        <ButtonExtraSmallOutline>
                            Total 54 Items
                        </ButtonExtraSmallOutline>
                    </div>
                </FeturedInnerItem>
            </FeturedInner>
        </Container>
    </FeaturedWrapper>
  )
}

export default FeaturedSection