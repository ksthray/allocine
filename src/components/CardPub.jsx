import React from "react";

import styled from "styled-components";
import { motion } from "framer-motion";

import photo from "../images/steven.jpg";

const CardContainer = styled(motion.div)`
  width: 300px;
  background: #fff;
`;
const CardImg = styled.div`
  img {
    width: 100%;
  }
`;
const CardBody = styled.div`
  background: #fff;
  padding: 20px;
`;
const CardTitle = styled.h1`
  color: #000;
  font-size: 1.3rem;

  strong {
    text-transform: uppercase;
  }
`;
const CardText = styled.p`
  font-size: 1rem;
  color: #454545;
  margin: 20px 0 20px 0;
`;

const Button = styled.div`
  width: 100%;
  background: #fabf00;
  color: #fff;
  font-size: 1.1rem;
  padding: 10px;
  text-align: center;
  z-index: 11;
  cursor: pointer;
  transition: background 0.7s;
  &:hover {
    background: #cc9c00;
  }
`;
const card = {
  initial: { y: 0, x: 450 },
  animate: {
    x: 0,
    transition: {
      duration: 1,
      delay: 2.2,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
};
const CardPub = () => {
  return (
    <div>
      <CardContainer variants={card} initial="initial" animate="animate">
        <CardImg>
          <img src={photo} alt={"photo d'un film"} />
        </CardImg>
        <CardBody>
          <CardTitle>
            Film Comics <strong>Karate Kid</strong>{" "}
          </CardTitle>
          <CardText>
            Le Titan Thanos, ayant réussi à s'approprier les six Pierres d
            'Infinité et à les réunir sur le Gantelet doré, a pu réaliser son
            objectif de ...
          </CardText>
          <Button>Voire le film</Button>
        </CardBody>
      </CardContainer>
    </div>
  );
};

export default CardPub;
