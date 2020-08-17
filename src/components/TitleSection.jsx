import React from "react";

import styled from "styled-components";

const Title = styled.div`
  background: transparent;
  h2 {
    text-align: center;
    padding: 1.3rem;
    color: ${(props) => props.theme.orange};
    font-weight: 700;
    font-size: 1.2rem;
    text-transform: uppercase;
  }
`;

const TitleSection = ({ title }) => {
  return (
    <Title>
      <h2>{title} </h2>
    </Title>
  );
};

export default TitleSection;
