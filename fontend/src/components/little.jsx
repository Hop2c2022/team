import { PictureLittle } from "./PictureLittle";

export const Lastlittle = ({ title, src, date, view, like ,word}) => {
  return (
    <div className="first5">
      <PictureLittle width={"360px"} height={"180px"} src={src} />
      <div className="row2">
        <div className="titlebold" style={{ marginTop: "10px" }}>
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
        <div className="littlelastword">{word}</div>
      </div>
    </div>
  );
};
