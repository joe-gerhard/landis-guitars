import React from 'react'
import { Styled } from './styles'

const Footer = () => {
  return (
    <Styled.Footer>
      <Styled.ContactInfo>
        <span>Something Cool Studios</span>
        <span>1717 E Cesar Chaves St</span>
        <span>Austin, TX 78702</span>
        <span>480-323-9259</span>
        <Styled.SocialLinks>
          <a href="www.facebook.com">F</a>
          <a href="www.instagram.com">I</a>
          <a href="mailto:sam.l.gerhard@gmail.com">E</a>
        </Styled.SocialLinks>
      </Styled.ContactInfo>
      <Styled.ImageContainer>
        <img src="/landis-guitars-logo-large.jpg" alt="Landis Guitars"/>
      </Styled.ImageContainer>
    </Styled.Footer>
  )
}

export default Footer
