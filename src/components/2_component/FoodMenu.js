import "./../../styles/style.css"; //css경로 적는법

export const FoodMenu = ({ menuName, sideMenu }) => {
  // console.log(props);
  // => 프롭스는 오브젝트 형태로 가져오기 때문에 매개변수에 중괄호를 적고 작성할것
  // console.log(menuName);
  return (
    <div>
      오늘의 메뉴는 <i className="menu">{menuName}</i> 사이드 메뉴는
      <i className="side">{sideMenu}</i>
      {/* =>jsx안쪽에 변수를 사용할시 중괄호로 감싸줄것 */}
    </div>
  );
};
