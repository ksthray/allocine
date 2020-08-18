import styled from "styled-components";

export const Section = styled.div`
  background-color: ${(props) => props.theme.primaryDrak};
  padding-bottom: 20px;
  div {
    width: 95%;
    margin: 0 auto;

    .col-right {
      width: 100%;
      height: 400px;
      @media (max-width: ${({ theme }) => theme.tablet}) {
        height: 300px;
      }
      @media (max-width: ${({ theme }) => theme.mobile}) {
        height: auto;
        display: flex;
        margin-top: 10px;
      }
      ::-webkit-scrollbar {
        width: 5px;
      }
      ::-webkit-scrollbar-track {
        background: white;
        border-radius: 5px;
      }
      ::-webkit-scrollbar-thumb {
        background: #fabf00;
        border-radius: 5px;
      }
      overflow: auto scroll;

      div {
        margin-bottom: 10px;
      }
    }
  }
`;

export const ContainerShowTrailer = styled.div`
  width: 100%;
  color: #fff;
  .non-movie {
    width: 100%;
    height: 400px;
    background: ${(props) => props.theme.darkLittle};
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: ${({ theme }) => theme.tablet}) {
      height: 300px;
    }
    @media (max-width: ${({ theme }) => theme.mobile}) {
      height: 250px;
    }
    @media (max-width: 474px) {
      height: 240px;
    }
    @media (max-width: 375px) {
      height: 180px;
    }
    @media (max-width: 320px) {
      height: 160px;
    }

    .icon {
      font-size: 4rem;
    }
  }
  .movie {
    @media (max-width: ${({ theme }) => theme.tablet}) {
      iframe {
        height: 300px;
      }
    }
    @media (max-width: ${({ theme }) => theme.mobile}) {
      iframe {
        height: 250px;
      }
    }
    p {
      width: 500px;
      color: #ccc;
      @media (max-width: ${({ theme }) => theme.mobile}) {
        width: 300px;
      }
    }
  }
`;

export const ContainerTrailers = styled.div`
  img {
    width: 100%;
    height: 140px;
    opacity: 0.65;
    transition: opacity 0.7s;
    &:hover {
      cursor: pointer;
      opacity: 10;
    }
    @media (max-width: ${({ theme }) => theme.tablet}) {
      height: 80px;
    }
  }
  .container-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    top: -85px;
    .icon {
      color: white;
      font-size: 2rem;
      @media (max-width: ${({ theme }) => theme.tablet}) {
        font-size: 1.2;
      }
    }
    @media (max-width: ${({ theme }) => theme.tablet}) {
      top: -55px;
    }
  }
`;
