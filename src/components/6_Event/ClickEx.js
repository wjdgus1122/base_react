import { useState } from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 300px;
  height: 300px;
  background-color: ${(props) => props.bgColor};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: white;
`;

const MouseBox = styled.div`
  width: 350px;
  height: 350px;
  background-color: ${(props) => props.bgmouseColor};
`;

export const ClickEx = () => {
  const [color, setcolor] = useState("gold");
  const [bool, SetBool] = useState(true);
  const [mscolor, setMscolor] = useState("salmon");
  const handleColor = () => {
    if (bool) {
      setcolor("black");
      SetBool(false);
    } else if (!bool) {
      setcolor("gold");
      SetBool(true);
    }
  };

  const handleMouseOn = () => {
    if (bool) {
      setMscolor("purple");
      SetBool(false);
    }
  };
  const handleMouseLeave = () => {
    if (!bool) {
      setMscolor("salmon");
      SetBool(true);
    }
  };
  return (
    <>
      <Box bgColor={color} onClick={handleColor}>
        클릭해보세요
      </Box>
      <MouseBox
        bgmouseColor={mscolor}
        onMouseEnter={handleMouseOn}
        onMouseLeave={handleMouseLeave}
      />
      <button mouse></button>
    </>
  );
};
