import styled, { css } from 'styled-components';
import { Theme } from '../../styles/theme';

type HeaderProps = {
  theme: Theme;
}

const Header = styled('header')<HeaderProps>(({ theme }) => css`
  display: flex; 
  flex-direction: column;
  align-items: center;
  margin: 25px 0;

  h1 {
    font-size: 20px;
  }

  p {
    font-size: 12px;
  }
`);

export const Styled = {
  Header,

}