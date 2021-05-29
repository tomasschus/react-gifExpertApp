import React from "react";

export const GifGridItem = ({ image }) => {
  return (
    <div className="card animate__animated animate__fadeIn">
      <p>{image.title}</p>
      <img src={image.url} alt={image.title} />
    </div>
  );
};
