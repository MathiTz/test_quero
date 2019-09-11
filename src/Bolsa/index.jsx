import React from "react";

import { Container } from "../style/global";
import "./style.css";
import List from "../components/Lista/index";

export default function Bolsa() {
  return (
    <Container>
      <section className="container-body__account">
        <i className="fas fa-chevron-left"></i>
        Minha Conta
      </section>
      <section className="container-body__bolsas">
        <h1>Bolsas Favoritas</h1>
        <p>
          Adicione bolsas de cursos e faculdade do seu interesse e receba
          atualizações com as melhores ofertas disponíveis
        </p>
        <List />
      </section>
    </Container>
  );
}
