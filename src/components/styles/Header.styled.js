import styled from "styled-components";

export const HeaderWrapper = styled.header`
    border-bottom: 1px solid ${({theme})=>theme.color.gray_10};
    height: 100px;
    line-height: 100px;

`

export const HeaderLeft = styled.div`
    display: flex;
    align-items: center;
    grid-gap: 66px;
    flex-basis: 50%;

    & ul{
        display: flex;
        align-items: center;
        grid-gap: 48px;
        
        & a{
            color: ${({theme})=>theme.color.black};
            font-size:${({theme})=>theme.fontSize.body1_font_size} ;
            line-height:${({theme})=>(theme.lineHeight.lh_38_4)} ;
            letter-spacing:${({theme})=>(theme.letterSpacing.ls_04)};
        }
    }

`

export const HeaderRight = styled.div`
    display: flex;
    align-items: center;
    grid-gap: 20px;
`

export const Input = styled.div`
    position: relative;
    & input{
        border: 1px solid ${({theme})=>theme.color.gray_10};
        border-radius: 100px;
        height: 50px;
        width: 300px;
        padding: 0 30px;
        color: ${({theme})=>theme.color.gray_25};
        font-size:${({theme})=>theme.fontSize.body1_font_size} ;
        line-height:${({theme})=>(theme.lineHeight.lh_20_83)} ;
        letter-spacing:${({theme})=>(theme.letterSpacing.ls_04)};

        &:focus{
            outline: 0;
        }

        &::placeholder{
            color: ${({theme})=>theme.color.gray_25};
            font-size:${({theme})=>theme.fontSize.body1_font_size} ;
            line-height:${({theme})=>(theme.lineHeight.lh_20_83)} ;
            letter-spacing:${({theme})=>(theme.letterSpacing.ls_04)};
        }
    }

    & span{
        position: absolute;
        right: 18px;
        top:7px;
    }
`