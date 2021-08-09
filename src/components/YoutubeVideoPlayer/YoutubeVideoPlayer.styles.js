import styled from 'styled-components';

const StyledContainer = styled.div`
  width: 70%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const StyledVideoPlayer = styled.iframe`
  width: 100%;
  height: 600px;
  @media screen and (max-width: 1024px) {
    height: 450px;
  }
  @media screen and (max-width: 375px) {
    height: 250px;
  }
`;

const StyledVideoDetails = styled.div`
  margin-left: 10px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`;

const StyledVideoTitle = styled.h2`
  margin: 10px 0 0;
`;

export { StyledContainer, StyledVideoPlayer, StyledVideoDetails, StyledVideoTitle };
