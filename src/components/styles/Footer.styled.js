import styled from "styled-components";



export const FooterWrapper = styled.footer`
    background: ${({theme})=>theme.color.white};
    padding: 80px 0 24px 0;
`


export const FooterContainer = styled.div`
    display: flex;
    grid-gap: 92px;

    & h6{
        color: ${({theme})=>theme.color.black};
        font-size: ${({theme})=>theme.fontSize.body2_font_size};
        font-weight: ${({theme})=>theme.fontWeight.fw_700};
        line-height: ${({theme})=>theme.lineHeight.lh_23_44};
        margin: 0 0 24px 0;
    }

    & ul.footer_link{
        & li{
            color: ${({theme})=>theme.color.gray_89};
            font-size: ${({theme})=>theme.fontSize.body3_font_size};
            font-weight: ${({theme})=>theme.fontWeight.fw_500};
            line-height: ${({theme})=>theme.lineHeight.lh_28};
        }
    }
`
export const FooterLeft = styled.div`
    flex: 1;

    & p{
        padding: 28px 0 32px 0;
        color: ${({theme})=>theme.color.gray_80};
        font-size: ${({theme})=>theme.fontSize.body33_font_size};
        font-weight: ${({theme})=>theme.fontWeight.fw_400};
        line-height: ${({theme})=>theme.lineHeight.lh_22_4};
    }
    & .social{
        display: flex;
        align-items: center;
        grid-gap: 16px;

        & li{
            width: 36px;
            height: 36px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        & li.facebook{
            background: ${({theme})=>theme.color.fb_color};
        }
        & li.twitter{
            background: ${({theme})=>theme.color.tw_color};
        }
        & li.linkdin{
            background: ${({theme})=>theme.color.in_color};
        }
    }
`
export const FooterMiddle1 = styled.div`
    flex-basis: 113px;
    flex-shrink: 0;
`
export const FooterMiddle2 = styled.div`
    flex-basis: 113px;
    flex-shrink: 0;
`
export const FooterRight = styled.div`
    flex: 1;

    & p{
        padding: 0 0 24px 0;
        color: ${({theme})=>theme.color.gray_80};
        font-size: ${({theme})=>theme.fontSize.body33_font_size};
        font-weight: ${({theme})=>theme.fontWeight.fw_400};
        line-height: ${({theme})=>theme.lineHeight.lh_22_4};
    }

    & .subscriber{
        position: relative;
        & input{
            border: 1px solid ${({theme})=>theme.color.gray_10};
            border-radius: 100px;
            height: 60px;
            width: 364px;
            padding: 0 30px;
            color: ${({theme})=>theme.color.gray_35};
            font-size:${({theme})=>theme.fontSize.body4_font_size} ;
            line-height:${({theme})=>(theme.lineHeight.lh_20_83)} ;
            letter-spacing:${({theme})=>(theme.letterSpacing.ls_04)};

            &:focus{
                outline: 0;
            }

            &::placeholder{
                color: ${({theme})=>theme.color.gray_35};
                font-size:${({theme})=>theme.fontSize.body4_font_size} ;
                line-height:${({theme})=>(theme.lineHeight.lh_16)} ;
            }
        }
        
        & button{
            position: absolute;
            right: 7px;
            top: 7px;
            background: ${({theme})=>theme.color.secondary_dark};
            border: 1px solid ${({theme})=>theme.color.secondary_dark};
            color: ${({theme})=>theme.color.white};
            font-size: ${({theme})=>theme.fontSize.body4_font_size};
            font-weight: ${({theme})=>theme.fontWeight.fw_400};
            letter-spacing: ${({theme})=>theme.letterSpacing.ls_065};
            border-radius: 60px;
            padding: 15px 27px;
            cursor: pointer;
            flex-shrink: 0;
        }
    }
`


export const FooterCopyWrite = styled.div`
    text-align: center;
    border-top: 1px solid ${({theme})=>theme.color.gray_3};;
    margin: 70px 0 0 0;

    & p{
        padding: 15px 0 0 0;
        color: ${({theme})=>theme.color.gray_30};
        font-size: ${({theme})=>theme.fontSize.body33_font_size};
        font-weight: ${({theme})=>theme.fontWeight.fw_400};
        line-height: ${({theme})=>theme.lineHeight.lh_22_4};
    }
`



