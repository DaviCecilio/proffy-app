import React from "react";
import { Link } from "react-router-dom";

import PageLandingContainer from "./styles";

import logoImg from "../../assets/images/logo.svg";
import landingImg from "../../assets/images/landing.svg";
import studyIcon from "../../assets/images/icons/study.svg";
import giveClassesIcon from "../../assets/images/icons/give-classes.svg";
import purpleHearthIcon from "../../assets/images/icons/purple-heart.svg";

function Landing() {
  return (
    <PageLandingContainer>
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="Logo - Proffy" />
          <h2>Sua plataforma de estudos online</h2>
        </div>
        <img src={landingImg} alt="" className="hero-image" />

        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Estudar - Proffy" />
            Estudar
          </Link>

          <Link to="/give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="Dar aulas - Proffy" />
            Dar aulas
          </Link>
        </div>

        <span className="total-connections">
          Total de 200 conexões realizadas.
          <img src={purpleHearthIcon} alt="Coração Roxo" />
        </span>
      </div>
    </PageLandingContainer>
  );
}

export default Landing;
