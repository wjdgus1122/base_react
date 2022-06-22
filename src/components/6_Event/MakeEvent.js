import styled from "styled-components";
import { EventFooter } from "./components/EventFooter";
import { EventHeader } from "./components/EventHeader";
import { EventMiddle } from "./components/EventMiddle";
const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  background-color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Phone = styled.div`
  width: 375px;
  height: 660px;
  border-radius: 25px;
  border: 5px solid black;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding: 40px; */
`;

export const MakeEvent = () => {
  return (
    <>
      <Wrap>
        <Phone>
          <EventHeader />

          <EventMiddle />
          <EventFooter />
        </Phone>
      </Wrap>
    </>
  );
};
