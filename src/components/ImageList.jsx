import ImageShow from "./ImageShow";
import "./ImageList.css";
function ImageList({ images }) {
  const renderdImages = images.map((image) => {
    return <ImageShow key={image.id} image={image} />;
  });
  return <div className="image-list">{renderdImages}</div>;
}

export default ImageList;

// https://unsplash.com/documentation#location
