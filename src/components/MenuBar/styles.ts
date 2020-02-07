import styled, { css } from 'styled-components';
import { Theme } from '../../styles/theme';

type MenuBarProps = {
  theme: Theme
}

const MenuBar = styled('nav')<MenuBarProps>(({ theme }) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  color: white;
  height: 36px;
`);

export const Styled = {
  MenuBar,
}