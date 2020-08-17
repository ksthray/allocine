import React from "react";

import styled from "styled-components";
import { Jumbotron as Jumbo, Container, Row, Col } from "reactstrap";

const MovieDetailUi = (props) => {
  const {
    background,
    affiche,
    titre,
    desc,
    date,
    lang,
    genreFilm,
    production,
  } = props;

  const ContainerMovie = styled.div`
    width: 100%;
    .image {
      display: flex;
      justify-content: center;
      margin-bottom: 10px;
    }
    .jumbo {
      background: url(${background}) no-repeat fixed bottom;
      background-size: cover;
      height: 100vh;
      position: relative;
      z-index: -3;
      @media (max-width: ${({ theme }) => theme.tablet}) {
        height: 50vh;
      }
      @media (max-width: ${({ theme }) => theme.mobile}) {
        height: 80vh;
      }
      @media (max-width: 474px) {
        height: 90vh;
      }
      @media (max-width: 375px) {
        height: 100vh;
      }
      @media (max-width: 320px) {
        height: 150vh;
      }
    }
    .overlay-background {
      background-color: rgba(0, 0, 0, 0.6);
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: -2;
    }
    img {
      width: 300px;
      box-shadow: 5px 5px 20px 5px rgba(0, 0, 0, 0.7);
      @media (max-width: ${({ theme }) => theme.tablet}) {
        width: 200px;
      }
      @media (max-width: ${({ theme }) => theme.mobile}) {
        width: 250px;
      }
      @media (max-width: 474px) {
        width: 230px;
      }
      @media (max-width: 375px) {
        width: 200px;
      }
      @media (max-width: 320px) {
        width: 200px;
      }
    }
  `;
  const Main = styled.div`
    margin-top: 45px;
    color: white;
    span {
      margin-right: 5px;
    }
    .logo {
      width: 100px;
      color: white;
    }
    h3 {
      strong {
        color: #fabf00;
      }
      @media (max-width: ${({ theme }) => theme.tablet}) {
        font-size: 1.2rem;
      }
    }
    h4 {
      @media (max-width: ${({ theme }) => theme.tablet}) {
        font-size: 1.1rem;
      }
    }
    .overlay-detail {
      background-color: rgba(0, 0, 0, 0.5);
      padding: 10px;
      @media (max-width: ${({ theme }) => theme.mobile}) {
        text-align: center;
      }

      p {
        @media (max-width: ${({ theme }) => theme.tablet}) {
          font-size: 0.9rem;
        }
      }
    }
  `;
  return (
    <>
      <ContainerMovie>
        <Jumbo fluid className="jumbo">
          <div className="overlay-background"></div>
          <Container>
            <Main>
              <Row>
                <Col md={4}>
                  <div className="image">
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${affiche}`}
                      alt=""
                    />
                  </div>
                </Col>
                <Col md={8}>
                  <div className="overlay-detail">
                    <h3 className="display-5">
                      Titre du film :{" "}
                      <strong className="text-uppercase">{titre}</strong>{" "}
                    </h3>
                    <p className="lead">{desc} </p>
                    <Row>
                      <Col md={6}>
                        <div>
                          <h4 className="text-uppercase">Détail film</h4>
                          <div>
                            <p>
                              Langue original :{" "}
                              <strong className="text-uppercase">{lang}</strong>{" "}
                            </p>
                            <p>
                              La date du sortie : <strong>{date}</strong>{" "}
                            </p>
                            <span>
                              Genre :{" "}
                              {genreFilm.map((genre) => (
                                <span>
                                  <strong>{genre.name}</strong>{" "}
                                </span>
                              ))}
                            </span>
                          </div>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div>
                          <h4 className="text-uppercase">
                            Maison de production
                          </h4>
                          {production.map((prod) => (
                            <div>
                              <strong>{prod.name} </strong>
                            </div>
                          ))}
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Main>
          </Container>
        </Jumbo>
      </ContainerMovie>
    </>
  );
};

export default MovieDetailUi;
