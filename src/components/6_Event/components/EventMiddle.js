import styled from "styled-components";

const MiddleWrap = styled.div`
  width: 100%;
`;

const ProductImg = styled.div`
  width: 200px;
  height: 200px;
  background: url(https://shopping-phinf.pstatic.net/main_1232451/12324511140.20210331172844.jpg?type=f640)
    no-repeat center/cover;
  margin: 30px auto;
`;
const TextWrap = styled.div`
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  margin-bottom: 30px;
  margin: 0 10px;
`;
const Title = styled.div`
  width: 100%;
  height: 30px;
  border-bottom: 1px solid lightgray;
  font-size: 20px;
  color: #1d1d1d;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Text = styled.div`
  font-size: 20px;
  color: #1d1d1d;
  margin: 10px 0;
`;

export const EventMiddle = () => {
  return (
    <MiddleWrap>
      <ProductImg />
      <TextWrap>
        <Title>제품</Title>
        <Text>
          [당일발송/본사직영] 비프렌드 G2 마우스 3360센서 정확한 유선마우스
          사무용 게이밍
        </Text>
      </TextWrap>
    </MiddleWrap>
  );
};
