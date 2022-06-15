import "../../styles/menu.css";

export const Subject = ({ ExMenu }) => {
  //   console.log(sub);
  return (
    <>
      <h3 className="title">오늘의 메뉴</h3>
      <ul>
        <li>
          오늘의 메뉴는 {ExMenu[0].mainMenu} 사이드 {ExMenu[0].side}
        </li>
        <li>
          오늘의 메뉴는 {ExMenu[1].mainMenu} 사이드 {ExMenu[1].side}
        </li>
        <li>
          오늘의 메뉴는 {ExMenu[2].mainMenu} 사이드 {ExMenu[2].side}
        </li>
        <li>
          오늘의 메뉴는 {ExMenu[3].mainMenu} 사이드 {ExMenu[3].side}
        </li>
        <li>
          오늘의 메뉴는 {ExMenu[4].mainMenu} 사이드 {ExMenu[4].side}
        </li>
      </ul>
    </>
  );
};
