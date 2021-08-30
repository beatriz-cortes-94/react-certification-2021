import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledVideoCard = styled(Link)`
  display: block;
  position: relative;
  max-width: 345px;
  height: 345px;
  margin: 25px;
  border-radius: 15px;
  border-color: ${({ isLightTheme }) => (isLightTheme ? `#c72c48` : `#ff4747`)};
  border-style: solid;
  border-width: 3px;
  font-weight: 400;
  color: black;
  overflow: hidden;

  :hover {
    color: black;
  }
`;

const CardImage = styled.div`
  height: 140px;
  background-image: url(${({ background }) => background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 12px 12px 0 0;
  margin-bottom: 20px;
`;

const CardInfo = styled.div`
  margin: 10px;
  color: ${({ isLightTheme }) => (isLightTheme ? `#6b5e62` : `#fffaf1`)};
`;

const CardTitle = styled.h2`
  font-size: 20px;
  text-align: left;
`;

const CardDescription = styled.p`
  font-size: 15px;
  text-align: left;
`;

export { StyledVideoCard, CardInfo, CardImage, CardTitle, CardDescription };
