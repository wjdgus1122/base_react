import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Icon = styled.div`
  i {
    color: gray;
  }

  svg {
    color: red;
  }
`;

export const Icons = () => {
  return (
    <Icon>
      <i class="fa-brands fa-android"></i>
      <FontAwesomeIcon icon={faPlay} />
    </Icon>
  );
};
// i태그로 코드를 불러오면 import를 안해도 됨 단점은 다른사이트를 거쳐서 오기때문에 로딩이 느려짐
// fontawsomeicon으로 쓰면 import를 매번 해야하지만 cdn을 안깔아도 되고 로딩이 빠름
