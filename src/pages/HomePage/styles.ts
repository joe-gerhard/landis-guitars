import styled, { css } from 'styled-components';
import { Theme } from '../../styles/theme';

type HomePageProps = {
  theme: Theme;
}

const HomePage = styled('main')<HomePageProps>(({ theme }) => css`
 
`);

export const Styled = {
  HomePage,
}