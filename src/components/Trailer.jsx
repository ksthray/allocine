import React, { useState } from "react";

import styled from "styled-components";
import { Row, Col } from "reactstrap";
import { FaRegPlayCircle } from "react-icons/fa";

import { dataTrailer } from "../data";
import Title from "./TitleSection";

const Section = styled.div`
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

const Trailer = () => {
  const [recover, setRecover] = useState({
    id: "",
    titre: "",
    poster_path: ``,
    video: "",
    overview: "",
    date: "",
  });
  const [show, setShow] = useState(false);
  const playTrailer = async (trailer) => {
    const item = await trailer;
    setRecover(item);
    console.log(recover);
    setShow(true);
  };
  return (
    <Section>
      <Title title="bande annonces" />
      <div>
        <Row>
          <Col md={9}>
            <ShowTrailer
              titre={recover.titre}
              overview={recover.overview}
              date={recover.date}
              video={recover.video}
              show={show}
              setShow={setShow}
            />
          </Col>
          <Col md={3}>
            <div className="col-right">
              {dataTrailer.map((trailer, i) => (
                <div onClick={() => playTrailer(trailer)}>
                  <ColAllTrailers
                    key={i}
                    id={trailer.id}
                    image={trailer.poster_path}
                  />
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </div>
    </Section>
  );
};

const ShowTrailer = ({ video, overview, date, titre, show, setShow }) => {
  return (
    <ContainerShowTrailer>
      {show ? (
        <div className="movie">
          <iframe
            width="100%"
            height="400px"
            src={video}
            frameborder="0"
            allowfullScreen="true"
            allow="accelerometer"
            autoplay="true"
            encrypted-media="true"
            picture-in-picture="true"
          ></iframe>
          <h5>{titre} </h5>
          <p>{overview} </p>
          <p> {date} </p>
        </div>
      ) : (
        <div className="non-movie">
          <FaRegPlayCircle className="icon" />
        </div>
      )}
    </ContainerShowTrailer>
  );
};

const ContainerShowTrailer = styled.div`
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

const ColAllTrailers = ({ image }) => {
  return (
    <ContainerTrailers>
      <img src={image} alt="affiche trailer" />
      <div className="container-icon">
        <FaRegPlayCircle className="icon" />
      </div>
    </ContainerTrailers>
  );
};

const ContainerTrailers = styled.div`
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

export default Trailer;
