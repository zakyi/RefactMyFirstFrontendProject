function ImageItem({ image }) {
  return <img src={image.urls.small} alt={image.alt_description} />;
}

export default ImageItem;
