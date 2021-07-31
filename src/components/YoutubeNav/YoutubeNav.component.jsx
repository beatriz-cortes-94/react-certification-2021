import React from 'react';
import {
  StyledNanv,
  StyledButton,
  StyledBurger,
  StyledSearchBox,
  StyledIconsBox,
  StyledToggle,
  StyledAvatar,
} from './YoutubeNav.styles';

function Nav() {
  return (
    <StyledNanv>
      <StyledButton type="button">
        <StyledBurger className="fas fa-bars" />
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
