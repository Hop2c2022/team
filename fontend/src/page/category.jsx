import "./style.css";
import { Navbar } from "../components/Navbar";

export const Category = () => {
  return (
    <div className="Container">
        <Navbar/>
        <div className="middleParts">
            <img className="discount " src="https://chtstudio.com/demo/news/images/others/ad1.jpg" alt="" style={{ width:"63%", height:"60%",marginTop:"1.5%"}} />
            <div className="news">
                <div className="LeftSide">
                    <div className="Worlds">
                        <h4 className="worlds" style={{color:"white"}}>WORLDS</h4>
                        <div> </div>
                    </div>
                    <div className="theNews"> </div>
                    <div className="nextPage"></div>
                </div>
                <div className="RightSide"></div>
            </div>
        </div>

    </div>
  );
};
