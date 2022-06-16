export const Ex_1 = ({ exdb }) => {
  return (
    <>
      <h2 style={{ margin: "30px 0" }}>카카오</h2>
      <div style={{ display: "flex" }}>
        {exdb.map((text) => (
          <div key={text.id} style={{ width: "350px", margin: "0 20px" }}>
            <img
              src="https://dimg.donga.com/wps/NEWS/IMAGE/2022/06/16/113954415.1.jpg"
              style={{ width: "350px", height: "200px" }}
            />
            <div
              style={{ fontSize: "20px", fontWeight: "900", margin: "15px 0" }}
            >
              {text.title}
            </div>
            <div style={{ fontSize: "20px" }}>
              {text.text.slice(0, 50) + "..."}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
