import React, { useState } from "react";

import Modal from "../Modal/index";

import axios from "axios";

import "./style.css";

export default function Lista() {
  const baseURL = "https://testapi.io/api/redealumni/scholarships";

  const [visible, setVisible] = useState(false);
  const [bolsas, setBolsas] = useState([]);
  const [selected, setSelected] = useState(true);

  axios
    .get(baseURL)
    .then(res => {
      setBolsas(res.data);
    })
    .catch(err => console.log(err));

  // useEffect(() => {
  //   axios
  //     .get(baseURL)
  //     .then(res => {
  //       setBolsas(res.data);
  //     })
  //     .catch(err => console.log(err));
  // });

  return (
    <>
      <Modal
        visible={visible}
        close={() => setVisible(false)}
        bolsas={bolsas}
        selected={selected}
        UndoSelected={() => setSelected(false)}
        OneSelected={() => setSelected(true)}
      />
      <ul className="bolsas-list">
        <li className="bolsas-list__all">
          <button type="button">Todos os semestres</button>
        </li>
        <li className="bolsas-list__button bolsas-list__button--second">
          <button type="button"> 2° semestre de 2019</button>
        </li>
        <li className="bolsas-list__button bolsas-list__button--first">
          <button type="button"> 1° semestre de 2020</button>
        </li>
      </ul>
      <ul className="bolsas-add">
        <li className="bolsas-add__modal">
          <button
            type="button"
            onClick={() => {
              setVisible(true);
            }}
          >
            <i className="fas fa-plus-circle"></i>
          </button>
        </li>
        <li className="bolsas-add__text">
          <h3>
            <strong>Adicionar bolsa</strong>
          </h3>
          <p>Clique para adicionar bolsas de cursos do seu interesse</p>
        </li>
      </ul>
    </>
  );
}
