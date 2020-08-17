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
    @media (max-width: ${({ theme }) => theme.mobile}) {
    }
  }
  @media (max-width: ${({ theme }) => theme.tablet}) {
    padding: 5px 4.5rem 5px 4.5rem;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 5px 3rem 5px 3rem;
    height: 50px;
  }
  @media (max-width: 474px) {
    height: 50px;
  }
  @media (max-width: 375px) {
    height: 50px;
  }
  @media (max-width: 320px) {
    height: 50px;
  }
`;

export const Logo = styled.div`
  img {
    width: 60px;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      width: 40px;
    }
    @media (max-width: 474px) {
      height: 40px;
    }
    @media (max-width: 375px) {
      height: 40px;
    }
    @media (max-width: 320px) {
      height: 40px;
    }
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
    @media (max-width: ${({ theme }) => theme.mobile}) {
      display: none;
    }
    @media (max-width: 474px) {
      display: none;
    }
    @media (max-width: 375px) {
      display: none;
    }
    @media (max-width: 320px) {
      display: none;
    }
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
  @media (max-width: 474px) {
    height: 30px;
    width: 160px;
  }
  @media (max-width: 375px) {
    height: 25px;
    width: 150px;
  }
  @media (max-width: 320px) {
    height: 25px;
    width: 100px;
  }
`;
export const Search = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-right: 60px;
  }
  @media (max-width: 474px) {
    margin-right: 60px;
  }
  @media (max-width: 375px) {
    margin-right: 300px;
  }
  @media (max-width: 320px) {
  }
`;

export const Icon = styled.div`
  height: 35px;
  padding: 10px;
  background: ${(props) => props.theme.orange};
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  transition: background 0.7s;
  @media (max-width: 474px) {
    height: 30px;
  }
  @media (max-width: 375px) {
    height: 25px;
    padding: 5px;
  }
  @media (max-width: 320px) {
    height: 25px;
    padding: 5px;
  }

  &:hover {
    background: ${(props) => props.theme.orangeHover};
    cursor: pointer;
  }
`;
