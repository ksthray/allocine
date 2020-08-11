import React from "react";

import Layout from "../components/Layout";
import Jumbotron from "../components/Jumbotron";
import NewsFilms from "../components/NewsFilms";
import TopRated from "../components/TopRated";
import Trailer from "../components/Trailer";

const Index = () => {
  return (
    <Layout>
      <div>
        <Jumbotron />
        <NewsFilms />
        <TopRated />
        <Trailer />
      </div>
    </Layout>
  );
};

export default Index;
