import styled from "styled-components";

const Section = styled.section`
  padding: 200px 400px;
  display: flex;
  justify-content: space-between;
`;

const Bg = styled.div`
  width: 400px;
  height: 500px;
  background-color: lightgrey;
`;

const TextWrap = styled.div`
  max-width: 500px;
`;

const Title = styled.h3`
  margin-top: 100px;
  margin-bottom: 30px;
  font-size: 50px;
  font-weight: 600;
`;

const Desc = styled.p`
  opacity: 0.7;
  font-weight: 300;
  line-height: 1.5rem;
`;

export const Sub1 = () => {
  return (
    <Section>
      <Bg />
      <TextWrap>
        <Title>서브페이지1</Title>
        <Desc>
          모든 사람은 의견의 자유와 표현의 자유에 대한 권리를 가진다. 이러한
          권리는 간섭없이 의견을 가질 자유와 국경에 관계없이 어떠한 매체를
          통해서도 정보와 사상을 추구하고, 얻으며, 전달하는 자유를 포함한다.
          모든 사람은 사회의 일원으로서 사회보장을 받을 권리를 가지며, 국가적
          노력과 국제적 협력을 통하여, 그리고 각 국가의 조직과 자원에 따라서
          자신의 존엄과 인격의 자유로운 발전에 불가결한 경제적, 사회적 및 문화적
          권리들을 실현할 권리를 가진다.
        </Desc>
      </TextWrap>
    </Section>
  );
};
