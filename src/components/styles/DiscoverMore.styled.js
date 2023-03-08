import styled from "styled-components";


export const DiscoverMoreWrapper = styled.div`
    background: ${({theme})=>theme.color.bg_rgba};
    padding: 65px 0 100px 0;

    & h3{
        margin: 0 0 38px 0;
    }
`

export const FilterTabMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    & ul{
        display: flex;
        align-items: center;
        grid-gap: 12px;

        & li{
            background: ${({theme})=>theme.color.btn_rgba};
            padding: 10px 20px;
            cursor: pointer;
            border-radius: 100px;
            color: ${({theme})=>theme.color.black};
            font-size: ${({theme})=>theme.fontSize.body3_font_size};
            font-weight: ${({theme})=>theme.fontWeight.fw_500};
            line-height: ${({theme})=>theme.lineHeight.lh_17};
        }
        & li.active{
            background: ${({theme})=>theme.color.primary};
            color: ${({theme})=>theme.color.white};
        }
    }

    & .filter{
        display: flex;
        align-items: center;
        grid-gap: 10px;
        background: ${({theme})=>theme.color.btn_rgba};
        padding: 10px 20px;
        cursor: pointer;
        border-radius: 100px;
        color: ${({theme})=>theme.color.black};
        font-size: ${({theme})=>theme.fontSize.body3_font_size};
        font-weight: ${({theme})=>theme.fontWeight.fw_500};
        line-height: ${({theme})=>theme.lineHeight.lh_17};

        & span{
            display: inline-flex;
        }
    }
`

