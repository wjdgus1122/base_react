import { Link } from "react-router-dom";

export const PageNotFound = () => {
  return (
    <>
      <h3>페이지를 찾을수 없습니다.</h3>

      <sapn>
        <Link to="/">홈으로 가기 &rarr;</Link>
      </sapn>
    </>
  );
};
