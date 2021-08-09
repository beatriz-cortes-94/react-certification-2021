import styled from 'styled-components';

const StyledVideosList = styled.div`
  display: flex;
  width: 30%;
  padding-left: 20px;
  flex-wrap: wrap;
  @media screen and (max-width: 812px) {
    width: 100%;
    margin-top: 50px;
  }
`;

const RelatedVideosContainer = styled.div`
  display: flex;
  padding-bottom: 10px;
`;

const StyledVideoImg = styled.img`
  height: 100px;
`;

const StyledVideoTitle = styled.h1`
  font-size: 15px;
  margin: 0;
  padding-left: 20px;
`;
export { StyledVideosList, RelatedVideosContainer, StyledVideoImg, StyledVideoTitle };
