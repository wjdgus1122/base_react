import { FoodMenu } from "../2_component/FoodMenu";

export const Menus = () => {
  return (
    <>
      {/* *props
      =><컴포넌트 프롭스명="값" /> */}
      <h3>아침메뉴</h3>
      <FoodMenu menuName="콩나물밥" sideMenu="따뜻한물" />

      <h3>점심메뉴</h3>
      <FoodMenu menuName="햄버거" sideMenu="콜라" />

      <h3>저녁메뉴</h3>
      <FoodMenu menuName="포카칩" sideMenu="맥주" />
    </>
  );
};
