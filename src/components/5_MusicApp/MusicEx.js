import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  background-color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PhoneWrap = styled.div`
  width: 375px;
  height: 667px;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 30px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const TopIcon = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
`;
const DownMenu = styled.div`
  width: 40px;
  height: 100%;
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: 900;
`;
const LineMenu = styled.div`
  width: 40px;
  height: 100%;
  border-radius: 50%;
  border: 1px solid lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  color: lightgray;
`;
const MiddleWrap = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const Msimg = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 10%;
  background-color: lightgray;
`;
const Mstext = styled.div`
  height: 45px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const Mstitle = styled.div`
  color: white;
  font-size: 20px;
  font-weight: 900;
`;
const Mssinger = styled.div`
  color: white;
  font-size: 15px;
  font-weight: 100;
`;
const GageWrap = styled.div`
  width: 100%;
  height: 20px;
`;
const GageBar = styled.div`
  width: 100%;
  height: 3px;
  background-color: lightgray;
`;
const Gage = styled.div`
  width: 10%;
  height: 100%;
  background-color: salmon;
`;
const GageScWarp = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
`;
const StartSc = styled.div`
  color: white;
`;
const EndSc = styled.div`
  color: white;
`;
const EndIcon = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  i {
    color: white;
  }
`;

const Play = styled.div`
  width: 50px;
  height: 100%;
  background-color: salmon;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;

const FootBar = styled.div`
  width: 100%;
  height: 60px;
  border-radius: 50px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;
const NickWrap = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const RoundColor = styled.div`
  width: 40px;
  height: 100%;
  border-radius: 50%;
  background-color: salmon;
`;
const Nickname = styled.div`
  font-weight: 900;
  color: gray;
`;
const NextMs = styled.div`
  width: 40px;
  height: 100%;
  border: 1px solid lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;

export const MusicEx = ({ msdb }) => {
  return (
    <>
      <Wrap>
        <PhoneWrap>
          {msdb.map((music) => (
            <>
              <TopIcon>
                <DownMenu>
                  <i class="fa-solid fa-chevron-down"></i>
                </DownMenu>
                <LineMenu>
                  <i class="fa-solid fa-bars"></i>
                </LineMenu>
              </TopIcon>

              <MiddleWrap>
                <Msimg
                  style={{
                    background: `url(${music.msimg}) no-repeat center/cover`,
                  }}
                />
                <Mstext>
                  <Mstitle> {music.mstitle}</Mstitle>
                  <Mssinger> {music.mssinger}</Mssinger>
                </Mstext>
                <GageWrap>
                  <GageBar>
                    <Gage />
                  </GageBar>
                  <GageScWarp>
                    <StartSc>00:03</StartSc>
                    <EndSc>03:40</EndSc>
                  </GageScWarp>
                </GageWrap>
              </MiddleWrap>

              <EndIcon>
                <i class="fa-solid fa-shuffle"></i>
                <i class="fa-solid fa-backward"></i>
                <Play>
                  <i class="fa-solid fa-pause"></i>
                </Play>
                <i class="fa-solid fa-forward"></i>
                <i class="fa-solid fa-repeat"></i>
              </EndIcon>
              <FootBar>
                <NickWrap>
                  <RoundColor
                    style={{
                      background: `url(${music.nickimg}) no-repeat center/cover`,
                    }}
                  />
                  <Nickname>{music.nickname}</Nickname>
                </NickWrap>
                <NextMs>
                  <i class="fa-solid fa-forward-step"></i>
                </NextMs>
              </FootBar>
            </>
          ))}
        </PhoneWrap>
      </Wrap>
    </>
  );
};
