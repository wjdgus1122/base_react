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

export const Sub = ({ cons }) => {
  console.log(cons);
  return (
    <Section>
      <Bg />
      <TextWrap>
        <Title>{cons.title}</Title>
        <Desc>{cons.desc}</Desc>
      </TextWrap>
    </Section>
  );
};
