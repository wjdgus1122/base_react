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

export const Menu_2 = () => {
  return (
    <Section>
      <Con
        style={{
          background: `url(https://cdn.notefolio.net/img/a6/33/a633e744e98a7d0cd3173df03cec7984722df682f011ede7031e398fc99ec577_v1.jpg) no-repeat center/cover`,
        }}
      />
      <TextWrap>
        <Title>서브페이지2</Title>
        <Text>
          그룹 이달의 소녀(희진, 현진, 하슬, 여진, 비비, 김립, 진솔, 최리, 이브,
          츄, 고원, 올리비아 혜)가 Mnet '퀸덤2' 준우승 후 서머송(여름 노래)으로
          컴백했다. 6월 20일 오후 4시 30분 서울 강남구 코엑스 오리토리움에서
          이달의 소녀 새 미니 앨범 'Flip That'(플립 댓) 발매 기념 쇼케이스가
          진행됐다
        </Text>
      </TextWrap>
    </Section>
  );
};
