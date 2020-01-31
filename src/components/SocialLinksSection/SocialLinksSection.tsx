import React from 'react'
import { Styled } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const SocialLinksSection: React.FC = () => {
  return (
    <Styled.SocialLinksSection>
      <h1>Social Links</h1>
      <Styled.LinksContainer>
        <Styled.Link href="" target="_blank">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </Styled.Link>
        <Styled.Link href="" target="_blank">
          <FontAwesomeIcon icon={faFacebookF} />
        </Styled.Link>
        <Styled.Link href="" target="_blank">
          <FontAwesomeIcon icon={faInstagram} />
        </Styled.Link>
        <Styled.Link href="" target="_blank">
          <FontAwesomeIcon icon={faTwitter} />
        </Styled.Link>
      </Styled.LinksContainer>
    </Styled.SocialLinksSection>
  )
}

export default SocialLinksSection;
