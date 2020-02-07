import styled, { css } from 'styled-components';
import { Theme } from '../../styles/theme';

type AppProps = {
  theme: Theme;
}

const App = styled('div')<AppProps>(({ theme }) => css`
 
`);

export const Styled = {
  App,
}