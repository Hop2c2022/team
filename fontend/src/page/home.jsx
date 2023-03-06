import "./style.css";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import date from "../img/clock.png";
import seen from "../img/eye.png";
import weather from "../img/weather.png";
import img1 from "../img/img1.jpeg";
import img2 from "../img/img2.jpeg";
import pigs from "../img/pigs.jpeg";

export const Home = () => {
  return (
    <div className="Home">
      <Navbar />
      <div className="Images">
        <div className="bigImg">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "end",
              height: "100%",
              marginLeft: "4%",
              zIndex: "1",
            }}
          >
            <div style={{ width: "11%" }} className="sportTitle">
              <p>SPORTS</p>
            </div>
            <h2 style={{ fontSize: "150%" }} className="newsTitle">
              Start a new men`s road World Championships
            </h2>
          </div>
          <div className="boxShadow"></div>
        </div>
        <div style={{ width: "13.6%" }}>
          <div className="miniImg1">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "22vh",
                marginLeft: "4%",
                zIndex: "1",
              }}
            >
              <div style={{ width: "40%" }} className="sportTitle">
                <p>ENTERTAIMENT</p>
              </div>
              <h3 className="newsTitle" style={{ width: "103%" }}>
                We finaly find out how BB-8 really works
              </h3>
            </div>
            <div className="boxShadow"></div>
          </div>
          <div className="miniImg2">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "22vh",
                marginLeft: "4%",
                zIndex: "1",
              }}
            >
              <div style={{ width: "25%" }} className="sportTitle">
                <p>POLITICS</p>
              </div>
              <h3 className="newsTitle" style={{ width: "93%" }}>
                And the most streamed Beatles song on spotify is..
              </h3>
            </div>
            <div className="boxShadow"></div>
          </div>
        </div>
        <div className="longImg"></div>
      </div>
      <img
        style={{ width: "57.5%", borderRadius: "5px" }}
        src="https://chtstudio.com/demo/news/images/others/ad1.jpg"
      />
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <div style={{ width: "40%" }}>
          <div>
            <h3>PHOTO GALLERY</h3>
            <div
              style={{
                width: "100%",
                backgroundColor: "grey",
                height: "3px",
                borderRadius: "2px",
              }}
            ></div>
          </div>
          <img style={{ width: "100%", marginTop: "3%" }} src={pigs} />
          <div className="imgTitle">
            <h3 style={{ marginLeft: "2%" }}>
              The pig union discussing about how to get more food from the
              weather
            </h3>
          </div>
          <img
            style={{ width: "100%", borderRadius: "5px", marginTop: "4%" }}
            src="https://chtstudio.com/demo/news/images/others/ad1.jpg"
          />
          <div>
            <h3>HEALTH</h3>
            <div
              style={{
                width: "100%",
                backgroundColor: "red",
                height: "3px",
                borderRadius: "2px",
              }}
            ></div>
          </div>
          <div
            className="imgTitle"
            style={{
              width: "100%",
              height: "17vh",
              borderRadius: "5px",
              marginTop: "3%",
            }}
          >
            <img
              style={{ height: "100%", borderRadius: "5px" }}
              src="https://chtstudio.com/demo/news/images/post/hel1.jpg"
            />
            <div>
              <h2 style={{ fontSize: "120%", margin: "0", marginLeft: "3%" }}>
                HealthNews Salutes: Direct Relief International
              </h2>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={date}
                  style={{ width: "20px", height: "20px", marginLeft: "3%" }}
                />
                <h4 className="hehe" style={{ marginLeft: "3%" }}>
                  Feb 26, 2022
                </h4>
                <img
                  src={seen}
                  style={{ width: "20px", height: "20px", marginLeft: "3%" }}
                />
                <h4 className="hehe" style={{ marginLeft: "3%" }}>
                  5k
                </h4>
              </div>
              <h5 style={{ margin: "0", marginLeft: "3%" }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Corporis quae perferendis, nesciunt facere tenetur repudiandae
              </h5>
            </div>
          </div>
          <div>
            <div
              style={{
                width: "100%",
                height: "8vh",
                borderRadius: "5px",
                marginTop: "2%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div
                className="haha"
                style={{
                  width: "48.5%",
                  height: "100%",
                  borderRadius: "5px",
                  display: "flex",
                }}
              >
                <img
                  style={{ height: "100%", borderRadius: "5px" }}
                  src="https://chtstudio.com/demo/news/images/post/sm4.jpg"
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <h5 style={{ margin: "0", marginLeft: "4%" }}>
                    EBreakfast Cereal: The Marketing of Sugar
                  </h5>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      height: "30%",
                    }}
                  >
                    <img
                      src={date}
                      style={{
                        width: "15px",
                        height: "15px",
                        marginLeft: "3%",
                      }}
                    />
                    <h6 className="hehe" style={{ marginLeft: "3%" }}>
                      Feb 26, 2022
                    </h6>
                    <img
                      src={seen}
                      style={{
                        width: "15px",
                        height: "15px",
                        marginLeft: "3%",
                      }}
                    />
                    <h6 className="hehe" style={{ marginLeft: "3%" }}>
                      1k
                    </h6>
                  </div>
                </div>
              </div>

              <div
                className="haha"
                style={{
                  width: "48.5%",
                  height: "100%",
                  borderRadius: "5px",
                  display: "flex",
                }}
              >
                <img
                  style={{ height: "100%", borderRadius: "5px" }}
                  src="https://chtstudio.com/demo/news/images/post/sm7.jpg"
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <h5 style={{ margin: "0", marginLeft: "4%" }}>
                    Smarter Food Choices 101 Tips For Busy Women
                  </h5>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      height: "30%",
                    }}
                  >
                    <img
                      src={date}
                      style={{
                        width: "15px",
                        height: "15px",
                        marginLeft: "3%",
                      }}
                    />
                    <h6 className="hehe" style={{ marginLeft: "3%" }}>
                      Feb 26, 2022
                    </h6>
                    <img
                      src={seen}
                      style={{
                        width: "15px",
                        height: "15px",
                        marginLeft: "3%",
                      }}
                    />
                    <h6 className="hehe" style={{ marginLeft: "3%" }}>
                      5k
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                width: "100%",
                height: "8vh",
                borderRadius: "5px",
                marginTop: "2%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div
                className="haha"
                style={{
                  width: "48.5%",
                  height: "100%",
                  borderRadius: "5px",
                  display: "flex",
                }}
              >
                <img
                  style={{ height: "100%", borderRadius: "5px" }}
                  src="https://chtstudio.com/demo/news/images/post/sm5.jpg"
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <h5 style={{ margin: "0", marginLeft: "4%" }}>
                    Aerobic Exercise: The Best Weapon
                  </h5>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      height: "30%",
                    }}
                  >
                    <img
                      src={date}
                      style={{
                        width: "15px",
                        height: "15px",
                        marginLeft: "3%",
                      }}
                    />
                    <h6 className="hehe" style={{ marginLeft: "3%" }}>
                      Mar 2, 2022
                    </h6>
                    <img
                      src={seen}
                      style={{
                        width: "15px",
                        height: "15px",
                        marginLeft: "3%",
                      }}
                    />
                    <h6 className="hehe" style={{ marginLeft: "3%" }}>
                      10k
                    </h6>
                  </div>
                </div>
              </div>

              <div
                className="haha"
                style={{
                  width: "48.5%",
                  height: "100%",
                  borderRadius: "5px",
                  display: "flex",
                }}
              >
                <img
                  style={{ height: "100%", borderRadius: "5px" }}
                  src="https://chtstudio.com/demo/news/images/post/sm8.jpg"
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <h5 style={{ margin: "0", marginLeft: "4%", width: "100%" }}>
                    Deep Fryer Pieces Of Wisdom
                  </h5>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      height: "30%",
                    }}
                  >
                    <img
                      src={date}
                      style={{
                        width: "15px",
                        height: "15px",
                        marginLeft: "3%",
                      }}
                    />
                    <h6 className="hehe" style={{ marginLeft: "3%" }}>
                      Feb 26, 2022
                    </h6>
                    <img
                      src={seen}
                      style={{
                        width: "15px",
                        height: "15px",
                        marginLeft: "3%",
                      }}
                    />
                    <h6 className="hehe" style={{ marginLeft: "3%" }}>
                      22k
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                width: "100%",
                height: "8vh",
                borderRadius: "5px",
                marginTop: "2%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div
                className="haha"
                style={{
                  width: "48.5%",
                  height: "100%",
                  borderRadius: "5px",
                  display: "flex",
                }}
              >
                <img
                  style={{ height: "100%", borderRadius: "5px" }}
                  src="https://chtstudio.com/demo/news/images/post/sm6.jpg"
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <h5 style={{ margin: "0", marginLeft: "4%" }}>
                    Morning yoga is very important for maintaining
                  </h5>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      height: "30%",
                    }}
                  >
                    <img
                      src={date}
                      style={{
                        width: "15px",
                        height: "15px",
                        marginLeft: "3%",
                      }}
                    />
                    <h6 className="hehe" style={{ marginLeft: "3%" }}>
                      Mar 2, 2022
                    </h6>
                    <img
                      src={seen}
                      style={{
                        width: "15px",
                        height: "15px",
                        marginLeft: "3%",
                      }}
                    />
                    <h6 className="hehe" style={{ marginLeft: "3%" }}>
                      55k
                    </h6>
                  </div>
                </div>
              </div>

              <div
                className="haha"
                style={{
                  width: "48.5%",
                  height: "100%",
                  borderRadius: "5px",
                  display: "flex",
                }}
              >
                <img
                  style={{ height: "100%", borderRadius: "5px" }}
                  src="https://chtstudio.com/demo/news/images/post/sm9.jpg"
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <h5 style={{ margin: "0", marginLeft: "4%", width: "100%" }}>
                    Nam Suscipit Pretium Consectetur.
                  </h5>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      height: "30%",
                    }}
                  >
                    <img
                      src={date}
                      style={{
                        width: "15px",
                        height: "15px",
                        marginLeft: "3%",
                      }}
                    />
                    <h6 className="hehe" style={{ marginLeft: "3%" }}>
                      mar 1, 2022
                    </h6>
                    <img
                      src={seen}
                      style={{
                        width: "15px",
                        height: "15px",
                        marginLeft: "3%",
                      }}
                    />
                    <h6 className="hehe" style={{ marginLeft: "3%" }}>
                      15k
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h3 style={{ marginTop: "4%" }}>LIFE STYLE</h3>
          <div
            style={{
              width: "100%",
              backgroundColor: "red",
              height: "3px",
              borderRadius: "2px",
            }}
          ></div>
          <div
            style={{
              marginTop: "3%",
              width: "100%",
              height: "34vh",
              borderRadius: "5px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div
              className="haha"
              style={{
                width: "48.5%",
                height: "100%",
                borderRadius: "5px",
              }}
            >
              <img
                style={{ width: "100%", borderRadius: "5px" }}
                src="https://chtstudio.com/demo/news/images/post/13.jpg"
              />
              <h2
                className="hehe"
                style={{
                  fontSize: "120%",
                  margin: "0",
                  marginLeft: "3%",
                  marginTop: "1%",
                }}
              >
                That wearable on your wrist could soon track your health as
                well…
              </h2>
              <div
                style={{ display: "flex", alignItems: "center", height: "10%" }}
              >
                <img
                  src={date}
                  style={{ width: "20px", height: "20px", marginLeft: "3%" }}
                />
                <h4 className="hehe" style={{ marginLeft: "3%" }}>
                  Feb 28, 2022
                </h4>
                <img
                  src={seen}
                  style={{ width: "20px", height: "20px", marginLeft: "3%" }}
                />
                <h4 className="hehe" style={{ marginLeft: "3%" }}>
                  25k
                </h4>
              </div>
              <h5 className="hehe" style={{ margin: "0", marginLeft: "3%" }}>
                Lorem ipsum dolor, sit amet, consectetur adipisicing elit.
                Aliquam autem sint quisquam magnam aspernatur
              </h5>
            </div>
            <div
              className="haha"
              style={{
                width: "48.5%",
                height: "100%",
                borderRadius: "5px",
              }}
            >
              <img
                style={{ width: "100%", borderRadius: "5px" }}
                src="https://chtstudio.com/demo/news/images/post/14.jpg"
              />
              <h2
                className="hehe"
                style={{
                  fontSize: "120%",
                  margin: "0",
                  marginLeft: "3%",
                  marginTop: "1%",
                }}
              >
                Early tourists choices to the sea of Maldives in fancy dresses
                an…
              </h2>
              <div
                style={{ display: "flex", alignItems: "center", height: "10%" }}
              >
                <img
                  src={date}
                  style={{ width: "20px", height: "20px", marginLeft: "3%" }}
                />
                <h4 className="hehe" style={{ marginLeft: "3%" }}>
                  Feb 17, 2022
                </h4>
                <img
                  src={seen}
                  style={{ width: "20px", height: "20px", marginLeft: "3%" }}
                />
                <h4 className="hehe" style={{ marginLeft: "3%" }}>
                  10k
                </h4>
              </div>
              <h5 className="hehe" style={{ margin: "0", marginLeft: "3%" }}>
                Lorem ipsum dolor, sit amet, consectetur adipisicing elit.
                Aliquam autem sint quisquam magnam aspernatur
              </h5>
            </div>
          </div>
          <div
            style={{
              marginTop: "2%",
              width: "100%",
              height: "26vh",
              borderRadius: "5px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div
              className="haha"
              style={{
                marginTop: "3%",
                width: "31.5%",
                height: "26vh",
                borderRadius: "5px",
              }}
            >
              <img
                src="https://chtstudio.com/demo/news/images/post/mid13.jpg"
                style={{ width: "100%", borderRadius: "5px" }}
              />
              <h4
                className="hehe"
                style={{
                  margin: "0",
                  marginLeft: "3%",
                  marginTop: "1%",
                }}
              >
                Naomi & Liev hit the beach, plus more new celeb pics
              </h4>
              <div
                style={{ display: "flex", alignItems: "center", height: "10%" }}
              >
                <img
                  src={date}
                  style={{ width: "15px", height: "15px", marginLeft: "3%" }}
                />
                <h4 className="hehe" style={{ marginLeft: "3%" }}>
                  Feb 26, 2022
                </h4>
                <img
                  src={seen}
                  style={{ width: "15px", height: "15px", marginLeft: "3%" }}
                />
                <h4 className="hehe" style={{ marginLeft: "3%" }}>
                  15k
                </h4>
              </div>
            </div>
            <div
              className="haha"
              style={{
                marginTop: "3%",
                width: "31.5%",
                height: "26vh",
                borderRadius: "5px",
              }}
            >
              <img
                src="https://chtstudio.com/demo/news/images/post/mid14.jpg"
                style={{ width: "100%", borderRadius: "5px" }}
              />
              <h4
                className="hehe"
                style={{
                  margin: "0",
                  marginLeft: "3%",
                  marginTop: "1%",
                }}
              >
                How the stars celebrated Christmas on Instagram
              </h4>
              <div
                style={{ display: "flex", alignItems: "center", height: "10%" }}
              >
                <img
                  src={date}
                  style={{ width: "15px", height: "15px", marginLeft: "3%" }}
                />
                <h4 className="hehe" style={{ marginLeft: "3%" }}>
                  Mar 2, 2022
                </h4>
                <img
                  src={seen}
                  style={{ width: "15px", height: "15px", marginLeft: "3%" }}
                />
                <h4 className="hehe" style={{ marginLeft: "3%" }}>
                  12k
                </h4>
              </div>
            </div>
            <div
              className="haha"
              style={{
                marginTop: "3%",
                width: "31.5%",
                height: "26vh",
                borderRadius: "5px",
              }}
            >
              <img
                src="https://chtstudio.com/demo/news/images/post/mid15.jpg"
                style={{ width: "100%", borderRadius: "5px" }}
              />
              <h4
                className="hehe"
                style={{
                  margin: "0",
                  marginLeft: "3%",
                  marginTop: "1%",
                }}
              >
                18 Great Performances in Mediocre Movies in 2022
              </h4>
              <div
                style={{ display: "flex", alignItems: "center", height: "10%" }}
              >
                <img
                  src={date}
                  style={{ width: "15px", height: "15px", marginLeft: "3%" }}
                />
                <h4 className="hehe" style={{ marginLeft: "3%" }}>
                  Mar 2, 2022
                </h4>
                <img
                  src={seen}
                  style={{ width: "15px", height: "15px", marginLeft: "3%" }}
                />
                <h4 className="hehe" style={{ marginLeft: "3%" }}>
                  35k
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            width: "16.5%",
            height: "5vh",
            marginLeft: "1%",
          }}
        >
          <div>
            <h3>POPULER POSTS</h3>
            <div
              style={{
                width: "100%",
                backgroundColor: "red",
                height: "3px",
                borderRadius: "2px",
              }}
            ></div>
          </div>
          <div
            className="imgTitle"
            style={{
              width: "100%",
              height: "7vh",
              borderRadius: "5px",
              marginTop: "9%",
            }}
          >
            <img style={{ height: "100%", borderRadius: "5px" }} src={img1} />
            <div style={{ marginLeft: "2%" }}>
              <h5 style={{ margin: "0", marginLeft: "3%" }}>
                Shots in border dispute - BBC News
              </h5>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: "25px",
                }}
              >
                <img
                  src={date}
                  style={{ width: "15px", height: "15px", marginLeft: "3%" }}
                />
                <h5 className="hehe" style={{ marginLeft: "3%" }}>
                  Feb 28, 2022
                </h5>
                <img
                  src={seen}
                  style={{ width: "15px", height: "15px", marginLeft: "3%" }}
                />
                <h5 className="hehe" style={{ marginLeft: "3%" }}>
                  50k
                </h5>
              </div>
            </div>
          </div>
          <div
            className="imgTitle"
            style={{
              width: "100%",
              height: "7vh",
              borderRadius: "5px",
              marginTop: "4%",
            }}
          >
            <img style={{ height: "100%", borderRadius: "5px" }} src={img2} />
            <div style={{ marginLeft: "2%" }}>
              <h5 style={{ margin: "0", marginLeft: "3%" }}>
                Why is the media so afraid of Facebook?
              </h5>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: "25px",
                }}
              >
                <img
                  src={date}
                  style={{ width: "15px", height: "15px", marginLeft: "3%" }}
                />
                <h5 className="hehe" style={{ marginLeft: "3%" }}>
                  Feb 17, 2022
                </h5>
                <img
                  src={seen}
                  style={{ width: "15px", height: "15px", marginLeft: "3%" }}
                />
                <h5 className="hehe" style={{ marginLeft: "3%" }}>
                  20k
                </h5>
              </div>
            </div>
          </div>
          <div
            className="imgTitle"
            style={{
              width: "100%",
              height: "7vh",
              borderRadius: "5px",
              marginTop: "4%",
            }}
          >
            <img
              style={{ height: "100%", borderRadius: "5px" }}
              src="https://chtstudio.com/demo/news/images/post/sm8.jpg"
            />
            <div style={{ marginLeft: "2%" }}>
              <h5 style={{ margin: "0", marginLeft: "3%" }}>
                Deep Fryer Pieces Of Wisdom
              </h5>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: "25px",
                }}
              >
                <img
                  src={date}
                  style={{ width: "15px", height: "15px", marginLeft: "3%" }}
                />
                <h5 className="hehe" style={{ marginLeft: "3%" }}>
                  Feb 26, 2022
                </h5>
                <img
                  src={seen}
                  style={{ width: "15px", height: "15px", marginLeft: "3%" }}
                />
                <h5 className="hehe" style={{ marginLeft: "3%" }}>
                  10k
                </h5>
              </div>
            </div>
          </div>
          <div
            className="imgTitle"
            style={{
              width: "100%",
              height: "7vh",
              borderRadius: "5px",
              marginTop: "4%",
            }}
          >
            <img
              style={{ height: "100%", borderRadius: "5px" }}
              src="https://chtstudio.com/demo/news/images/post/sm6.jpg"
            />
            <div style={{ marginLeft: "2%" }}>
              <h5 style={{ margin: "0", marginLeft: "3%" }}>
                Morning yoga is very important for maintaining
              </h5>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: "25px",
                }}
              >
                <img
                  src={date}
                  style={{ width: "15px", height: "15px", marginLeft: "3%" }}
                />
                <h5 className="hehe" style={{ marginLeft: "3%" }}>
                  Mar 2, 2022
                </h5>
                <img
                  src={seen}
                  style={{ width: "15px", height: "15px", marginLeft: "3%" }}
                />
                <h5 className="hehe" style={{ marginLeft: "3%" }}>
                  8k
                </h5>
              </div>
            </div>
          </div>
          <img
            src="https://lh3.googleusercontent.com/IBvpphEX67JD2zZuqsw-I_fN6ImUFMu4IY0HDICmZyb2iPEYUWE_jd-XRu5XGPkWgf6NLjfey7mvUk_BbWV7ntR_RbnlwTrAWzD-zyEl"
            style={{ width: "100%", marginTop: "5%", borderRadius: "5px" }}
          />
          <div>
            <h3>RECENT POSTS</h3>
            <div
              style={{
                width: "100%",
                backgroundColor: "red",
                height: "3px",
                borderRadius: "2px",
              }}
            ></div>
          </div>
          <div
            style={{
              width: "100%",
              height: "18vh",
              marginTop: "7%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div
              className="haha"
              style={{
                width: "47%",
                height: "100%",
                borderRadius: "5px",
              }}
            >
              <img
                src="https://lh3.googleusercontent.com/TBdLoKhKab_El0pWBKPGxLj3Iip21HUV4smXKXe9OWBBLmELKRcTQ0eSDZOF0Lq8c6p6pGPxGTC5mGmxOg5u1JRlZEJ9nVwVgDVINY9w"
                style={{ width: "100%", borderRadius: "5px" }}
              />
              <h5
                className="hehe"
                style={{
                  margin: "0",
                  marginLeft: "8%",
                  marginTop: "1%",
                }}
              >
                44 books on 44 presidents: Welcome
              </h5>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: "15%",
                  marginLeft: "5%",
                }}
              >
                <img
                  src={date}
                  style={{ width: "13px", height: "13px", marginLeft: "3%" }}
                />
                <h5 className="hehe" style={{ marginLeft: "3%" }}>
                  Feb 28, 2022
                </h5>
              </div>
            </div>
            <div
              className="haha"
              style={{
                width: "47%",
                height: "100%",
                borderRadius: "5px",
              }}
            >
              <img
                src="https://lh3.googleusercontent.com/yDJ5Rz4Snwwz3rhTRYfHF_mWK_oFkWZFxsT-W6xmsJCqQTzYPbcmflb4mrCrK0wjFk1g_zKRvqqANVVgwEJ-gG_wako9sl0Lt2Boa3s"
                style={{ width: "100%", borderRadius: "5px" }}
              />
              <h5
                className="hehe"
                style={{
                  margin: "0",
                  marginLeft: "8%",
                  marginTop: "1%",
                }}
              >
                Slow TV finds life online with Facebook.
              </h5>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: "15%",
                  marginLeft: "5%",
                }}
              >
                <img
                  src={date}
                  style={{ width: "13px", height: "13px", marginLeft: "3%" }}
                />
                <h5 className="hehe" style={{ marginLeft: "3%" }}>
                  Feb 17, 2022
                </h5>
              </div>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              height: "18vh",
              marginTop: "7%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div
              className="haha"
              style={{
                width: "47%",
                height: "100%",
                borderRadius: "5px",
              }}
            >
              <img
                src="https://lh3.googleusercontent.com/AdPy_m07pJJFveX8U8UtUjwyKHgt2F5T2x3KUEoox9bGPJVWtrWZVIBSBe3qwaZYQg5uKG2Maz1eIM2S5oq3LSoQQcj2SjERqWI4rHNo"
                style={{ width: "100%", borderRadius: "5px" }}
              />
              <h5
                className="hehe"
                style={{
                  margin: "0",
                  marginLeft: "8%",
                  marginTop: "1%",
                }}
              >
                We Are Seeing The Effects Of The
              </h5>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: "15%",
                  marginLeft: "5%",
                }}
              >
                <img
                  src={date}
                  style={{ width: "13px", height: "13px", marginLeft: "3%" }}
                />
                <h5 className="hehe" style={{ marginLeft: "3%" }}>
                  Feb 26, 2022
                </h5>
              </div>
            </div>
            <div
              className="haha"
              style={{
                width: "47%",
                height: "100%",
                borderRadius: "5px",
              }}
            >
              <img
                src="https://lh3.googleusercontent.com/JdrS5dvz0021eK3vpfwI0xtpbFwzM0HdfKxqdLGbHUiqG-CPV7KhWv4Rc0ZPLNqqwcDR_Nntm0TbSUUJGfpC-7sCTovUPvUKspjGzxysJA"
                style={{ width: "100%", borderRadius: "5px" }}
              />
              <h5
                className="hehe"
                style={{
                  margin: "0",
                  marginLeft: "8%",
                  marginTop: "1%",
                }}
              >
                Naomi & Liev hit the beach
              </h5>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: "15%",
                  marginLeft: "5%",
                }}
              >
                <img
                  src={date}
                  style={{ width: "13px", height: "13px", marginLeft: "3%" }}
                />
                <h5 className="hehe" style={{ marginLeft: "3%" }}>
                  Mar 2, 2022
                </h5>
              </div>
            </div>
          </div>
          <img
            src="https://lh3.googleusercontent.com/fbe5cf42JOkBSzlPY0ivP5_id2rryNKsaIK09RHEXbWTD1L03b-gp8fGhoEcg24o4HHqHuOEbJbzchIGltG0oEd_CIZhEI46TaqTeMco"
            style={{ width: "100%", marginTop: "5%", borderRadius: "5px" }}
          />
          <div>
            <h3>WEATHER</h3>
            <div
              style={{
                width: "100%",
                backgroundColor: "red",
                height: "3px",
                borderRadius: "2px",
              }}
            ></div>
          </div>
          <img
            src={weather}
            style={{ width: "100%", marginTop: "5%", borderRadius: "5px" }}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};
