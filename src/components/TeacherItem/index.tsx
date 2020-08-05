import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import TeacherItemContainer from "./styles";

const TeacherItem = () => {
  return (
    <TeacherItemContainer>
      <article className="teacher-item">
        <header>
          <img
            src="https://lh3.googleusercontent.com/a-/AOh14GjJU00mhsBMW-XYsrHEO1N7ASvKG6D4j10VozRzqh0=s96-c-rg-br100"
            alt="Foto Professor"
          />
          <div>
            <strong>Davi Cecílio</strong>
            <span>Matemática</span>
          </div>
        </header>

        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
          <br />
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </p>

        <footer>
          <p>
            Preço/Hora
            <b> R$ 80,00</b>
          </p>
          <button type="button">
            <img src={whatsappIcon} alt="Whatsapp" />
            Entrar em contato
          </button>
        </footer>
      </article>
    </TeacherItemContainer>
  );
};

export default TeacherItem;
