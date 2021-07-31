import styled from 'styled-components';

const StyledVideosList = styled.div`
  display: flex;
  width: 30%;
  padding-left: 20px;
  @media screen and (max-width: 812px) {
    width: 100%;
    margin-top: 50px;
  }
`;

const StyledVideoImg = styled.img`
  width: 168px;
  height: 100px;
  @media screen and (max-width: 1024px) {
    width: 150px;
  }
`;

const StyledVideoTitle = styled.h1`
  font-size: 15px;
  margin: 0;
  padding-left: 20px;
`;
export { StyledVideosList, StyledVideoImg, StyledVideoTitle };
