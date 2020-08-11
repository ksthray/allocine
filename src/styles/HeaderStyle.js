import styled from "styled-components";
import { motion } from "framer-motion";

export const HeaderNav = styled(motion.div)`
  display: flex;
  padding: 5px 6.5rem 5px 6.5rem;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;

  div {
    display: flex;
  }
`;

export const Logo = styled.div`
  img {
    width: 60px;
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  ul {
    display: flex;
    list-style: none;
    position: relative;
    top: 10px;
    padding: 10px;
    margin-right: 30px;
    li {
      list-style-type: none;
      margin-right: 30px;
      padding: 0 1.2rem 0 1.2rem;

      .link {
        text-decoration: none;
        color: #ccc;
        border: none;
        transition: color 0.7s;

        &:hover {
          color: #fabf00;
        }
      }
      a.current {
        color: #fabf00;
      }
    }
  }
`;

export const Input = styled.input`
  height: 35px;
  padding-left: 10px;
  border: 1px solid #ccc;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;

  &:focus {
    outline: none;
    border: none;
    border: 1px solid #ccc;
  }
`;
export const Search = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;
`;

export const Icon = styled.div`
  height: 35px;
  padding: 10px;
  background: #fabf00;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  transition: background 0.7s;

  &:hover {
    background: #cc9c00;
    cursor: pointer;
  }
`;
