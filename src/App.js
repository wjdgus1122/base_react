// import { Fragment } from "react";

import TagRule from "./components/1_JsxRule/TagRule";
import ClassComonent from "./components/2_component/ClassComponent";
// import FnComponents from "./components/2_component/FnComponents";
import {
  FnComponents_1,
  FnComponents_2,
} from "./components/2_component/FnComponents";
import { Menus } from "./components/3_props/Menus";
import { Subject } from "./components/3_props/Subject";
import { MenuDb } from "./db";

const App = () => {
  return (
    <div>
      {/* <TagRule /> */}
      {/* 1일차 */}

      {/* <FnComponents /> */}
      {/* <FnComponents_1 />
      <FnComponents_2 /> */}
      {/* <ClassComonent /> */}
      {/* 2일차 */}

      {/* <Menus /> */}
      <Subject ExMenu={MenuDb} />
      {/* 3일차 */}
    </div>
  );
};

export default App;
