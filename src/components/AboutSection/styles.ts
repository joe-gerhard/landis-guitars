import styled, { css } from 'styled-components';
import { Theme } from '../../styles/theme';

type AboutSectionProps = {
  theme: Theme;
}

const AboutSection = styled('section')<AboutSectionProps>(({ theme }) => css`
  display: flex; 
  flex-direction: column;
  align-items: flex-start;
  padding: 0 17px;
  margin: 25px 0;

  h1 { 
    font-size: 20px;
  }

  p {
    font-size: 12px;
  }
`);

export const Styled = {
  AboutSection,
}