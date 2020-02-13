import styled, { css } from 'styled-components';
import { Theme } from '../../styles/theme';

type MenuBarProps = {
  theme: Theme;
  open?: boolean;
}

const MenuBarContainer = styled('nav')<MenuBarProps>(({ theme }) => css`
  background: black;
`);

const MenuBar = styled('nav')<MenuBarProps>(({ theme }) => css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  min-height: 36px;
  transition: .5s;
`);

const Dropdown = styled('nav')<MenuBarProps>(({ theme, open }) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: ${open ? 200 : 0}px;
  color: white;
  width: 100%;
  transition: .5s;
  overflow: hidden;

  a {
    opacity: ${open ? 1 : 0};
    transition: .3s;
    color: white;
    text-decoration: none;
  }
`);


export const Styled = {
  MenuBarContainer,
  MenuBar,
  Dropdown,
}