import React, { useState, useEffect } from "react";

import axios from "axios";
import { useParams } from "react-router-dom";

import { dataApi } from "../api";
import Layout from "../components/Layout";
import UiMovie from "../components/MovieDetailUi";
import SimilarMovie from "../components/SimilarMovie";

const Details = ({ match }) => {
  let query = useParams();
  const [movie, setMovie] = useState({});
  const [genre, setGenre] = useState([]);
  const [production, setProduction] = useState([]);
  const fetchMovie = async () => {
    const result = await axios
      .get(`https://api.themoviedb.org/3/movie/${query.id}?api_key=${dataApi}`)
      .then((res) => res.data)
      .catch((err) => console.log(err));

    setGenre(result.genres);
    setProduction(result.production_companies);
    setMovie(result);
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <Layout>
      <UiMovie
        background={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
        affiche={movie.poster_path}
        titre={movie.original_title}
        desc={movie.overview}
        lang={movie.original_language}
        date={movie.release_date}
        genreFilm={genre}
        production={production}
      />
      <SimilarMovie idFilm={match.params.id} />
    </Layout>
  );
};

export default Details;
