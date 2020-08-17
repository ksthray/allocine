import React, { useState, useEffect } from "react";

import axios from "axios";
import styled from "styled-components";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import Title from "./TitleSection";
import { dataApi } from "../api";

const Section = styled.div`
  background-color: ${(props) => props.theme.darkLittle};
  div {
    width: 95%;
    margin: 0 auto;
    .link {
      text-decoration: none;
    }
  }
`;
const TopRated = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const result = await axios
      .get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${dataApi}`)
      .then((res) => res.data.results)
      .catch((err) => console.log(err));

    setData(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Section>
      <Title title="Top rated" />
      <div>
        <Row>
          {data.map((item, i) => (
            <Col md={"3"}>
              <Link className="link" to={`/movie/${item.id}`}>
                <CardUiFilm
                  key={i}
                  image={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                  titre={item.original_title}
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
export default TopRated;
