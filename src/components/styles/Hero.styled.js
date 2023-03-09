import styled from "styled-components";
import DotImage from '../../assets/images/Dot.png'

export const HeroWrapper = styled.div`
    padding: 77px 0 122px 0;
`

export const HeroLeft = styled.div`
    flex-basis: 60%;

    & h1{
        padding: 0 200px 0 0;
    }
    & p{
        margin: 22px 250px 40px 0;
        color: ${({theme})=>theme.color.gray_80};
        font-size: ${({theme})=>theme.fontSize.h5_font_size};
        font-weight: ${({theme})=>theme.fontWeight.fw_400};
        line-height: ${({theme})=>theme.lineHeight.lh_26_04};
    }
`
export const HeroRight = styled.div`
    flex-basis: 40%;

    & .hero_right{
        position: relative;
    }
    & .hero_img{
        width: 400px;
        height: 440px;
        object-fit: cover;
        border-radius: 24px;
    }
    & .profile{
        position: absolute;
        top: 26px;
        left: 26px;

        & h4{
            color: ${({theme})=>theme.color.white};
            text-transform: capitalize;
            margin: 0 0 10px 0;
        }

        & .pro_content{
            display: flex;
            grid-gap: 14px;
            align-items: center;

            & img{
                width: 32px;
                height: 32px;
                border-radius: 50%;
                object-fit: cover;
            }

            & span{
                color: ${({theme})=>theme.color.white};
            }
        }
    }
`
export const ButtonWithCountWr = styled.div`
    position: relative;

    &::after{
        content: "";
        position: absolute;
        background: url(${DotImage});
    }
    
`
export const HeroCount = styled.div`
    padding: 30px 0 0 0;
    display: flex;
    align-items: center;
    grid-gap: 24px;
    & h2{
         color: ${({theme})=>theme.color.gray_black};
        font-size: ${({theme})=>theme.fontSize.h1_font_size};
        font-weight: ${({theme})=>theme.fontWeight.fw_700};
        margin: 0;
    }
    & span{
         color: ${({theme})=>theme.color.gray_80};
        font-size: ${({theme})=>theme.fontSize.h5_font_size};
        font-weight: ${({theme})=>theme.fontWeight.fw_400};
        line-height: ${({theme})=>theme.lineHeight.lh_26_04};
        
    }

`