
import React from 'react'
import { Styled } from './styles';

const AboutSection: React.FC = () => {
  return (
    <Styled.AboutSection>
      <Styled.AboutContainer>
        <h1>About</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Blanditiis, hic quam possimus repudiandae repellat animi laboriosam, 
          vel natus assumenda laborum placeat! Ad est dicta explicabo itaque 
          amet necessitatibus ex quas!</p>
      </Styled.AboutContainer>
      <Styled.ImageContainer>
        <img src="/landis-guitars-logo-large.jpg" alt="Landis Guitars Logo"/>
      </Styled.ImageContainer>
    </Styled.AboutSection>
  )
}

export default AboutSection;
