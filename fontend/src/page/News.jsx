import { Navbar } from "../components/navbar";
export const News = () => {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Navbar />
      <div
        style={{
          width: "40vw",
          height: "120vh",
          backgroundColor: "black",
          padding: "30px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#292b2d",
          }}
        >
          <img src="details.jpeg"></img>
          <div
            style={{
              fontStyle: "inherit",
              color: "white",
              // fontWeight: "800px",
            }}
          >
            <h3>Airbnb bans 'party houses' even following mass shooting</h3>

            <p
              style={{
                display: "flex",
                lineHeight: "2.5rem",
                fontSize: "13px",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum. Sed
              ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem.Lorem ipsum dolor sit
              amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              // flexDirection: "row",
              // flexWrap: "wrap",
              justifyContent: "space-between",
              width: "40vw",
              height: "150px",
            }}
          >
            <img
              style={{
                // backgroundSize: "cover",
                border: "1px solid",
                borderRadius: "5px",
                width: "250px",
              }}
              src="first.jpeg"
            />
            <img
              style={{
                // backgroundSize: "cover",
                border: "1px solid",
                borderRadius: "5px",
                width: "250px",
              }}
              src="second.jpeg"
            />
            <img
              style={{
                // backgroundSize: "cover",
                border: "1px solid",
                borderRadius: "5px",
                width: "250px",
              }}
              src="third.jpeg"
            />
          </div>
          <div
            style={{
              fontStyle: "inherit",
              color: "white",
              // fontWeight: "800px",
            }}
          >
            <p
              style={{
                display: "flex",
                lineHeight: "2.5rem",
                fontSize: "13px",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum. Sed
              ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem.Lorem ipsum dolor sit
              amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div style={{ color: "white" }}>asd</div>
      </div>
    </div>
  );
};
