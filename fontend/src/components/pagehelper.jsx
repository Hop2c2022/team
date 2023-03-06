import { PictureLittle } from "./PictureLittle";

export const Little = ({ title, src, date, view, like }) => {
  return (
    <div className="first2">
      <PictureLittle width={"105px"} height={"80px"} src={src} />
      <div className="row2">
        <div className="title" style={{ marginTop: "10px" }}>
          {title}
        </div>
        <div className="medku">
          <div className="date"></div>
          <div className="dvl">{date}</div>
          <div className="view"></div>
          <div className="dvl">{view}</div>
          <div className="like"></div>
          <div className="dvl2">{like}</div>
        </div>
      </div>
    </div>
  );
};
