import React, { useState } from 'react';
import { useAppContext } from '../../context/ContextProvider';
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
  const { updateQuery, updateTheme, theme } = useAppContext();
  const { onSearchSubmit } = props;
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const renderMenu = () => {
    return (
      <StyledMenu isLightTheme={theme}>
        <StyleHomeUrl isLightTheme={theme} to="/">
          HOME
        </StyleHomeUrl>
      </StyledMenu>
    );
  };

  const handleChange = (e) => {
    updateQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearchSubmit();
  };

  const toggleTheme = () => {
    updateTheme();
  };

  return (
    <StyledNanv isLightTheme={theme}>
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
        <StyledButton type="button" onClick={toggleTheme}>
          <StyledToggle className={theme ? 'fas fa-toggle-off' : 'fas fa-toggle-on'} />
        </StyledButton>
        <StyledAvatar className="fas fa-user-circle" />
      </StyledIconsBox>
    </StyledNanv>
  );
}

export default Nav;
