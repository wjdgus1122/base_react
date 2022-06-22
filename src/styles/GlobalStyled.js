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
    Link{
      color: black;
    }

    body{
      /* background-color: #555; */
      font-family: 'Noto Sans KR', sans-serif;
    }

    a {
      text-decoration: none;
      color: #1d1d1d;
    }
`;
