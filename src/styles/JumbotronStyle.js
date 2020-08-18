import styled from "styled-components";

export const JumboStyle = styled.div`
  height: 100vh;
  color: #fff;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    height: 50vh;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    height: 35vh;
  }
  @media (max-width: 474px) {
    height: 45.5vh;
  }
  @media (max-width: 375px) {
    height: 55.5vh;
  }
  @media (max-width: 320px) {
    height: 55.5vh;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.65);
  z-index: 1;
  overflow: hidden;
  @media (max-width: ${({ theme }) => theme.tablet}) {
    height: 50vh;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    height: 35.6vh;
  }
  @media (max-width: 474px) {
    height: 45.6vh;
  }
  @media (max-width: 375px) {
    height: 55.6vh;
  }
  @media (max-width: 320px) {
    height: 55.6vh;
  }
`;

export const Presentation = styled.div`
  padding: 10px;
  background: transparent;
  position: relative;
  top: 150px;
  z-index: 5;
  @media (max-width: ${({ theme }) => theme.tablet}) {
    top: 90px;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    top: 70px;
  }

  h1 {
    font-size: 5rem;
    font-weight: 800;
    color: ${(props) => props.theme.orange};
    letter-spacing: 5px;
    margin-bottom: 60px;

    @media (max-width: ${({ theme }) => theme.tablet}) {
      font-size: 2.5rem;
      color: ${(props) => props.theme.orange};
      letter-spacing: 4px;
    }
    @media (max-width: ${({ theme }) => theme.mobile}) {
      text-align: center;
      margin-bottom: 20px;
    }
  }
  p {
    font-size: 1.7rem;
    @media (max-width: ${({ theme }) => theme.tablet}) {
      font-size: 1.2rem;
    }
    @media (max-width: ${({ theme }) => theme.mobile}) {
      text-align: center;
    }
  }
`;
export const Pub = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px;
  background: transparent;
  position: relative;
  top: 150px;
  z-index: 5;
`;
