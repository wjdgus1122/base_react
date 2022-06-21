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

const ButtonWrap = styled.div`
  width: 100%;
  height: 100vh;
  background-color: gray;
  display: ${(props) => props.dis};
  justify-content: center;
  align-items: center;
`;

const PopMs = styled.div`
  width: 500px;
  height: 300px;
  background-color: white;
  font-size: 50px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 100px;
  font-size: 50px;
`;
const ColorBox = styled.div`
  width: 500px;
  height: 500px;
  background-color: ${(props) => props.bgColor};
  transform: rotateZ(${(props) => props.rotate});
  transition: 1s;
`;
const Btwrap = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
`;

export const ClickEx = () => {
  // const [color, setcolor] = useState("gold");
  const [bool, SetBool] = useState(true);
  const [mscolor, setMscolor] = useState("salmon");
  const [distype, setDistype] = useState("none");
  const [color, setColor] = useState("salmon");

  // const handleColor = () => {
  //   if (bool) {
  //     setcolor("black");
  //     SetBool(false);
  //   } else if (!bool) {
  //     setcolor("gold");
  //     SetBool(true);
  //   }
  // };

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
  const handlePopMs = () => {
    if (bool) {
      setDistype("flex");
      SetBool(false);
    } else if (!bool) {
      setDistype("none");
      SetBool(true);
    }
  };

  const [chrotate, setChrotate] = useState("0deg");
  const handlered = () => {
    setColor("red");
  };
  const handleblue = () => {
    setColor("blue");
  };
  const handleyellow = () => {
    setColor("yellow");
  };
  const handlerotate = () => {
    if (chrotate == "360deg") {
      setChrotate("0deg");
    } else {
      setChrotate("360deg");
    }
  };
  return (
    <>
      {/* <Box bgColor={color} onClick={handleColor}>
        클릭해보세요
      </Box>
      <MouseBox
        bgmouseColor={mscolor}
        onMouseEnter={handleMouseOn}
        onMouseLeave={handleMouseLeave}
      /> */}
      {/* <button onClick={handlePopMs}>눌러보세요</button>
      <ButtonWrap dis={distype}>
        <PopMs>야호오오오오오</PopMs>
      </ButtonWrap> */}

      <Wrap>
        버튼을 눌러보세요!
        <ColorBox bgColor={color} rotate={chrotate} />
        <Btwrap>
          <button onClick={handlered}>Red</button>
          <button onClick={handleblue}>Blue</button>
          <button onClick={handleyellow}>Yellow</button>
          <button onClick={handlerotate}>회전</button>
        </Btwrap>
      </Wrap>
    </>
  );
};
