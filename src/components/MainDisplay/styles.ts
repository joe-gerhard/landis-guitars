import styled, { css } from 'styled-components';
import { Theme } from '../../styles/theme';

type Props = {
  theme: Theme;
}

const MainDisplay = styled('main')<Props>(({ theme }) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100vw - 400px);
  background: white;
`);

export const Styled = {
  MainDisplay,
}