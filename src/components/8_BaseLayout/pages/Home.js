import styled from "styled-components";
import { Link } from "react-router-dom";

const Banner = styled.div`
  height: 800px;
  background-color: lightgray;
`;
const Section = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 120px 400px;
`;
const Content = styled.div`
  width: 45%;
  height: 500px;
  background-color: lightgray;
  box-shadow: 15px 15px 20px rgba(0, 0, 0, 0.3);
  &:hover {
    transform: translate(15px, 15px);
    box-shadow: none;
  }
  transition: 0.5s;
  cursor: pointer;
  a {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

export const Home = () => {
  return (
    <>
      <Banner></Banner>

      <Section>
        <Content>
          <Link to="/sub1"></Link>
        </Content>
        <Content>
          <Link to="/sub2"></Link>
        </Content>
      </Section>
    </>
  );
};
