import React, { useState } from 'react'
import { Styled } from './styles';

const MenuBar: React.FC = () => {

  const [ menuOpen, setMenuOpen ] = useState<boolean>(false);

  return (
    <>
      <Styled.MenuBar onClick={() => setMenuOpen(!menuOpen)}>
        Menu
      </Styled.MenuBar>
      <Styled.Dropdown open={menuOpen}>
        <span>Home</span>
        <span>About</span>
        <span>Blog</span>
        <span>Events</span>
      </Styled.Dropdown>
    </>
  )
}

export default MenuBar;
