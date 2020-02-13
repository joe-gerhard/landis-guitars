import React, { useState } from 'react'
import { Styled } from './styles';
import { Link } from 'react-router-dom';

const MenuBar: React.FC = () => {

  const [ menuOpen, setMenuOpen ] = useState<boolean>(false);

  return (
    <Styled.MenuBarContainer>
      <Styled.MenuBar onClick={() => setMenuOpen(!menuOpen)}>
        Menu
      </Styled.MenuBar>
      <Styled.Dropdown open={menuOpen}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/events">Events</Link>
      </Styled.Dropdown>
    </Styled.MenuBarContainer>
  )
}

export default MenuBar;
