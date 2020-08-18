import React, { useState } from "react";

import styled from "styled-components";
import { Row, Col } from "reactstrap";
import { FaRegPlayCircle } from "react-icons/fa";

import { dataTrailer } from "../data";
import Title from "./TitleSection";

import {
  Section,
  ContainerShowTrailer,
  ContainerTrailers,
} from "../styles/TrailerStyle";
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

export default Trailer;
