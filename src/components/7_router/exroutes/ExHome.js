import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";

const Section_1 = styled.section`
  width: 100%;
  height: 800px;
  background-color: salmon;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  color: white;
`;
const Section_2 = styled.section`
  width: 100%;
  height: 100vh;
  padding: 100px 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Con = styled.div`
  width: 500px;
  height: 700px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  &:hover {
    transform: translateX(${(props) => props.transX})
      translateY(${(props) => props.transY});
  }
  transition: 0.5s;
`;

export const ExHome = () => {
  const [tnX, setTnx] = useState("0px");
  const [tnY, setTnY] = useState("0px");
  const handelmouse = () => {
    setTnx("-20px");
    setTnY("-20px");
  };
  return (
    <>
      <Section_1>메인베너</Section_1>
      <Section_2>
        <Link to="/menu_1">
          <Con
            style={{
              background: `url(https://image.ajunews.com/content/image/2019/07/12/20190712085954144391.jpg) no-repeat center/cover`,
            }}
            onMouseEnter={handelmouse}
            transX={tnX}
            transY={tnY}
          />
        </Link>
        <Link to="/menu_2">
          <Con
            style={{
              background: `url(https://cdn.notefolio.net/img/a6/33/a633e744e98a7d0cd3173df03cec7984722df682f011ede7031e398fc99ec577_v1.jpg) no-repeat center/cover`,
            }}
            onMouseEnter={handelmouse}
            transX={tnX}
            transY={tnY}
          />
        </Link>
      </Section_2>
    </>
  );
};
