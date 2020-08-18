import React, { useEffect } from "react";

import Layout from "../components/Layout";
import Jumbotron from "../components/Jumbotron";
import NewsFilms from "../components/NewsFilms";
import TopRated from "../components/TopRated";
import Trailer from "../components/Trailer";

const Index = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.onload();
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
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
