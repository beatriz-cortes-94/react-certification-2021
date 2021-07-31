import React, { useState } from 'react';
import {
  StyledNanv,
  StyledButton,
  StyledBurger,
  StyledMenu,
  StyleHomeUrl,
  StyledSearchBox,
  StyledIconsBox,
  StyledToggle,
  StyledAvatar,
} from './YoutubeNav.styles';

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };
  const renderMenu = () => {
    return (
      <StyledMenu>
        <StyleHomeUrl>HOME</StyleHomeUrl>
      </StyledMenu>
    );
  };

  return (
    <StyledNanv>
      <StyledButton type="button" onClick={toggleMenu}>
        <StyledBurger className="fas fa-bars" />
        {menuOpen ? renderMenu() : null}
      </StyledButton>
      <div>
        <StyledSearchBox type="text" placeholder="Search..." />
      </div>
      <div />
      <StyledIconsBox>
        <StyledToggle className="fas fa-toggle-off" />
        <StyledAvatar className="fas fa-user-circle" />
      </StyledIconsBox>
    </StyledNanv>
  );
}

export default Nav;
