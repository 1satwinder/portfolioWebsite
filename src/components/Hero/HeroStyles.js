import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 70%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 70%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

export const Img = styled.img`
  max-width:100%;
  height: auto;
  object-fit: cover;
  overflow: hidden;
  border-radius: 50%;
  margin-left: 15px;
  margin-top: 40px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 65%;
    display: flex;
    flex-direction: column;
    border-radius: 50%;
    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    display: flex;
    flex-direction: column;
    border-radius: 50%;
    margin: 0 auto;
  }
`
