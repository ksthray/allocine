import React from "react";

import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import photo from "../images/endgame.png";

const CardContainer = styled(motion.div)`
  width: 300px;
  background: #fff;
  @media (max-width: ${({ theme }) => theme.tablet}) {
    width: 230px;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: none;
  }
`;
const CardImg = styled.div`
  img {
    width: 100%;
  }
`;
const CardBody = styled.div`
  background: #fff;
  padding: 20px;
  @media (max-width: ${({ theme }) => theme.tablet}) {
    padding: 10px;
  }
`;
const CardTitle = styled.h1`
  color: #000;
  font-size: 1.3rem;
  @media (max-width: ${({ theme }) => theme.tablet}) {
    font-size: 1remx;
  }

  strong {
    text-transform: uppercase;
  }
`;
const CardText = styled.p`
  font-size: 1rem;
  color: #454545;
  margin: 20px 0 20px 0;
  @media (max-width: ${({ theme }) => theme.tablet}) {
    font-size: 0.8rem;
  }
`;

const Button = styled.div`
  width: 100%;
  background: ${(props) => props.theme.orange};
  color: #fff;
  font-size: 1.1rem;
  padding: 10px;
  text-align: center;
  z-index: 11;
  cursor: pointer;
  transition: background 0.7s;
  &:hover {
    background: ${(props) => props.theme.orangeHover};
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
            Avengers : <strong>Endgame</strong>{" "}
          </CardTitle>
          <CardText>
            After the devastating events of Avengers: Infinity War, the universe
            is in ruins due to the efforts of the Mad Titan, Thanos. With the
            help of remaining allies...
          </CardText>
          <Link
            style={{ color: "#ddd", textDecoration: "none" }}
            to="/movie/299534"
          >
            <Button>Voire le film</Button>
          </Link>
        </CardBody>
      </CardContainer>
    </div>
  );
};

export default CardPub;
