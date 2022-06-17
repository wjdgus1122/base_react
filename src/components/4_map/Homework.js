export const Homework = ({ hmdb }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          padding: "100px 150px",
          justifyContent: "space-between",
          backgroundColor: "darkgray",
        }}
      >
        {hmdb.map((con) => (
          <a
            href={con.hwpage}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <div
              style={{
                width: "500px",
                height: "550px",
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 15px 13px",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "400px",
                  backgroundImage: `url(${con.hwimg})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              ></div>
              <div
                style={{
                  width: "100%",
                  height: "150px",
                  backgroundColor: "gray",
                  padding: "0 15px",
                  boxSizing: "border-box",
                }}
              >
                <h3
                  style={{
                    fontSize: "30px",
                    fontWeight: "900",
                    padding: "15px 0",
                    color: "white",
                  }}
                >
                  {con.hwtitle}
                </h3>
                <p style={{ color: "white" }}>
                  {con.hwtext.slice(0, 100) + "..."}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </>
  );
};
