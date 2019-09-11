import styled from "styled-components";

import { mainBlue, mainBlackText, secondaryBlue } from "./colors";

export const Container = styled.div`
  margin: 10px 15px;
  line-height: 22px;
  color: ${mainBlackText};

  & p {
    margin: 10px 0 20px 0;
  }

  & ul:first-of-type {
    text-align: center;
    margin: 20px auto;
    border: 1px solid ${mainBlue};
    border-radius: 5px;

    & .bolsas-list__all button,
    & .bolsas-list__all {
      cursor: pointer;
      background-color: ${secondaryBlue};
      color: white;
      font-size: 1.1em;
      padding: 10px 0;
    }

    & .bolsas-list__button button,
    & .bolsas-list__button {
      cursor: pointer;
      color: ${secondaryBlue};
      font-size: 1em;
      padding: 5px 0;
    }

    & button {
      border: 0px;
      width: 100%;
    }
  }
`;
