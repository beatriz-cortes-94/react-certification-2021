import styled from 'styled-components';

const StyledNanv = styled.nav`
  display: flex;
  padding-top: 15px;
  padding-bottom: 15px;
  background-color: #c72c48;
  min-height: 64px;
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

export {
  StyledNanv,
  StyledButton,
  StyledBurger,
  StyledSearchBox,
  StyledIconsBox,
  StyledToggle,
  StyledAvatar,
};
