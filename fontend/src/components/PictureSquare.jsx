export const PictureSquare = ({ width, height, src }) => {
  return (
    <img className="imgsssss"
      style={{ borderTopLeftRadius: "5px", borderTopRightRadius: "5px" }}
      width={width}
      height={height}
      src={src}
    />
  );
};
