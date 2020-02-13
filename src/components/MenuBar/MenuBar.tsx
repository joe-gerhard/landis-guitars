import React, { useState } from 'react'
import { Styled } from './styles';

const MenuBar: React.FC = () => {

  const [ menuOpen, setMenuOpen ] = useState<boolean>(false);

  return (
    <Styled.MenuBarContainer>
      <Styled.MenuBar onClick={() => setMenuOpen(!menuOpen)}>
        Menu
      </Styled.MenuBar>
      <Styled.Dropdown open={menuOpen}>
        <span>About</span>
        <span>Blog</span>
        <span>Events</span>
      </Styled.Dropdown>
    </Styled.MenuBarContainer>
  )
}

export default MenuBar;
