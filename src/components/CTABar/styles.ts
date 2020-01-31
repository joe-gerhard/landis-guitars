import styled, { css } from 'styled-components';
import { Theme } from '../../styles/theme';

interface Props {
  theme: Theme;
}

const CTABar = styled('div')<Props>(({ theme }) => css`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 400px;
  background: ${theme.primary};
`)

export const Styled = {
  CTABar,
}