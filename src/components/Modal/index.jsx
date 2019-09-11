import React from "react";

import { ModalOutter } from "./style";
import "./style.css";

const Modal = ({
  visible,
  close,
  bolsas,
  selected,
  UndoSelected,
  OneSelected
}) => (
  <ModalOutter className={visible ? "display-block" : "display-none"}>
    <button className="closeIcon" onClick={close}>
      <i className="fas fa-times"></i>
    </button>
    <section className="modal-main">
      {bolsas.map(bolsa => (
        <ul key={bolsa.course.name}>
          <img src={bolsa.university.logo_url} alt={bolsa.university.name} />
          <li>
            <h3>
              <strong>{bolsa.course.name}</strong>
            </h3>
            <h4>{bolsa.course.kind}</h4>
            <p>
              Bolsa de <span>{bolsa.discount_percentage}%</span>
            </p>
            <p>R$ {bolsa.price_with_discount}/mês</p>
          </li>
        </ul>
      ))}
      <div className="modal-footer">
        <button onClick={close}>Cancelar</button>
        {selected ? (
          <button type="button" className="whiteBg">
            Adicionar bolsa
          </button>
        ) : (
          <button type="button" disabled className="grayBg">
            Adicionar bolsa
          </button>
        )}
      </div>
    </section>
  </ModalOutter>
);

export default Modal;
