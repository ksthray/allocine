import React, { useRef } from "react";

import styled from "styled-components";

import Header from "./header";
import Footer from "./Footer";

const Cursor = styled.div`
  width: 40px;
  height: 40px;
  border: 1px solid #fabf00;
  border-radius: 50%;
  position: absolute;
  pointer-events: none;
  z-index: 100;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: none;
  }

  ::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    background-color: #fabf00;
    border-radius: 50%;
    z-index: 999;
  }
`;
const Layout = ({ children }) => {
  let cursorRef = useRef();
  const mousePos = (e) => {
    // console.log(cursorRef.current);
    cursorRef.current.setAttribute(
      "style",
      `top: ${e.pageY - 20}px; left: ${e.pageX - 20}px`
    );
  };
  return (
    <div onMouseMove={mousePos}>
      <Cursor ref={cursorRef} />

      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
