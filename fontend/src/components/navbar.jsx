import "./style.css";

export const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="navbar1">
        <div className="box">
          <h3 style={{ marginLeft: "35%", width: "12%" }} className="word">
            Breaking News
          </h3>
          <div
            style={{ width: "1px", height: "5vh", backgroundColor: "white" }}
          ></div>
          <div className="box">
            <h5 className="margin">
              • Remarkable Women - character design project
            </h5>
            <h5 className="margin">• Adipisicing elit. Quia</h5>
          </div>
        </div>
        <div className="box2">
          <h4 style={{ marginRight: "10%" }}>English ▼</h4>
          <h4>Login / SignUp</h4>
        </div>
      </div>
      <div className="navbar2">
        <img
          style={{ width: "7%", marginLeft: "22.8%" }}
          src="https://chtstudio.com/demo/news/images/logo-white.png"
        />
        <div
          style={{
            display: "flex",
            width: "90%",
            alignItems: "center",
            marginLeft: "5%",
          }}
        >
          <div className="dropdown" style={{ width: "5.5%" }}>
            <h4 id="hover" className="gap_word">
              Home
            </h4>
          </div>
          <div className="dropdown" style={{ width: "6.5%", marginLeft: "1%" }}>
            <h4 id="hover" className="gap_word">
              Business ▼
            </h4>
            <div class="dropdown-content">
              <a>Link 1</a>
              <a>Link 2</a>
              <a>Link 3</a>
            </div>
          </div>
          <div className="dropdown" style={{ width: "5.5%", marginLeft: "2%" }}>
            <h4 id="hover" className="gap_word">
              Politics ▼
            </h4>
            <div class="dropdown-content">
              <a>Link 1</a>
              <a>Link 2</a>
              <a>Link 3</a>
            </div>
          </div>

          <h4
            id="hover"
            style={{ color: "rgb(175, 168, 168)", marginLeft: "2%" }}
          >
            Category
          </h4>
          <div className="dropdown" style={{ width: "7.5%", marginLeft: "2%" }}>
            <h4 id="hover" className="gap_word">
              Mega Menu ▼
            </h4>
            <div class="dropdown-content"></div>
          </div>

          <h4 id="hover" className="gap_word">
            About
          </h4>

          <div className="dropdown" style={{ width: "%", marginLeft: "2%" }}>
            <h4 id="hover" className="gap_word ">
              Pages
            </h4>
            <div class="dropdown-content">
              <a>News Details</a>
              <a>Contact page</a>
              <a>Sign in</a>
              <a>Sign up</a>
              <a>404 Page</a>
            </div>
          </div>

          <input placeholder="Search here ..." className="search"></input>
        </div>
      </div>
    </div>
  );
};
