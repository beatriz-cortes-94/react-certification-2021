import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import useYoutubeApi from '../../api/useYoutubeApi';
import { useAppContext } from '../../context/ContextProvider';
import LoginForm from '../YoutubeLoginForm/YoutubeLoginForm.component';
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
  StyledAvatarMenu,
  StyledAvatarMenuButton,
  StyledAvatarMenuList,
  StyledAvatarMenuItem,
} from './YoutubeNav.styles';

function Nav(props) {
  const { updateQuery, updateTheme, theme, updateAuthentication, isAuthenticated } =
    useAppContext();
  const { fetchData } = useYoutubeApi();
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginMenu, setLoginMenu] = useState(false);
  const [loginForm, setLoginForm] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const renderMenu = () => {
    return (
      <StyledMenu isLightTheme={theme}>
        <StyleHomeUrl isLightTheme={theme} to="/">
          HOME
        </StyleHomeUrl>
        <br />
        {isAuthenticated && (
          <StyleHomeUrl isLightTheme={theme} to="/favorites">
            FAVORITES
          </StyleHomeUrl>
        )}
      </StyledMenu>
    );
  };

  const handleChange = (e) => {
    updateQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
    props.history.push('/');
  };

  const toggleTheme = () => {
    updateTheme();
  };

  const openLoginMenu = () => {
    setLoginMenu((prev) => !prev);
  };

  const showLogInMenu = () => {
    setLoginMenu((prev) => !prev);
    setLoginForm(true);
  };

  const logOut = () => {
    setLoginMenu((prev) => !prev);
    updateAuthentication(false);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setLoginForm(false);
  };

  const handleSuccessSubmit = () => {
    setLoginForm(false);
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
        <StyledButton type="button" onClick={openLoginMenu}>
          <StyledAvatar className="fas fa-user-circle" />
        </StyledButton>
        {loginMenu && (
          <StyledAvatarMenu>
            <StyledAvatarMenuButton>
              {!isAuthenticated && (
                <StyledAvatarMenuList
                  isLightTheme={theme}
                  type="button"
                  onClick={showLogInMenu}
                >
                  <StyledAvatarMenuItem>Log in</StyledAvatarMenuItem>
                </StyledAvatarMenuList>
              )}
              {isAuthenticated && (
                <StyledAvatarMenuList isLightTheme={theme} type="button" onClick={logOut}>
                  <StyledAvatarMenuItem>Log out</StyledAvatarMenuItem>
                </StyledAvatarMenuList>
              )}
            </StyledAvatarMenuButton>
          </StyledAvatarMenu>
        )}
      </StyledIconsBox>
      {loginForm && (
        <LoginForm
          handleCancel={handleCancel}
          handleSuccessSubmit={handleSuccessSubmit}
        />
      )}
    </StyledNanv>
  );
}

export default withRouter(Nav);
