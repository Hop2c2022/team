import "./style.css";
import { Navbar } from "../components/navbar";
import { Square } from "../components/pagehelpersquaer";
import { Little } from "../components/pagehelper";
import { LitteS } from "../components/littlesquear";
import { Littlell } from "../components/littlelong";
import { Lastlittle } from "../components/little";

export const Category = () => {
  return (
    <div className="ContainerCategory">
      <Navbar />
      <div className="middleParts">
        <img
          className="discount "
          src="https://chtstudio.com/demo/news/images/others/ad1.jpg"
          alt=""
        />
        <div className="news">
          <div className="LeftSide">
            <div className="ydargaa">
              <div className="Worlds">
                <h4 className="word" style={{ color: "white" }}>
                  Latest News
                </h4>
              </div>
              <div className="hell">
                <button className="but"></button>
                <button className="but"></button>
                <button className="but"></button>
                <button className="but"></button>
              </div>
            </div>
            <div className="de">
              <Square
                src={"https://chtstudio.com/demo/news/images/post/mid1.jpg"}
                title={"44 books on 44 presidents: Welcome"}
                date={"Mar 1,2022 "}
                view={"5k"}
                like={"28"}
              />
              <Square
                src={
                  "https://www.rd.com/wp-content/uploads/2019/11/cat-10-e1573844975155.jpg"
                }
                title={"Cat living his life fullest. Say HELLO"}
                date={"Feb 28,2022 "}
                view={"12k"}
                like={"98"}
                style={{ marginLeft: "40px" }}
              />
              <Square
                src={
                  "https://images.unsplash.com/photo-1530071698688-1e4c30e1ea52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3855&q=80"
                }
                title={"Tired of thinking your a peace of shit?"}
                date={"May 3,2023 "}
                view={"2m"}
                like={"769k"}
                style={{ marginLeft: "40px" }}
              />
            </div>
            <div className="Worlds2">
              <h4 className="word" style={{ color: "white" }}>
                WORLDS
              </h4>
            </div>
            <div className="negym">
              <div className="heh">
                <img
                  className="tom"
                  src="https://images.pexels.com/photos/4491459/pexels-photo-4491459.jpeg"
                  alt=""
                />
                <div>
                  <div className="title">
                    Designers dream is really engeneers & software developers
                    nightmare
                  </div>
                  <div className="medku">
                    <div className="date"></div>
                    <div className="dvl">Feb 28, 2022</div>
                    <div className="view"></div>
                    <div className="dvl">40k</div>
                    <div className="like"></div>
                    <div className="dvl2">190</div>
                  </div>
                  <div className="dvl3">
                    Lorem ipsum larukus baraka sujuki fe mo nokolo baraha shi za
                    lham the sezum nogt klen chen hoike po.
                  </div>
                </div>
              </div>
              <div className="column2">
                <Little
                  src={"https://chtstudio.com/demo/news/images/post/mid1.jpg"}
                  title={"44 books on 44 presidents: Welcome"}
                  date={"Mar 1,2022 "}
                  view={"5k"}
                  like={"28"}
                />
                <Little
                  src={"https://chtstudio.com/demo/news/images/post/mid1.jpg"}
                  title={"44 books on 44 presidents: Welcome"}
                  date={"Mar 1,2022 "}
                  view={"5k"}
                  like={"28"}
                />
                <Little
                  src={"https://chtstudio.com/demo/news/images/post/mid1.jpg"}
                  title={"44 books on 44 presidents: Welcome"}
                  date={"Mar 1,2022 "}
                  view={"5k"}
                  like={"28"}
                />
                <Little
                  src={"https://chtstudio.com/demo/news/images/post/mid1.jpg"}
                  title={"44 books on 44 presidents: Welcome"}
                  date={"Mar 1,2022 "}
                  view={"5k"}
                  like={"28"}
                />
              </div>
            </div>
            <div className="roww">
              <LitteS
                src={"https://chtstudio.com/demo/news/images/post/mid1.jpg"}
                title={"44 books on 44 presidents: Welcome"}
                date={"Mar 1,2022 "}
                view={"5k"}
                like={"28"}
              />
              <LitteS
                src={"https://chtstudio.com/demo/news/images/post/mid1.jpg"}
                title={"44 books on 44 presidents: Welcome"}
                date={"Mar 1,2022 "}
                view={"5k"}
                like={"28"}
              />
              <LitteS
                src={"https://chtstudio.com/demo/news/images/post/mid1.jpg"}
                title={"44 books on 44 presidents: Welcome"}
                date={"Mar 1,2022 "}
                view={"5k"}
                like={"28"}
              />
            </div>
            <img
              className="discount2 "
              src="https://chtstudio.com/demo/news/images/others/ad1.jpg"
              alt=""
            />
            <div className="Worlds2">
              <h4 className="word" style={{ color: "white" }}>
                TECHNOLOGY
              </h4>
            </div>
            <div className="roww">
              <div className="hoh">
                <img
                  className="huge"
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3600&q=80"
                  alt=""
                />
                <div>
                  <div className="title">
                    Designers dream is really engeneers & software developers
                    nightmare
                  </div>
                  <div className="medku">
                    <div className="date"></div>
                    <div className="dvl">Feb 28, 2022</div>
                    <div className="view"></div>
                    <div className="dvl">40k</div>
                    <div className="like"></div>
                    <div className="dvl2">190</div>
                  </div>
                  <div className="dvl3">
                    Lorem ipsum larukus baraka sujuki fe mo nokolo baraha shi za
                    lham the sezum nogt klen chen hoike po.
                  </div>
                </div>
              </div>
              <div>
                <Littlell
                  src={"https://chtstudio.com/demo/news/images/post/mid1.jpg"}
                  title={"44 books on 44 presidents: Welcome"}
                  date={"Mar 1,2022 "}
                  view={"5k"}
                  like={"28"}
                />
                <Littlell
                  src={"https://chtstudio.com/demo/news/images/post/mid1.jpg"}
                  title={"44 books on 44 presidents: Welcome"}
                  date={"Mar 1,2022 "}
                  view={"5k"}
                  like={"28"}
                />
              </div>
            </div>
            <div className="roww">
              <LitteS
                src={"https://chtstudio.com/demo/news/images/post/mid1.jpg"}
                title={"44 books on 44 presidents: Welcome"}
                date={"Mar 1,2022 "}
                view={"5k"}
                like={"28"}
              />
              <LitteS
                src={"https://chtstudio.com/demo/news/images/post/mid1.jpg"}
                title={"44 books on 44 presidents: Welcome"}
                date={"Mar 1,2022 "}
                view={"5k"}
                like={"28"}
              />
              <LitteS
                src={"https://chtstudio.com/demo/news/images/post/mid1.jpg"}
                title={"44 books on 44 presidents: Welcome"}
                date={"Mar 1,2022 "}
                view={"5k"}
                like={"28"}
              />
            </div>
            <div className="Worlds2">
              <h4 className="word" style={{ color: "white" }}>
                BUSINESS
              </h4>
            </div>
            <div className="column2">
              <Lastlittle
                src={"https://chtstudio.com/demo/news/images/post/mid1.jpg"}
                title={"44 books on 44 presidents: Welcome"}
                date={"Mar 1,2022 "}
                view={"5k"}
                like={"28"}
              />
              <Lastlittle
                src={"https://chtstudio.com/demo/news/images/post/mid1.jpg"}
                title={"44 books on 44 presidents: Welcome"}
                date={"Mar 1,2022 "}
                view={"5k"}
                like={"28"}
              />
              <Lastlittle
                src={"https://chtstudio.com/demo/news/images/post/mid1.jpg"}
                title={"44 books on 44 presidents: Welcome"}
                date={"Mar 1,2022 "}
                view={"5k"}
                like={"28"}
              />
              <Lastlittle
                src={"https://chtstudio.com/demo/news/images/post/mid1.jpg"}
                title={"44 books on 44 presidents: Welcome"}
                date={"Mar 1,2022 "}
                view={"5k"}
                like={"28"}
              />
            </div>
          </div>
          <div className="RightSide"></div>
        </div>
      </div>
    </div>
  );
};
