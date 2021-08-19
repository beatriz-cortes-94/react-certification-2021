import styled from 'styled-components';

const StyledApp = styled.div`
  background-color: ${({ isLightTheme }) => (isLightTheme ? `#ffffff` : `#6b5e62`)};
  color: ${({ isLightTheme }) => (isLightTheme ? `#6b5e62` : `#fffaf1`)};
`;

export { StyledApp };
