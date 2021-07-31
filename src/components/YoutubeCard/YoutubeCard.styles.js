import styled from 'styled-components';

const StyledVideoCard = styled.a`
  display: block;
  position: relative;
  max-width: 345px;
  height: 345px;
  margin: 25px;
  border-radius: 15px;
  border-color: #c72c48;
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
`;

const CardTitle = styled.h2`
  font-size: 20px;
  text-align: left;
  color: #6b5e62;
`;

const CardDescription = styled.p`
  font-size: 15px;
  text-align: left;
  color: #6b5e62;
`;

export { StyledVideoCard, CardInfo, CardImage, CardTitle, CardDescription };
