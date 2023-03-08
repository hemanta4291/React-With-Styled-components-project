import React from 'react'
import Icons from './Icons'
import { AmazingWrapper,AmazingRight,AmazingLeft } from './styles/Amazing.styled'
import { Container, FlexContainer } from './styles/Container.styled'

const AmazingTransection = () => {
  return (
    <AmazingWrapper>
        <Container>
            <FlexContainer gap="84px">
                <AmazingLeft>
                    <h3>The amazing NFT art of the world here</h3>
                </AmazingLeft>
                <AmazingRight>
                    <div className='amazing_inner'>
                        <span>{Icons.cardTick}</span>
                        <div className='amazing_content'>
                            <h5>Fast Transaction</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus imperdiet.</p>
                        </div>
                    </div>
                    <div className='amazing_inner'>
                        <span>{Icons.chart}</span>
                        <div className='amazing_content'>
                            <h5>Fast Transaction</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus imperdiet.</p>
                        </div>
                    </div>
                </AmazingRight>
            </FlexContainer>
        </Container>
    </AmazingWrapper>
  )
}

export default AmazingTransection