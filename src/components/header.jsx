import React from "react";

//import logo allocine
import logo from "../images/logo.jpg";
//import icon search
import { FaSearch } from "react-icons/fa";
//reactstrap
import {
  HeaderNav,
  Logo,
  Menu,
  Input,
  Search,
  Icon,
} from "../styles/HeaderStyle";
//react router dom link
import { Link } from "react-router-dom";

const parent = {
  initial: { y: -100 },
  animate: {
    y: 0,
    transition: {
      duration: 1,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
};

const Header = () => {
  return (
    <>
      <HeaderNav variants={parent} initial="initial" animate="animate">
        <Link className="link" to="/">
          <Logo>
            <img src={logo} alt="logo" />
          </Logo>
        </Link>
        <div>
          <Menu>
            <ul>
              <li>
                <a href="/cinema">Cinémé</a>
              </li>
              <li>
                <a href="/serie">Série</a>
              </li>
              <li>
                <a href="/news-films">News films</a>
              </li>
              <li>
                <a href="/news-series">News série</a>
              </li>
            </ul>
          </Menu>
          <Search>
            <Input placeholder="rechercher un film" />
            <Icon>
              <FaSearch />
            </Icon>
          </Search>
        </div>
      </HeaderNav>
    </>
  );
};

export default Header;
