import styled from "styled-components";
import { mainStyle } from "../../styles/GlobalStyled";

const Box = styled.div`
  width: 300px;
  height: 300px;
  background-color: ${(props) => props.bgColor};
  border: 1px solid ${(props) => props.bgColor};
  /* =>프롭스 받아올때 사용방법 */
  font-size: ${mainStyle.fontSize};
`;

export const Content = () => {
  return (
    <>
      <Box bgColor={mainStyle.color}>Styled components</Box>
      {/* =>스타일 컴포넌트 사용할때 프롭스 전달 */}
    </>
  );
};
