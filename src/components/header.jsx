import React, { useState, useEffect } from "react";

import { useHistory } from "react-router-dom";
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
import { Link, NavLink } from "react-router-dom";

import MenuHumb from "./HumburgeurMenu/Menu";
import Burger from "./HumburgeurMenu/Burger";

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
  const [query, setQuery] = useState("");
  const history = useHistory();
  const searchQuery = (query) => {
    history.push(`/search/${query}`);
    window.location.reload(false);
  };

  const [change, setChange] = useState({
    background: "transparent",
    boxShadow: "",
    transition: "background 0.6s",
  });
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const isChange = window.scrollY < 150;
      if (isChange !== true) {
        setChange({
          background: "#fff",
          boxShadow: "5px 5px 20px 5px rgba(0,0,0,0.4)",
          transition: "background 0.6s",
        });
      } else {
        setChange({
          background: "transparent",
          boxShadow: "",
          transition: "background 0.6s",
        });
      }

      return () => {
        window.removeEventListener("scroll");
      };
    });
  }, []);

  const [open, setOpen] = useState(false);
  return (
    <>
      <HeaderNav
        style={change}
        variants={parent}
        initial="initial"
        animate="animate"
      >
        <Link className="link" to="/">
          <Logo>
            <img src={logo} alt="logo" />
          </Logo>
        </Link>
        <div>
          <Menu>
            <ul>
              <li>
                <NavLink
                  className="link"
                  exact
                  activeClassName="current"
                  to="/"
                >
                  Cinéma
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="link"
                  exact
                  activeClassName="current"
                  to="/serie"
                >
                  Série
                </NavLink>
              </li>
            </ul>
          </Menu>
          <Search>
            <Input
              placeholder="rechercher un film"
              name="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <Icon onClick={() => searchQuery(query)}>
              <FaSearch />
            </Icon>
          </Search>
          <MenuHumb open={open} setOpen={setOpen} />
          <Burger open={open} setOpen={setOpen} />
        </div>
      </HeaderNav>
    </>
  );
};

export default Header;
