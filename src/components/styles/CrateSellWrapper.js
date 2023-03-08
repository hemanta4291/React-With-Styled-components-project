import styled from "styled-components";


export const CrateSellWrapper = styled.div`
    padding: 100px 0 82px 0;
`

export const CrateSellInterContainer = styled.div`
    display: flex;
    grid-gap: 78px;
`

export const CrateSellInterContainerLeft = styled.div`
    flex-basis: 60%;
    display: flex;
    align-items: center;
    grid-gap: 64px;


    & .sell_left{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        grid-gap: 52px;


        & .sell_left_box{
            position: relative;
            & .sell_left_author{
                position: absolute;
                bottom: -35px;
                right: -28px;
                border-radius: 50%;
                width: 80px;
                height: 80px;
                object-fit: cover;
            }
        }               
    }

    & .sell_right_box{
        position: relative;
            & .sell_left_author{
                position: absolute;
                bottom: -35px;
                right: -28px;
                border-radius: 50%;
                width: 80px;
                height: 80px;
                object-fit: cover;
            }
    }
`
export const CrateSellInterContainerRight = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    & p{
        padding: 40px 0 32px 0;
    }
`
