import React, { useState } from 'react';
import loginApi from '../../api/loginAPI';
import { useAppContext } from '../../context/ContextProvider';
import {
  StyledTitle,
  StyledLogInMenu,
  StyledInput,
  StyledSubmitButtonBox,
  StyledSubmitButton,
} from './YoutubeLoginForm.styles';

function LoginForm(props) {
  const { theme, updateAuthentication } = useAppContext();
  const { handleCancel, handleSuccessSubmit } = props;
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName !== '' && password !== '') {
      loginApi(userName, password)
        .then((res) => {
          updateAuthentication(true, res);
          handleSuccessSubmit();
        }, [])
        .catch((error) => console.log(error));
    }
  };

  return (
    <div>
      <StyledLogInMenu isLightTheme={theme} onSubmit={handleSubmit}>
        <StyledTitle>LOGIN</StyledTitle>
        <StyledInput
          type="text"
          name="user"
          placeholder="Username"
          onChange={(e) => setUserName(e.target.value)}
        />
        <br />
        <StyledInput
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <StyledSubmitButtonBox>
          <StyledSubmitButton type="submit" value="Submit" />
          <StyledSubmitButton type="button" value="Cancel" onClick={handleCancel} />
        </StyledSubmitButtonBox>
      </StyledLogInMenu>
    </div>
  );
}

export default LoginForm;
