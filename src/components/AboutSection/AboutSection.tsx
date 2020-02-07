import React from 'react'
import { Styled } from './styles';

const AboutSection: React.FC = () => {
  return (
    <Styled.AboutSection>
      <h1>About</h1>
      <p>
        Landis Guitar Repair is a boutique guitar repair studio specializing 
        in whatever Sam’s specialty is. We are appointment only.
      </p>
    </Styled.AboutSection>
  )
}

export default AboutSection;
