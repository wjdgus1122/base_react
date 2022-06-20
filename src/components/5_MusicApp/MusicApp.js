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
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const CoverImg = styled.div`
  width: 90%;
  height: 250px;
  border-radius: 25px;
  box-shadow: 0 15px 20px 10px rgba(0, 0, 0, 0.3);
  margin: 30px 0;
`;

export const MusicApp = () => {
  return (
    <Wrap>
      <Section>
        <Header />
        <CoverImg
          style={{
            background: `url(https://cdnimg.melon.co.kr/cm2/album/images/108/90/384/10890384_20220314111504_500.jpg?4b9dba7aeba43a4e0042eedb6b9865c1) no-repeat center/cover`,
          }}
        />
        <TitleWrap />

        <PlayWrap />

        <BtnWrap />

        <BottomPlay />
      </Section>
    </Wrap>
  );
};
