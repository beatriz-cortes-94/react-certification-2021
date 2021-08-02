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

function Nav(props) {
  const { handleMenuClick, onSearchSubmit } = props;
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState('');

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const renderMenu = () => {
    return (
      <StyledMenu>
        <StyleHomeUrl onClick={handleMenuClick}>HOME</StyleHomeUrl>
      </StyledMenu>
    );
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearchSubmit(query);
  };

  return (
    <StyledNanv>
      <StyledButton type="button" onClick={toggleMenu}>
        <StyledBurger className="fas fa-bars" />
        {menuOpen ? renderMenu() : null}
      </StyledButton>
      <div>
        <form onSubmit={handleSubmit}>
          <StyledSearchBox type="text" placeholder="Search..." onChange={handleChange} />
        </form>
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
