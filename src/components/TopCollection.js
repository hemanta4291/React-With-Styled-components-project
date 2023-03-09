import React from 'react'
import Icons from './Icons'
import { Container, FlexContainer } from './styles/Container.styled'
import { TopCollectionLeft,TopCollectionLeftInner,CollectionOverList,TopCollectionMiddle,CollectionMiddle,TopCollectionRight, TopCollectionWrapper, TopFlexContainer } from './styles/TopCollection.styled'
import CollectionImage from '../assets/images/top-collection-large.jpg'
import Persion from '../assets/images/sell-nfts-persion1.png'
import TopcollectionLatest1 from '../assets/images/top-collection-middle1.jpg'
import TopcollectionOver from '../assets/images/top-collect-latest1.png'
import Verify from '../assets/images/verify 1.png'
import { ButtonSmallContained } from './styles/Buttons.styled'

const TopCollection = () => {
  return (
    <TopCollectionWrapper>
        <Container>
            <TopFlexContainer gap="52px" alignItem="flex-start">
                <TopCollectionLeft>
                    <img className='left_img' src={CollectionImage}  alt="collection image"/>
                    <TopCollectionLeftInner>
                        <div className='top_left_inner1'>
                            <img src={Persion} alt="persion" />
                            <div className='top_left_inner1_content'>
                                <h5>The Futr Abstr</h5>
                                <span>10 in the stock</span>
                            </div>
                        </div>
                        <div className='top_left_inner2'>
                            <span className='top_left_inner2_title'>Highest Bid</span>
                            <div className='top_left_inner2_content'>
                                <span>{Icons.ethereum1}</span>
                                <h6>0.25 ETH</h6>
                            </div>
                        </div>
                    </TopCollectionLeftInner>
                </TopCollectionLeft>
                <TopCollectionMiddle>
                    <div className='top_middle_item'>
                        <img src={TopcollectionLatest1} alt="image" />
                        <CollectionMiddle>
                            <h5>The Futr Abstr</h5>
                            <div className='collection_inner'>
                                <img src={Persion} alt="persion" />
                                <div className='box'>
                                    {Icons.ethereum2}
                                    <span>0.25 ETH</span>
                                </div>
                                <div className='out_of'>
                                    1 of 8
                                </div>
                            </div>
                            
                            <ButtonSmallContained>
                                Place a bid
                            </ButtonSmallContained>
                        </CollectionMiddle>
                    </div>
                    <div className='top_middle_item'>
                        <img src={TopcollectionLatest1} alt="image" />
                        <CollectionMiddle>
                            <h5>The Futr Abstr</h5>
                            <div className='collection_inner'>
                                <img src={Persion} alt="persion" />
                                <div className='box'>
                                    {Icons.ethereum2}
                                    <span>0.25 ETH</span>
                                </div>
                                <div className='out_of'>
                                    1 of 8
                                </div>
                            </div>
                            
                            <ButtonSmallContained>
                                Place a bid
                            </ButtonSmallContained>
                        </CollectionMiddle>
                    </div>
                    <div className='top_middle_item'>
                        <img src={TopcollectionLatest1} alt="image" />
                        <CollectionMiddle>
                            <h5>The Futr Abstr</h5>
                            <div className='collection_inner'>
                                <img src={Persion} alt="persion" />
                                <div className='box'>
                                    {Icons.ethereum2}
                                    <span>0.25 ETH</span>
                                </div>
                                <div className='out_of'>
                                    1 of 8
                                </div>
                            </div>
                            
                            <ButtonSmallContained>
                                Place a bid
                            </ButtonSmallContained>
                        </CollectionMiddle>
                    </div>
                    
                </TopCollectionMiddle>
                <TopCollectionRight>
                    <h5 className='title'>Top Collections over </h5>
                    <h6 className='sub_title'>Last 7 days</h6>

                    <CollectionOverList>
                        <div className='over_list_item'>
                            <span className='count'>1</span>
                            <div className='middle_left'>
                                <img  className='top_author' src={TopcollectionOver} alt="image" />
                                <span>
                                <img src={Verify} alt="image" />
                                </span>
                            </div>
                            <div className='middle_right'>
                                <h6>CryptoFunks</h6>
                                <div className='middle_right_inner'>
                                    <span>{Icons.ethereum1}</span>
                                    <span>19,769.39</span>
                                </div>
                            </div>
                            <h6 className='percentage'>+26.52%</h6>
                        </div>
                        <div className='over_list_item'>
                            <span className='count'>1</span>
                            <div className='middle_left'>
                                <img  className='top_author' src={TopcollectionOver} alt="image" />
                                <span>
                                <img src={Verify} alt="image" />
                                </span>
                            </div>
                            <div className='middle_right'>
                                <h6>CryptoFunks</h6>
                                <div className='middle_right_inner'>
                                    <span>{Icons.ethereum1}</span>
                                    <span>19,769.39</span>
                                </div>
                            </div>
                            <h6 className='percentage'>+26.52%</h6>
                        </div>
                        <div className='over_list_item'>
                            <span className='count'>1</span>
                            <div className='middle_left'>
                                <img  className='top_author' src={TopcollectionOver} alt="image" />
                                <span>
                                <img src={Verify} alt="image" />
                                </span>
                            </div>
                            <div className='middle_right'>
                                <h6>CryptoFunks</h6>
                                <div className='middle_right_inner'>
                                    <span>{Icons.ethereum1}</span>
                                    <span>19,769.39</span>
                                </div>
                            </div>
                            <h6 className='percentage'>+26.52%</h6>
                        </div>
                        <div className='over_list_item'>
                            <span className='count'>1</span>
                            <div className='middle_left'>
                                <img  className='top_author' src={TopcollectionOver} alt="image" />
                                <span>
                                <img src={Verify} alt="image" />
                                </span>
                            </div>
                            <div className='middle_right'>
                                <h6>CryptoFunks</h6>
                                <div className='middle_right_inner'>
                                    <span>{Icons.ethereum1}</span>
                                    <span>19,769.39</span>
                                </div>
                            </div>
                            <h6 className='percentage'>+26.52%</h6>
                        </div>
                        <div className='over_list_item'>
                            <span className='count'>1</span>
                            <div className='middle_left'>
                                <img  className='top_author' src={TopcollectionOver} alt="image" />
                                <span>
                                <img src={Verify} alt="image" />
                                </span>
                            </div>
                            <div className='middle_right'>
                                <h6>CryptoFunks</h6>
                                <div className='middle_right_inner'>
                                    <span>{Icons.ethereum1}</span>
                                    <span>19,769.39</span>
                                </div>
                            </div>
                            <h6 className='percentage'>+26.52%</h6>
                        </div>
                        
                        
                    </CollectionOverList>
                </TopCollectionRight>
            </TopFlexContainer>
        </Container>
    </TopCollectionWrapper>
  )
}

export default TopCollection