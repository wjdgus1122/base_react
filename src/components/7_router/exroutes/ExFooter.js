import styled from "styled-components";

const ExFooterWrap = styled.footer`
  width: 100%;
  height: 300px;
  padding: 50px 150px;
  background-color: gray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const IconWrap = styled.div`
  width: 200px;
  font-size: 30px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  i {
    cursor: pointer;
  }
`;
const TextWrap = styled.div`
  width: 400px;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;
const Text_1 = styled.h3`
  font-size: 20px;
  color: white;
`;
const Text_2 = styled.h3`
  font-size: 15px;
  color: white;
`;

export const ExFooter = () => {
  return (
    <>
      <ExFooterWrap>
        <IconWrap>
          <i class="fa-brands fa-youtube"></i>
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-instagram"></i>
        </IconWrap>
        <TextWrap>
          <Text_1>info . menu_1 . menu_2</Text_1>
          <Text_2>FruitLike : Marketing</Text_2>
        </TextWrap>
      </ExFooterWrap>
    </>
  );
};
