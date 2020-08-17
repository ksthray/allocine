import React, { useState } from "react";

import styled from "styled-components";

import Menu from "./Menu";
import Burger from "./Burger";

const HeaderStyleMobile = styled.div`
  height: 80px;
  background: white;
`;

const HeaderMobile = () => {
  const [open, setOpen] = useState(false);
  return (
    <HeaderStyleMobile>
      <Menu />
      <Burger />
    </HeaderStyleMobile>
  );
};

export default HeaderMobile;
