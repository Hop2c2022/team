import { PictureSquare } from "./PictureSquare.jsx";

export const LitteS = ({ title, src, date, view, like }) => {
  return (
    <div className="first3">
      <div className="first_bottom">
        <PictureSquare width={"255px"} height={"120px"} src={src} />
      </div>
      <div className="title">{title}</div>
      <div className="medku">
        <div className="date"></div>
        <div className="dvl">{date}</div>
        <div className="view"></div>
        <div className="dvl">{view}</div>
        <div className="like"></div>
        <div className="dvl2">{like}</div>
      </div>
    </div>
  );
};
