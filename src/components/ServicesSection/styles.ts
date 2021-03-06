import styled, { css } from 'styled-components';
import { Theme } from '../../styles/theme';

type ServiceSectionProps = {
  theme: Theme;
}

const ServiceSection = styled('section')<ServiceSectionProps>(({ theme }) => css`
  display: flex;
  flex-direction: column;
  padding: 0 17px;
  margin: 48px 0;

  h1 {
    font-size: 20px;
  }

  p {
    font-size: 12px;
  }
`);

export const Styled = {
  ServiceSection,
}