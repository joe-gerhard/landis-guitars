import React from 'react'
import { Styled } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <Styled.Footer>
      <Styled.ContactInfo>
        <span>Something Cool Studios</span>
        <span>1717 E Cesar Chaves St</span>
        <span>Austin, TX 78702</span>
        <span>480-323-9259</span>
        <Styled.SocialLinks>
          <a href="www.facebook.com"><FontAwesomeIcon icon={faFacebookF} /></a>
          <a href="www.instagram.com"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="mailto:sam.l.gerhard@gmail.com"><FontAwesomeIcon icon={faTwitter} /></a>
        </Styled.SocialLinks>
      </Styled.ContactInfo>
      <Styled.ImageContainer>
        <img src="/landis-guitars-logo-large.jpg" alt="Landis Guitars"/>
      </Styled.ImageContainer>
    </Styled.Footer>
  )
}

export default Footer
