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
        <div className="Login">
            Login
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      aaaaaaaaa
    </div>
  );
};
