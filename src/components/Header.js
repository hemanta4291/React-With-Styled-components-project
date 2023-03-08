import React from 'react'
import { Container, FlexContainer } from './styles/Container.styled'
import { HeaderLeft,Input, HeaderRight,HeaderWrapper } from './styles/Header.styled'
import HeaderLogo from '../assets/images/header-logo.png'
import { Link, NavLink } from 'react-router-dom'
import { ButtonLargeContained, ButtonLargeOutline, ButtonMediumContained, ButtonMediumOutline, ButtonSmallContained } from './styles/Buttons.styled'
import Icons from './Icons'
const Header = () => {
    let activeStyle = {
        textDecoration: "underline",
      };
    
      let activeClassName = "underline";
  return (
    <HeaderWrapper>
        <Container>
            <FlexContainer>
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
            </FlexContainer>
        </Container>
    </HeaderWrapper>
  )
}

export default Header