import React, { useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { CollectionOverList } from './styles/TopCollection.styled'
import Verify from '../assets/images/verify 1.png'
import Icons from './Icons'
import { fetchTopOverNtfs } from '../features/topOverNfts/topOverNftsSlice'

const TopCollectionOver = () => {

    const dispatch = useDispatch();
    const { topOverNtfs, isLoading, isError, error } = useSelector(
        (state) => state.topOverNtfs
    );

    useEffect(()=>{
        dispatch(fetchTopOverNtfs())
    },[])

    let renderView = null
    renderView = topOverNtfs?.slice(0,5).map((item)=>{
        const {id,title,total_bid,percentage,picture} =item
        let active = percentage> 10 ? true : false
        return (
            <div className='over_list_item' key={id}>
            <span className='count'>{id}</span>
            <div className='middle_left'>
                <img  className='top_author' src={picture} alt="image" />
                {
                    active && 
                    <span>
                        <img src={Verify} alt="image" />
                    </span>
                }
                
            </div>
            <div className='middle_right'>
                <h6>{title}</h6>
                <div className='middle_right_inner'>
                    <span>{Icons.ethereum1}</span>
                    <span>{total_bid}</span>
                </div>
            </div>
            <h6 className={active ? "active_class percentage" : "percentage de_active_class"}>+{percentage}%</h6>
        </div>
        )
    })


  return (
    <CollectionOverList>
        {renderView}
    </CollectionOverList>
  )
}

export default TopCollectionOver