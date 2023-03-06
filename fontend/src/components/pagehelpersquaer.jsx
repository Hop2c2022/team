import { PictureSquare } from "./PictureSquare";

export const Square = ({ title, src, date, view, like }) => {
  return (
    <div className="first">
      <div className="first_bottom">
        <PictureSquare width={"255px"} height={"210px"} src={src} />
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
