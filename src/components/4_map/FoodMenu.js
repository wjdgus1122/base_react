export const FoodMenu = ({ menus }) => {
  return (
    <>
      <h1
        style={{
          color: "salmon",
        }}
      >
        오늘의 메뉴
      </h1>
      <ul>
        {menus.map((dish) => (
          <li key={dish.id}>
            오늘의 메뉴는 {dish.mainMenu}랑 사이드 메뉴는 {dish.side}다.
          </li>
        ))}
      </ul>
    </>
  );
};
// *map
// =>배열 안의 요소를 새로운 배열로 만들어줌
// =>map(변수 => 새로 만들 배열)

// *key=>key는 react가 어떤 항목을 변경, 추가 또는 삭제할지 식별하는것을 돕는다.
