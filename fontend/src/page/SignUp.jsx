import "../styles/SignUp.css";
export const SignUp = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "black",
      }}
      className="SignUpBody"
    >
      <div
        style={{
          width: "500px",
          height: "30px",
          backgroundColor: "rgb(41, 43, 45)",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
          fontSize: "17px",
          fontWeight: "700",
          color: "white",
          paddingTop: "10px",
          paddingLeft: "15px",
        }}
        className="CreateAccount"
      >
        Create An Account
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "center",
          backgroundColor: "rgb(41, 43, 45)",
          width: "515px",
          height: "745px",
          borderEndEndRadius: "10px",
          borderEndStartRadius: "10px",
          marginTop: "3px",
        }}
        className="SignUpMain"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "30px",
          }}
          className=""
        >
          <div style={{ color: "rgb(126, 120, 120)" }}>First Name</div>
          <input
            style={{
              width: "450px",
              backgroundColor: "black",
              color: "rgb(205, 199, 199)",
              border: "none",
              height: "43px",
              borderRadius: "5px",
              fontSize: "17px",
              marginTop: "7px",
              paddingLeft: "15px",
            }}
            type="text"
            placeholder="First Name"
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "30px",
          }}
          className=""
        >
          <div style={{ color: "rgb(126, 120, 120)" }}>Last Name</div>
          <input
            style={{
              width: "450px",
              backgroundColor: "black",
              color: "rgb(205, 199, 199)",
              border: "none",
              height: "43px",
              borderRadius: "5px",
              fontSize: "17px",
              marginTop: "7px",
              paddingLeft: "15px",
            }}
            type="text"
            placeholder="Last Name"
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "30px",
          }}
          className=""
        >
          <div style={{ color: "rgb(126, 120, 120)" }}>Email</div>
          <input
            style={{
              width: "450px",
              backgroundColor: "black",
              color: "rgb(205, 199, 199)",
              border: "none",
              height: "43px",
              borderRadius: "5px",
              fontSize: "17px",
              marginTop: "7px",
              paddingLeft: "15px",
            }}
            type="email"
            placeholder="demo@gmail.com"
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "30px",
          }}
          className=""
        >
          <div style={{ color: "rgb(126, 120, 120)" }}>Password</div>
          <input
            style={{
              width: "450px",
              backgroundColor: "black",
              color: "rgb(205, 199, 199)",
              border: "none",
              height: "43px",
              borderRadius: "5px",
              fontSize: "17px",
              marginTop: "7px",
              paddingLeft: "15px",
            }}
            type="password"
            placeholder="*********"
          />
        </div>
        <div className="Login">Login</div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div
            style={{
              color: "white",
              fontWeight: "500",
              fontSize: "16px",
              marginTop: "20px",
            }}
          >
            Already have an account?
          </div>
          <div
            style={{
              color: "red",
              fontWeight: "500",
              fontSize: "16px",
              marginLeft: "5px",
              marginTop: "21px",
            }}
          >
            Login
          </div>
        </div>
        <div
          style={{
            color: "red",
            fontWeight: "500",
            fontSize: "16px",
            marginLeft: "5px",
            marginTop: "21px",
          }}
        >
          Forgot your password?
        </div>
        <div
          style={{
            backgroundColor: "black",
            width: "465px",
            height: "45px",
            display: "flex",
            flexDirection: "row",
            borderRadius: "5px",
            marginTop: "25px",
          }}
        >
          <div
            style={{
              width: "60px",
              height: "45px",
              backgroundColor: "#2e4374",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRight: "1px solid white",
              borderTopLeftRadius: "5px",
              borderBottomLeftRadius: "5px",
            }}
          >
            <img
              style={{
                width: "24px",
                height: "24px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              src="facebook-app-symbol.png"
              alt=""
            />
          </div>
          <div
            style={{
              display: "flex",
              color: "#2e4374",
              justifyContent: "center",
              alignItems: "center",
              paddingLeft: "20px",
              fontWeight: "500",
            }}
          >
            LOGIN WITH FACEBOOK
          </div>
        </div>
        <div
          style={{
            backgroundColor: "black",
            width: "465px",
            height: "45px",
            display: "flex",
            flexDirection: "row",
            borderRadius: "5px",
            marginTop: "30px",
          }}
        >
          <div
            style={{
              width: "60px",
              height: "45px",
              backgroundColor: "#c9060d",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRight: "1px solid white",
              borderTopLeftRadius: "5px",
              borderBottomLeftRadius: "5px",
            }}
          >
            <img
              style={{
                width: "27px",
                height: "27px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              src="google-plus.png"
              alt=""
            />
          </div>
          <div
            style={{
              display: "flex",
              color: "#c9060d",
              justifyContent: "center",
              alignItems: "center",
              paddingLeft: "20px",
              fontWeight: "500",
            }}
          >
            LOGIN WITH GOOGLE PLUS
          </div>
        </div>
      </div>
      aaaaaaaaa
    </div>
  );
};
