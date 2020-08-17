import React, { useState, useEffect } from "react";

import axios from "axios";
import styled from "styled-components";
import { Row, Col } from "reactstrap";
import { useHistory } from "react-router-dom";

import Title from "./TitleSection";
import { dataApi } from "../api";

const ContainerSilimarMove = styled.div`
  width: 100%;
  background-color: #051321;
  div {
    width: 95%;
    margin: 0 auto;
    .link {
      cursor: pointer;
      transition: box-shadow 0.7s;
      &:hover {
        box-shadow: 5px 5px 20px 5px rgba(0, 0, 0, 0.5);
      }
    }
  }
`;

const SimilarMovie = ({ idFilm }) => {
  console.log(idFilm);
  const [similarMovie, setSimilarMovie] = useState([]);
  const fetchSimilarMovie = async () => {
    const result = await axios
      .get(
        `https://api.themoviedb.org/3/movie/${idFilm}/similar?api_key=${dataApi}`
      )
      .then((res) => res.data.results)
      .catch((err) => console.log(err));

    setSimilarMovie(result);
  };

  useEffect(() => {
    fetchSimilarMovie();
  }, []);
  const history = useHistory();
  const handleClick = (link) => {
    history.push(`/movie/${link}`);
    window.location.reload(false);
  };
  return (
    <ContainerSilimarMove>
      <Title title="Les films qui correspondent" />
      <div>
        <Row>
          {similarMovie.map((movie, i) => (
            <Col md={"3"}>
              <div className="link" onClick={() => handleClick(movie.id)}>
                <CardUiFilm
                  key={i}
                  image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  titre={movie.original_title}
                />
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </ContainerSilimarMove>
  );
};

const CardUiFilm = ({ image, titre }) => {
  return (
    <CardContainer className="text-center">
      <img src={image} alt="image" />
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

export default SimilarMovie;
