import React, { useState, useEffect } from "react";

import axios from "axios";
import styled from "styled-components";
import Slider from "react-slick";
import { Link } from "react-router-dom";

import { dataApi } from "../api";
import Title from "./TitleSection";

const Section = styled.div`
  background-color: ${(props) => props.theme.primaryDark};
  div {
    width: 95%;
    margin: 0 auto;

    .link {
      text-decoration: none;
    }
  }
`;
const NewsFilms = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const result = await axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=${dataApi}`)
      .then((res) => res.data.results)
      .catch((err) => console.log(err));

    setData(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  return (
    <Section>
      <Title title="les nouveaux films" />
      <div>
        <Slider {...settings}>
          {data.map((item, i) => (
            <>
              <Link className="link" to={`/movie/${item.id}`}>
                <CardUiFilm
                  key={i}
                  image={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                  titre={item.original_title}
                />
              </Link>
            </>
          ))}
        </Slider>
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
    font-size: 1.1rem;
    padding: 10px;
    color: white;
    margin-bottom: 10px;
  }
`;
export default NewsFilms;
