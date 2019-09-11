import styled from "styled-components";

import {
  overlayBlackModal,
  secondaryBlue,
  mainBlackText,
  mainGrayBorder
} from "../../style/colors";

export const ModalOutter = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${overlayBlackModal};

  & .modal-main {
    position: fixed;
    background: white;
    width: 95%;
    height: 80%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    overflow-y: auto;

    & .modal-footer {
      margin: 0 15px;
      border-top: 1px solid gray;
    }

    & button:first-of-type {
      cursor: pointer;
      margin: 20px 15px;
      padding: 10px;
      border: 1px solid ${secondaryBlue};
      border-radius: 5px;
      color: ${secondaryBlue};
      font-size: 1.1em;
    }

    & button:last-of-type {
      cursor: pointer;
      margin: 20px 15px;
      padding: 10px;
      border: 1px solid ${mainGrayBorder};
      border-radius: 5px;
      color: ${mainBlackText};
      font-size: 1.1em;
    }
  }
`;
