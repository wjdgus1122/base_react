import styled from "styled-components";
import { useState } from "react";

const BtnWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;
const Buy = styled.div`
  width: 100px;
  height: 30px;
  background-color: orange;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: black;
  cursor: pointer;
`;
const Wait = styled.div`
  width: 100px;
  height: 30px;
  background-color: lightblue;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: black;
  cursor: pointer;
`;
const PopMs_1 = styled.div`
  width: 100%;
  height: 50px;
  color: white;
  background-color: lightgray;
  display: ${(props) => props.btn};
  justify-content: center;
  align-items: center;
`;

const PopMs_2 = styled.div`
  width: 100%;
  height: 50px;
  color: white;
  background-color: lightgray;
  display: ${(props) => props.btn_2};
  justify-content: center;
  align-items: center;
`;

export const EventFooter = () => {
  const [chdis, setChdis] = useState("none");
  const [chpop, setChpop] = useState("none");
  const handlebuy = () => {
    setChdis("flex");
    setTimeout(() => {
      setChdis("none");
    }, 1000);
  };

  const handlewait = () => {
    setChpop("flex");
    setTimeout(() => {
      setChpop("none");
    }, 1000);
  };
  return (
    <>
      <BtnWrap>
        <Buy onClick={handlebuy}>구매</Buy>
        <Wait onClick={handlewait}>장바구니</Wait>
      </BtnWrap>
      <PopMs_1 btn={chdis}>구매되셨습니다!</PopMs_1>
      <PopMs_2 btn_2={chpop}>장바구니에 담아졌습니다!</PopMs_2>
    </>
  );
};
