import React, { useState } from 'react'
import { FaWindowClose } from 'react-icons/fa';
import { Container, FlexContainer } from './styles/Container.styled'
import { HeaderLeft,Input, HeaderRight,HeaderWrapper, FlexHeaderContainer, HeaderMenuClose, HeaderForMobile } from './styles/Header.styled'
import HeaderLogo from '../assets/images/header-logo.png'
import { NavLink } from 'react-router-dom'
import { ButtonMediumOutline, ButtonSmallContained } from './styles/Buttons.styled'
import Icons from './Icons'
const Header = () => {

    const [mobileToggle,setMobileToggle] = useState(false)

    let activeStyle = {
        textDecoration: "underline",
      };
    
    let activeClassName = "underline";

    
    const mobileMenuHandler = (active) => {
        if(active === 'open'){
            setMobileToggle(true)
        }else{
            setMobileToggle(false)
        }
        
    }

  return (
    <HeaderWrapper>
        <Container>
            { !mobileToggle && 
                <HeaderForMobile>
                    <img src={HeaderLogo} alt="header logo"/>
                    <div onClick={()=>mobileMenuHandler("open")}>
                        {Icons.mobileMenu}
                    </div>
                </HeaderForMobile>
            }
            
            <FlexHeaderContainer active={mobileToggle}>
                <HeaderLeft>
                    <img src={HeaderLogo} alt="header logo"/>
                    <ul>
                        <li>
                        <NavLink
                            to="messages"
                            style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                            }
                        >
                            Marketplace
                        </NavLink>
                        </li>
                        <li>
                        <NavLink
                            to="tasks"
                            className={({ isActive }) =>
                            isActive ? activeClassName : undefined
                            }
                        >
                            Resource
                        </NavLink>
                        </li>
                        <li>
                        <NavLink to="tasks">
                            {({ isActive }) => (
                            <span
                                className={
                                isActive ? activeClassName : undefined
                                }
                            >
                                About
                            </span>
                            )}
                        </NavLink>
                        </li>
                    </ul>
                </HeaderLeft>
                <HeaderRight>
                    <Input>
                        <input placeholder='Search'/>
                        <span>{Icons.search}</span>
                    </Input>
                    <ButtonSmallContained onClick={()=>alert("ok")}>
                        Upload
                    </ButtonSmallContained>
                    <ButtonMediumOutline>
                        Connect Wallet
                    </ButtonMediumOutline>
                </HeaderRight>
            </FlexHeaderContainer>
        </Container>

        <HeaderMenuClose onClick={()=>mobileMenuHandler("close")} active={mobileToggle}>
            {Icons.close}
        </HeaderMenuClose>
    </HeaderWrapper>
  )
}

export default Header