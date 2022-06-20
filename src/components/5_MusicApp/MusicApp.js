import {
  faBackward,
  faBars,
  faChevronDown,
  faForward,
  faForwardStep,
  faPause,
  faRandom,
  faShuffle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { BottomPlay } from "./components/BottomPlay";
import { BtnWrap } from "./components/BtnWrap";
import { Header } from "./components/Header";
import { PlayWrap } from "./components/PlayWrap";
import { TitleWrap } from "./components/TitleWrap";

const Wrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;
const Section = styled.section`
  width: 375px;
  height: 667px;
  background-color: #1d1d1d;
  border-radius: 25px;
  padding: 40px;
`;
const CoverImg = styled.div``;

export const MusicApp = () => {
  return (
    <Wrap>
      <Section>
        <Header />
        <CoverImg />
        <TitleWrap />

        <PlayWrap />

        <BtnWrap />

        <BottomPlay />
      </Section>
    </Wrap>
  );
};
