import React from "react";

import styled from "styled-components";
import { motion } from "framer-motion";

import { Container, Row, Col } from "reactstrap";
import video from "../videos/endgame.mp4";
import Card from "./CardPub";

import {
  JumboStyle,
  Pub,
  Overlay,
  Presentation,
} from "../styles/JumbotronStyle";
const Jumbotron = () => {
  return (
    <JumboStyle>
      <Overlay />
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

  video {
    min-width: 100%;
    min-height: 100%;
  }
`;

export default Jumbotron;
