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
import { ConEx } from "./components/4_map/ConEx";
import { Content } from "./components/4_map/Content";
import { Ex_1 } from "./components/4_map/Ex_1";
import { Ex_db } from "./components/4_map/Ex_db";
import { FoodMenu } from "./components/4_map/FoodMenu";
import { HomewwkDb } from "./components/4_map/HomewkDb";
import { Homework } from "./components/4_map/Homework";
import { Icons } from "./components/5_MusicApp/Icons";
import { MusicApp } from "./components/5_MusicApp/MusicApp";
import { MusicEx } from "./components/5_MusicApp/MusicEx";
import { ClassEvent } from "./components/6_Event/ClassEvent";
import { ClickEx } from "./components/6_Event/ClickEx";
import { FnEvent } from "./components/6_Event/FnEvent";
import { conDb, MenuDb, MusicDb } from "./db";
import { GlobalStyled } from "./styles/GlobalStyled";

const App = () => {
  return (
    <div>
      <GlobalStyled />
      {/* <TagRule /> */}
      {/* 1일차 */}

      {/* <FnComponents /> */}
      {/* <FnComponents_1 />
      <FnComponents_2 /> */}
      {/* <ClassComonent /> */}
      {/* 2일차 */}

      {/* <Menus /> */}
      {/* <Subject ExMenu={MenuDb} /> */}
      {/* 3일차 */}

      {/* <FoodMenu menus={MenuDb} /> */}
      {/* <Ex_1 exdb={Ex_db} /> */}
      {/* <Content /> */}
      {/* <Homework hmdb={HomewwkDb} /> */}
      {/* <ConEx conData={conDb} /> */}
      {/* 4일차 */}

      {/* <Icons /> */}
      {/* <MusicEx msdb={MusicDb} /> */}
      {/* <MusicApp /> */}
      {/* 5일차 */}

      {/* <ClassEvent /> */}
      {/* <FnEvent /> */}
      <ClickEx />
    </div>
  );
};

export default App;
