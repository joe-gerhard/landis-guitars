import styled, { css } from 'styled-components';
import { Theme } from '../../styles/theme';

type MenuBarProps = {
  theme: Theme;
  open?: boolean;
}

const MenuBar = styled('nav')<MenuBarProps>(({ theme }) => css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: black;
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
  background: black;
  color: white;
  width: 100%;
  transition: .5s;
  overflow: hidden;

  span {
    opacity: ${open ? 1 : 0};
    transition: .3s;
  }
`);


export const Styled = {
  MenuBar,
  Dropdown,
}