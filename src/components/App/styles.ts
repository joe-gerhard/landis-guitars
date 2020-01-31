import styled, { css } from 'styled-components';
import { Theme } from '../../styles/theme';

type Props = {
  theme: Theme;
}

const App = styled('div')<Props>(({ theme }) => css`
 
`);

export const Styled = {
  App,
}