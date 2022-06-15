// import { Fragment } from "react";

import TagRule from "./components/1_JsxRule/TagRule";
import ClassComonent from "./components/2_component/ClassComponent";
// import FnComponents from "./components/2_component/FnComponents";
import {
  FnComponents_1,
  FnComponents_2,
} from "./components/2_component/FnComponents";
import { FoodMenu } from "./components/2_component/FoodMenu";

const App = () => {
  return (
    <div>
      {/* <TagRule /> */}
      {/* 1일차 */}

      {/* <FnComponents /> */}
      {/* <FnComponents_1 />
      <FnComponents_2 /> */}
      {/* <ClassComonent /> */}

      {/* *props
      =><컴포넌트 프롭스명="값" /> */}
      <h3>아침메뉴</h3>
      <FoodMenu menuName="콩나물밥" sideMenu="따뜻한물" />

      <h3>점심메뉴</h3>
      <FoodMenu menuName="햄버거" sideMenu="콜라" />

      <h3>저녁메뉴</h3>
      <FoodMenu menuName="포카칩" sideMenu="맥주" />
      {/* 2일차 */}
    </div>
  );
};

export default App;
