import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 250px;
  height: 250px;
  background-color: ${(props) => props.bgcolor};
  transform: translateX(${(props) => props.transX})
    translateY(${(props) => props.transY}) rotateZ(${(props) => props.rotate});
  transition: 1s;
  background: ${(props) => props.cimg};
`;

export const MakeEvent = () => {
  const [color, setColor] = useState("salmon");
  const [transX, setTransX] = useState("0px");
  const [transY, setTransY] = useState("0px");
  const [rotate, setRotate] = useState("0deg");
  const [chimg, setChimg] = useState("salmon");

  const handlebox = () => {
    setColor("gold");
    setTransX("500px");
    setTransY("500px");
    if (rotate == "360deg") {
      setRotate("0deg");
    } else {
      setRotate("360deg");
    }
    setChimg(
      "url(https://dthezntil550i.cloudfront.net/p6/latest/p62007150224230440002288000/ed8e25a2-d8dd-43ac-8d18-77712b287dc6.png) no-repeat center/cover"
    );
  };
  const handlebox_2 = () => {
    setColor("black");
    setTransX("300px");
    setTransY("700px");
    if (rotate == "360deg") {
      setRotate("0deg");
    } else {
      setRotate("360deg");
    }
    setChimg(
      "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS0QpiHXcbcEWVSsrH0qNT2rQZkMZKMjo91w&usqp=CAU) no-repeat center/cover"
    );
  };
  const handlenew = () => {
    setColor("salmon");
    setTransX("0px");
    setTransY("0px");
    if (rotate == "360deg") {
      setRotate("0deg");
    } else {
      setRotate("360deg");
    }
    setChimg("salmon");
  };
  return (
    <>
      <button onClick={handlebox}>변화</button>
      <button onClick={handlebox_2}>변화2</button>
      <button onClick={handlenew}>복구!</button>
      <Box
        bgcolor={color}
        transX={transX}
        transY={transY}
        rotate={rotate}
        cimg={chimg}
      />
    </>
  );
};
