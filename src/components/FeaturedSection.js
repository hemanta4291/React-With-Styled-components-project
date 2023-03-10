import React, { useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { fetchFeaturedNtfs } from '../features/featuredNfts/featuredNftsSlice'
import FeaturedBox from './FeaturedBox'
import { Container } from './styles/Container.styled'
import { FeaturedWrapper,FeturedInner } from './styles/Featured.styled'

const FeaturedSection = () => {
    const dispatch = useDispatch();
    const { featuredNtfs, isLoading, isError, error } = useSelector(
        (state) => state.featuredNtfs
    );

    useEffect(()=>{
        dispatch(fetchFeaturedNtfs())
    },[])


  return (
    <FeaturedWrapper>
        <Container>
            <h4>Collection Featured NFTs</h4>
            <FeturedInner>
                { featuredNtfs.length>0 && 
                    featuredNtfs.map((item)=>(
                        <FeaturedBox key={item.id} item={item}/>
                    ))
                }
            </FeturedInner>
        </Container>
    </FeaturedWrapper>
  )
}

export default FeaturedSection