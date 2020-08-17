import React from "react";

import styled from "styled-components";
import { Row, Col } from "reactstrap";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaRegEnvelope,
} from "react-icons/fa";

import logo from "../images/logo.jpg";

const ContainerFooter = styled.div`
  padding-top: 40px;
  background: ${(props) => props.theme.darkLittle};
  width: 100%;
  color: white;
  div {
    width: 94%;
    margin: 0 auto;
  }
  .first {
    img {
      width: 200px;
      @media (max-width: ${({ theme }) => theme.tablet}) {
        width: 120px;
      }
      @media (max-width: ${({ theme }) => theme.mobile}) {
        width: 100px;
      }
    }
    @media (max-width: ${({ theme }) => theme.mobile}) {
      display: flex;
      justify-content: center;
      margin-bottom: 10px;
    }
  }
  .second {
    p {
      font-size: 0.9rem;
      letter-spacing: 1px;
      @media (max-width: ${({ theme }) => theme.tablet}) {
        font-size: 0.7rem;
      }
    }
    h5 {
      margin-bottom: 20px;
      color: #fabf00;
      font-size: 1.1.rem;
      font-weight: 650;
      @media (max-width: ${({ theme }) => theme.tablet}) {
        font-size: 0.9rem;
        margin-bottom: 10px;
      }
    }
    div {
      display: flex;
      justify-content: space-between;
    }
  }
  .third {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    h5 {
      margin-bottom: 20px;
      color: #fabf00;
      font-size: 1.1.rem;
      font-weight: 650;
      text-align: center;
      @media (max-width: ${({ theme }) => theme.tablet}) {
        margin-bottom: 10px;
        font-size: 0.9rem;
      }
    }
    .reseau-social {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      .icon {
        font-size: 3rem;
        margin-right: 10px;
        margin-bottom: 5px;
        border: 1px solid #fabf00;
        padding: 10px;
        color: #fff;
        border-radius: 50%;
        @media (max-width: ${({ theme }) => theme.tablet}) {
          margin-bottom: 2.5px;
          margin-right: 5px;
          font-size: 2rem;
        }
      }
    }
  }
`;

const Footer = () => {
  return (
    <ContainerFooter>
      <div>
        <Row>
          <Col md={3}>
            <div className="first">
              <img src={logo} alt="logo" />
            </div>
          </Col>
          <Col md={6}>
            <div className="second">
              <h5 className="text-center">Nous sommmes à l'étranger</h5>
              <div>
                <p>Filmstarts Allemagne</p>
                <p>SensaCine Espagnee</p>
              </div>
              <div>
                <p>AdoroCinema Brésil</p>
                <p>Beyazperde Turquie</p>
              </div>
              <p className="text-center">Sensacine México Mexique</p>
            </div>
          </Col>
          <Col md={3}>
            <div className="third">
              <h5>Follow Allociné</h5>
              <div className="reseau-social">
                <FaFacebookF className="icon" />
                <FaInstagram className="icon" />
                <FaLinkedinIn className="icon" />
                <FaTwitter className="icon" />
                <FaRegEnvelope className="icon" />
              </div>
            </div>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <div className="text-center">
              <div style={{ color: "#a6a6a6" }}>
                <span>Contact |</span>
                <span>Qui nous sommes |</span>
                <span>Publicité |</span>
                <span>Données personnelle |</span>
                <span>Revues de presse |</span>
                <span>GGU |</span>
                <span>Jeux concours |</span>
                <span>@Allociné |</span>
                <span>Contact </span>
              </div>
              <p>©2020 Allociné</p>
            </div>
          </Col>
        </Row>
      </div>
    </ContainerFooter>
  );
};

export default Footer;
