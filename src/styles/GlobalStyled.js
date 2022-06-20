import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

export const mainStyle = {
  color: "#F24C4C",
  fontSize: "26px",
};

export const GlobalStyled = createGlobalStyle`
    ${reset}
    *{
        box-sizing: border-box;
    }

    body{
      background-color: #555;
    }

    a {
      text-decoration: none;
    }
`;
