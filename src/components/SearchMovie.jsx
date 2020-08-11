import React from "react";

import styled from "styled-components";
import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";

import Title from "./TitleSection";

const Section = styled.div`
  background-color: #051321;
  padding-top: 60px;
  div {
    width: 95%;
    margin: 0 auto;
    .link {
      text-decoration: none;
    }
  }
`;
const SearchMovie = ({ movies }) => {
  return (
    <Section>
      <Title title="Resultat" />
      <div>
        <Row>
          {movies.map((movie) => (
            <Col md={"3"}>
              <Link className="link" to={`/movie/${movie.id}`}>
                <CardUiFilm
                  key={movie.id}
                  image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  titre={movie.title}
                />
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    </Section>
  );
};

const CardUiFilm = ({ image, titre }) => {
  return (
    <CardContainer className="text-center">
      <img src={image} alt={"picture for movie"} />
      <h4>{titre} </h4>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  width: 100%;
  transition: box-shadow 0.7s;

  &:hover {
    box-shadow: 5px 5px 20px 5px rgba(0, 0, 0, 0.5);
  }
  img {
    width: 100%;
    margin: 0 auto;
  }
  h4 {
    margin-top: 10px;
    padding: 10px;
    font-size: 1.1rem;
    color: white;
    margin-bottom: 10px;
  }
`;

export default SearchMovie;
