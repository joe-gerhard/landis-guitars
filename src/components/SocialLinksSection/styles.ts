import styled from 'styled-components';
import { theme } from '../../styles/theme';

const SocialLinksSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const LinksContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
`;

const Link = styled.a`
  position: relative;
  bottom: 0;
  font-size: 24px;
  color: ${theme.light};
  transition: .3s;
  margin: 0 10px;

  &:hover {
    bottom: 3px;
    color: ${theme.accent};
  }
`;
 
export const Styled = {
  SocialLinksSection,
  LinksContainer,
  Link,
}