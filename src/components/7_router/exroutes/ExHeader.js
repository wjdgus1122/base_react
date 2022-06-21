import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const HeaderWrap = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 100px;
  position: relative;
  overflow: hidden;
  svg {
    font-size: 20px;
    color: ${(props) => props.color};
    cursor: pointer;
  }
`;
const Menu = styled.div`
  width: 300px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  right: ${(props) => props.po};
  transition: 1s;
`;

const StyledLink = styled(Link)`
  font-size: 30px;
  font-weight: 900;
  color: black;
`;
const StyledLink_2 = styled(Link)`
  font-size: 20px;
  font-weight: 500;
  color: black;
`;

export const ExHeader = () => {
  const [posi, setPosi] = useState("-300px");
  const [chcolor, setChcolor] = useState("black");
  const handleMenu = () => {
    if (posi == "-300px") {
      setPosi("300px");
    } else {
      setPosi("-300px");
    }
    if (chcolor == "black") {
      setChcolor("lightgray");
    } else {
      setChcolor("black");
    }
  };
  return (
    <HeaderWrap>
      <StyledLink to="/">로고</StyledLink>
      <FontAwesomeIcon icon={faBars} onClick={handleMenu} color={chcolor} />
      <Menu po={posi}>
        <StyledLink_2 to="/menu_1">메뉴1</StyledLink_2>
        <StyledLink_2 to="/menu_2">메뉴2</StyledLink_2>
      </Menu>
    </HeaderWrap>
  );
};
