import styled from "styled-components";

const Section = styled.section`
  width: 100%;
  height: 100vh;
  padding: 100px 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TextWrap = styled.div`
  width: 700px;
  margin-left: 70px;
`;
const Title = styled.div`
  font-size: 50px;
  color: gray;
  font-weight: 900;
  margin-bottom: 30px;
`;
const Text = styled.div`
  font-size: 20px;
  color: gray;
`;

const Con = styled.div`
  width: 500px;
  height: 700px;
`;

export const Menu_1 = () => {
  return (
    <Section>
      <Con
        style={{
          background: `url(https://image.ajunews.com/content/image/2019/07/12/20190712085954144391.jpg) no-repeat center/cover`,
        }}
      />
      <TextWrap>
        <Title>서브페이지1</Title>
        <Text>
          오은영 박사가 노필터 부부에게 경청하는 자세를 강조했다. 6월 20일
          방송된 MBC '오은영의 리포트-결혼지옥'에서는 서로에게 고성과 폭언을
          쏟아내는 노필터 부부가 출연했다. 미용실을 함께 운영하는 부부. 아내는
          손님을 앞에 두고 남편에게 욕설을 했다. 남편 역시 맞받아치며 미용실은
          부부싸움터로 변질됐다.
        </Text>
      </TextWrap>
    </Section>
  );
};
