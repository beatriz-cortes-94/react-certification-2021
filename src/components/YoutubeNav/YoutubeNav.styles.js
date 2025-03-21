import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNanv = styled.nav`
  display: flex;
  padding-top: 15px;
  padding-bottom: 15px;
  background-color: ${({ isLightTheme }) => (isLightTheme ? `#c72c48` : `#ff4747`)};
  height: 64px;
`;

const StyledButton = styled.button`
  margin: 0 12px;
  background-color: transparent;
  border: transparent;
  color: #fffaf1;
  @media screen and (max-width: 450px) {
    margin: 0 5px;
  }
`;

const StyledBurger = styled.i`
  font-size: 30px;
`;

const StyledMenu = styled.div`
  position: fixed;
  z-index: 1;
  top: 64px;
  left: 0;
  height: 100vh;
  width: 400px;
  padding: 25px;
  background: ${({ isLightTheme }) => (isLightTheme ? `#c72c48` : `#ff4747`)};
`;

const StyleHomeUrl = styled(Link)`
  color: #fffaf1;
  font-size: 20px;
`;

const StyledSearchBox = styled.input`
  font-size: 20px;
  color: #ffffff;
  margin-left: 20px;
  border-radius: 6px;
  border-width: 0;
  padding: 8px 20px;
  background-color: rgb(255, 255, 255, 0.5);
  ::placeholder {
    color: #ffffff;
    opacity: 1; /* Firefox */
  }
  :focus {
    outline: none;
  }
  @media screen and (max-width: 450px) {
    margin-left: 5px;
  }
  @media screen and (max-width: 375px) {
    font-size: 16px;
    margin-left: 0;
  }
`;

const StyledIconsBox = styled.div`
  margin-left: auto;
  margin-right: 24px;
  color: #fffaf1;
  @media screen and (max-width: 450px) {
    margin-right: 8px;
  }
`;

const StyledToggle = styled.i`
  font-size: 30px;
  padding-bottom: 8px;
`;

const StyledAvatar = styled.i`
  font-size: 40px;
  margin-left: 24px;
  @media screen and (max-width: 450px) {
    margin-left: 12px;
  }
  @media screen and (max-width: 375px) {
    margin-left: 8px;
  }
`;

const StyledAvatarMenu = styled.div`
  border-radius: 5px;
`;

const StyledAvatarMenuButton = styled.div`
  background-color: transparent;
  border: transparent;
`;

const StyledAvatarMenuList = styled.ul`
  background-color: ${({ isLightTheme }) => (isLightTheme ? `#c72c48` : `#ff4747`)};
  border: transparent;
  color: #fffaf1;
  font-size: 22px;
  padding: 10px 0;
  font-weight: 500;
  margin: 0 -24px 0 0;
`;

const StyledAvatarMenuItem = styled.li`
  text-align: center;
  list-style-type: none;
  padding: 0;
`;

export {
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
};
