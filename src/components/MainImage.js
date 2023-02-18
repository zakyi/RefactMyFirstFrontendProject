function MainImage({ children, title }) {
  console.log(title);
  return (
    <div className="banner-image-container">
      {children}
      <div className="overlay-banner-image">
        <div className="overlay-content">
          <h1>{title}</h1>
        </div>
      </div>
    </div>
  );
}

export default MainImage;
