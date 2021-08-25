import styled from 'styled-components';

const StyledTitle = styled.h2`
  margin: 0;
  font-size: 25px;
  color: #fffaf1;
`;

const StyledLogInMenu = styled.form`
  position: absolute;
  top: 30%;
  left: 38%;
  z-index: 99;
  background-color: white;
  padding: 20px;
  border-radius: 12px;
  width: 400px;
  background-color: ${({ isLightTheme }) => (isLightTheme ? `#c72c48` : `#ff4747`)};
`;

const StyledInput = styled.input`
  margin-top: 7px;
  padding: 10px 3px;
  border-width: 0 0 1px 0;
  border-color: #fffaf1;
  width: 100%;
  height: 40px;
  background-color: transparent;
  color: #fffaf1;
  font-size: 20px;
  font-family: 'Roboto', sans-serif;
  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #fffaf1;
    opacity: 1; /* Firefox */
  }
`;

const StyledSubmitButtonBox = styled.div`
  text-align: right;
  margin-top: 20px;
`;

const StyledSubmitButton = styled.input`
  font-size: 20px;
  background-color: transparent;
  border-width: 0;
  color: #fffaf1;
  font-family: 'Roboto', sans-serif;
`;

export {
  StyledTitle,
  StyledLogInMenu,
  StyledInput,
  StyledSubmitButtonBox,
  StyledSubmitButton,
};
