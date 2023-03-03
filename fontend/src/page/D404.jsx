import { Navbar } from "../components/navbar";
import "../App.css";
export const Not = () => {
  return (
    <div>
      <Navbar />
      <div
        style={{
          width: "100%",
          height: "90vh",
          backgroundColor: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "55vw",
            height: "40vh",
            backgroundColor: "#292b2d",
          }}
        >
          <img src="../Logo.png" />
          <h1>404</h1>
          <p className="page">Page Not Found</p>
          <button href="/" className="btn">
            Back to home
          </button>
        </div>
      </div>
    </div>
  );
};
