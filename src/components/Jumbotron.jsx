import React from "react";

import styled from "styled-components";
import { motion } from "framer-motion";

import { Container, Row, Col } from "reactstrap";
import video from "../videos/endgame.mp4";
import Card from "./CardPub";

const JumboStyle = styled.div`
  height: 100vh;
  color: #fff;
`;

const Contains = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.65);
  z-index: 1;
  overflow: hidden;
`;

const Presentation = styled.div`
  padding: 10px;
  background: transparent;
  position: relative;
  top: 150px;
  z-index: 5;

  h1 {
    font-size: 5rem;
    font-weight: 800;
    color: #fabf00;
    letter-spacing: 5px;
    margin-bottom: 60px;
  }
  p {
    font-size: 1.7rem;
  }
`;
const Pub = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px;
  background: transparent;
  position: relative;
  top: 150px;
  z-index: 5;
`;

const Jumbotron = () => {
  return (
    <JumboStyle>
      <Contains />
      <VideoBackground />
      <Container>
        <Row>
          <Col md={7}>
            <Presentation>
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                Allociné
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1.2 }}
                transition={{ delay: 1.8 }}
              >
                Découvrez notre recherche de séances cinéma, les news et
                dossiers cinéma et séries TV, les émissions AlloCiné, les
                dernières bandes-annonces et plus encore...
              </motion.p>
            </Presentation>
          </Col>
          <Col md={5}>
            <Pub>
              <Card />
            </Pub>
          </Col>
        </Row>
      </Container>
    </JumboStyle>
  );
};

const VideoBackground = () => {
  return (
    <VideoStyle>
      <video muted src={video} autoplay="true" loop="true"></video>;
    </VideoStyle>
  );
};

const VideoStyle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100%;
  height: 100vh;

  video {
    min-width: 100%;
    min-height: 100%;
  }
`;

export default Jumbotron;
