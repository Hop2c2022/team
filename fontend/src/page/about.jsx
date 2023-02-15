import { Navbar } from "../components/navbar";

export const About = () => {
  return (
    <div
      style={{ width: "100%", backgroundColor: "black" }}
      className="d-flex flex-column"
    >
      <Navbar />
      <div className="d-flex flex-column justify-content-center align-items-center">
        <div className="d-flex flex-column align-items-center justify-content-center">
          <div
            style={{
              color: "white",
              width: "57vw",
              fontWeight: "600",
              justifyContent: "start",
            }}
            className="d-flex text-uppercase mb-2 mt-3"
          >
            About Us
          </div>
          <div
            style={{ backgroundColor: "red", height: "3px", width: "58vw" }}
            className="d-flex flex-column justify-content-center align-items-center mb-3"
          ></div>
        </div>
        <div className="d-flex flex-row justify-content-center align-items-center">
          <img
            style={{ width: "33vw" }}
            className="d-flex flex-row"
            src="https://chtstudio.com/demo/news/images/post/6.jpg"
            alt=""
          ></img>
          <div
            style={{ width: "25vw", height: "21vw" }}
            className="d-flex flex-column justify-content-center align-items-center bg-dark"
          >
            <div
              style={{ fontWeight: "900", color: "white", fontSize: "20px" }}
              className="d-flex mb-3"
            >
              Aliquid quas similique delectus? Officiis.
            </div>
            <div className="d-flex flex-column">
              <div
                style={{ fontWeight: "300", color: "white" }}
                className="d-flex ms-5 me-5"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Perspiciatis quaerat aliquam maiores consectetur. Est nesciunt
                nihil assumenda, aliquam, cumque accusantium velit commodi
                officiis tenetur odio voluptatibus quis officia debitis
                similique?
              </div>
              <br />
              <div
                style={{ fontWeight: "300", color: "white" }}
                className="d-flex ms-5 me-5"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Perspiciatis quaerat aliquam maiores consectetur. Est nesciunt
                nihil assumenda, aliquam, cumque accusantium velit commodi
                officiis tenetur odio voluptatibus quis
              </div>
              <br />
              <div
                style={{ fontWeight: "300", color: "white" }}
                className="d-flex ms-5 me-5"
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
      <div className="d-flex flex-column justify-content-center align-items-center">
        <div className="d-flex flex-column align-items-center justify-content-center">
          <div
            style={{
              color: "white",
              width: "57vw",
              fontWeight: "600",
              justifyContent: "start",
            }}
            className="d-flex text-uppercase mb-2 mt-3"
          >
            Services
          </div>
          <div
            style={{ backgroundColor: "red", height: "3px", width: "58vw" }}
            className="d-flex flex-column justify-content-center align-items-center mb-3"
          ></div>
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
