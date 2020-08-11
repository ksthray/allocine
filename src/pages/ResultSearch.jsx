import React, { useState, useEffect } from "react";

import axios from "axios";
import { useParams } from "react-router-dom";

import { dataApi } from "../api";
import Layout from "../components/Layout";
import UiSearchMovie from "../components/SearchMovie";

const ResultSearch = () => {
  let query = useParams();
  console.log(query);
  const [movie, setMovie] = useState([]);
  const fetchSearchMovie = async () => {
    const result = await axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${dataApi}&query=${query.slug}&page=1&include_adult=false`
      )
      .then((res) => res.data.results)
      .catch((err) => console.log(err));

    setMovie(result);
  };

  useEffect(() => {
    fetchSearchMovie();
  });
  return (
    <Layout>
      <UiSearchMovie movies={movie} />
    </Layout>
  );
};

export default ResultSearch;
