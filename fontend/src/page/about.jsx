import { Navbar } from "../components/navbar";
import "./About.css";
import edit from "../img/edit.png";
import tv from "../img/television.png";
import camera from "../img/photo-camera.png";

export const About = () => {
  return (
    <div
      style={{ width: "100%", backgroundColor: "black" }}
      className="d-flex flex-column"
    >
      <Navbar />
      <div className="flex">
        <div className="flex">
          <div
            style={{
              color: "white",
              width: "57vw",
              fontWeight: "500",
              fontSize: "17px",
              justifyContent: "start",
              display: "flex",
              marginTop: "3%",
              marginBottom: "0.5%",
              marginLeft: "-20px",
            }}
          >
            ABOUT US
          </div>
          <div
            style={{
              backgroundColor: "red",
              height: "3px",
              width: "58vw",
              marginBottom: "1.5%",
            }}
            className="flex"
          ></div>
        </div>
        <div className="flexe" style={{ borderRadius: "5px" }}>
          <img
            style={{
              width: "30vw",
              display: "flex",
              flexDirection: "row",
              marginLeft: "1%",
            }}
            src="https://lh3.googleusercontent.com/tUlHpfvQU4pituhklKjni7xdOBN6gtlS00Gj-bsdw35y15ThcnIF1ZUd53DxjUocMOALrv-os3oh-8IXnIw4t8yEvAVkcwBslAmNwqK55g"
            alt=""
          ></img>
          <div style={{ width: "28vw", height: "21vw" }} className="flex">
            <div
              style={{
                fontWeight: "900",
                color: "white",
                fontSize: "20px",
                display: "flex",
                marginBottom: "3%",
              }}
            >
              Aliquid quas similique delectus? Officiis.
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  fontWeight: "500",
                  color: "white",
                  borderRadius: "5px",
                  display: "flex",
                  marginLeft: "5%",
                  marginRight: "5%",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Perspiciatis quaerat aliquam maiores consectetur. Est nesciunt
                nihil assumenda, aliquam, cumque accusantium velit commodi
                officiis tenetur odio voluptatibus quis officia debitis
                similique?
              </div>
              <br />
              <div
                style={{
                  fontWeight: "500",
                  color: "white",
                  marginLeft: "5%",
                  marginRight: "5%",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Perspiciatis quaerat aliquam maiores consectetur. Est nesciunt
                nihil assumenda, aliquam, cumque accusantium velit commodi
                officiis tenetur odio voluptatibus quis
              </div>
              <br />
              <div
                style={{
                  fontWeight: "500",
                  color: "white",
                  marginLeft: "5%",
                  marginRight: "5%",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Perspiciatis quaerat aliquam maiores consectetur. Est nesciunt
                nihil assumenda, aliquam
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="flex">
          <div
            style={{
              color: "white",
              width: "57vw",
              fontWeight: "500",
              fontSize: "17px",
              justifyContent: "start",
              display: "flex",
              marginTop: "3%",
              marginBottom: "0.5%",
              marginLeft: "-20px",
            }}
          >
            SERVICES
          </div>
          <div
            style={{
              backgroundColor: "red",
              height: "3px",
              width: "58vw",
            }}
            className="flex"
          ></div>
        </div>
        <div className="flexee">
          <div
            style={{
              width: "17vw",
              height: "15vw",
              borderRadius: "5px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "start",
              backgroundColor: "rgb(41, 43, 45)",
              paddingLeft: "30px",
            }}
          >
            <img
              style={{
                width: "50px",
                display: "flex",
                flexDirection: "row",
                marginBottom: "-15px",
              }}
              src={edit}
              alt=""
            ></img>
            <h5 style={{ color: "white", fontSize: "20px", fontWeight: "600" }}>
              Web design
            </h5>
            <div
              style={{
                width: "16vw",
                color: "white",
                fontWeight: "400",
                fontSize: "16px",
                marginTop: "-10px",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing, elit. Enim
              minima, voluptatum ipsam iusto deserunt dignissimos accusamus ea
              iste odit exercitationem eveniet neque explicabo reiciendis id!
              Minima dolores corporis voluptatibus, voluptatum.
            </div>
          </div>
          <div
            style={{
              width: "17vw",
              height: "15vw",
              borderRadius: "5px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "start",
              backgroundColor: "rgb(41, 43, 45)",
              paddingLeft: "30px",
            }}
          >
            <img
              style={{
                width: "50px",
                display: "flex",
                flexDirection: "row",
                marginBottom: "-15px",
              }}
              src={tv}
              alt=""
            ></img>
            <h5 style={{ color: "white", fontSize: "20px", fontWeight: "600" }}>
              Media & content
            </h5>
            <div
              style={{
                width: "16vw",
                color: "white",
                fontWeight: "400",
                fontSize: "16px",
                marginTop: "-10px",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing, elit. Enim
              minima, voluptatum ipsam iusto deserunt dignissimos accusamus ea
              iste odit exercitationem eveniet neque explicabo reiciendis id!
              Minima dolores corporis voluptatibus, voluptatum.
            </div>
          </div>
          <div
            style={{
              width: "17vw",
              height: "15vw",
              borderRadius: "5px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "start",
              backgroundColor: "rgb(41, 43, 45)",
              paddingLeft: "30px",
            }}
          >
            <img
              style={{
                width: "50px",
                display: "flex",
                flexDirection: "row",
                marginBottom: "-15px",
              }}
              src={camera}
              alt=""
            ></img>
            <h5 style={{ color: "white", fontSize: "20px", fontWeight: "600" }}>
              Vedeo prod.
            </h5>
            <div
              style={{
                width: "16vw",
                color: "white",
                fontWeight: "400",
                fontSize: "16px",
                marginTop: "-10px",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing, elit. Enim
              minima, voluptatum ipsam iusto deserunt dignissimos accusamus ea
              iste odit exercitationem eveniet neque explicabo reiciendis id!
              Minima dolores corporis voluptatibus, voluptatum.
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="flex">
            <div
              style={{
                color: "white",
                width: "57vw",
                fontWeight: "500",
                fontSize: "17px",
                justifyContent: "start",
                display: "flex",
                marginTop: "3%",
                marginBottom: "0.5%",
                marginLeft: "-20px",
              }}
            >
              OUR TEAM
            </div>
            <div
              style={{ backgroundColor: "red", height: "3px", width: "58vw" }}
              className="center"
            ></div>
          </div>
          <div className="flexee">
            <div
              style={{
                width: "310px",
                height: "340px",
                borderRadius: "5px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                alignItems: "start",
                backgroundColor: "rgb(41, 43, 45)",
              }}
            >
              <img
                style={{
                  width: "310px",
                  height: "220px",
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "start",
                  height: "59%",
                }}
                src="data:image/jpeg;base64,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"
                alt=""
              />
              <h2
                style={{
                  color: "white",
                  paddingLeft: "$spacer * 1.5",
                  paddingTop: "$spacer",
                  fontWeight: "500",
                  marginLeft: "5%",
                }}
                className=""
              >
                Azykka
              </h2>
              <h4
                style={{
                  color: "white",
                  paddingLeft: "$spacer * 1.5",
                  paddingTop: "$spacer * .25",
                  marginLeft: "5%",
                }}
                className=""
              >
                Our talkative member
              </h4>
            </div>
            <div
              style={{
                width: "310px",
                height: "340px",
                borderRadius: "5px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                alignItems: "start",
                backgroundColor: "rgb(41, 43, 45)",
              }}
            >
              <img
                className="d-flex justify-content-start align-items-start"
                style={{
                  width: "310px",
                  height: "220px",
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "start",
                  height: "59%",
                }}
                src="data:image/jpeg;base64,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"
                alt=""
              />
              <h2
                style={{
                  color: "white",
                  paddingLeft: "$spacer * 1.5",
                  paddingTop: "$spacer",
                  fontWeight: "500",
                  marginLeft: "5%",
                }}
                className=""
              >
                Chinbo
              </h2>
              <h4
                style={{
                  color: "white",
                  paddingLeft: "$spacer * 1.5",
                  paddingTop: "$spacer * .25",
                  marginLeft: "5%",
                }}
                className=""
              >
                Our ahhhh ... normal member
              </h4>
            </div>
            <div
              style={{
                width: "310px",
                height: "340px",
                borderRadius: "5px",
                backgroundColor: "rgb(41, 43, 45)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                alignItems: "start",
                marginLeft: "$spacer",
              }}
              className=""
            >
              <img
                style={{
                  width: "310px",
                  height: "220px",
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "start",
                  height: "59%",
                }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuDec4tpRbyfdjkIMX0PW59sCDAb7g1zNW-Q&usqp=CAU"
                alt=""
              />
              <h2
                style={{
                  color: "white",
                  paddingLeft: "$spacer * 1.5",
                  paddingTop: "$spacer",
                  fontWeight: "500",
                  marginLeft: "5%",
                }}
                className=""
              >
                Sumber
              </h2>
              <h4
                style={{
                  color: "white",
                  paddingLeft: "$spacer * 1.5",
                  paddingTop: "$spacer * .25",
                  marginLeft: "5%",
                }}
                className=""
              >
                Our unseccessfull leader
              </h4>
            </div>
            <div
              style={{
                width: "310px",
                height: "340px",
                borderRadius: "5px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                alignItems: "start",
                backgroundColor: "rgb(41, 43, 45)",
              }}
            >
              <img
                style={{
                  width: "310px",
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "start",
                  height: "59%",
                }}
                src="data:image/jpeg;base64,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"
                alt=""
              />
              <h2
                style={{
                  color: "white",
                  paddingLeft: "$spacer * 1.5",
                  paddingTop: "$spacer",
                  fontWeight: "500",
                  fontSize: "17px",
                  marginLeft: "5%",
                }}
                className=""
              >
                Burte Gaming Boy
              </h2>
              <h4
                style={{
                  color: "white",
                  paddingLeft: "$spacer * 1.5",
                  marginLeft: "5%",
                }}
                className=""
              >
                Our positive member
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
