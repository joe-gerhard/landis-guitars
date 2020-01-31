
import React from 'react'
import { Styled } from './styles';

const ServicesSection: React.FC = () => {
  return (
    <Styled.ServicesSection>
      <Styled.HeaderContainer>
        <h1>Services</h1>
      </Styled.HeaderContainer>
      <Styled.Description>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Blanditiis, hic quam possimus repudiandae repellat animi laboriosam, 
          vel natus assumenda laborum placeat! Ad est dicta explicabo itaque 
          amet necessitatibus ex quas!</p>
      </Styled.Description>
    </Styled.ServicesSection>
  )
}

export default ServicesSection;
