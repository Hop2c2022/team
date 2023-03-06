export const PictureLittle = ({ width, height, src }) => {
  return (
    <img
      style={{ borderTopLeftRadius: "2px", borderBottomLeftRadius: "2px" }}
      width={width}
      height={height}
      src={src}
    />
  );
};
