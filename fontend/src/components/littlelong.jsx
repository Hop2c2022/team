import { PictureSquare } from "./PictureSquare.jsx";

export const Littlell = ({ title, src, date, text }) => {
  return (
    <div className="first4">
      <div className="first_bottom">
        <PictureSquare width={"190px"} height={"120px"} src={src} />
      </div>
      <div className="title">{title}</div>
      <div className="medku">
        <div className="date"></div>
        <div className="dvl">{date}</div>
      </div>
      <div>{text}</div>
    </div>
  );
};
