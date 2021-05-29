import React from "react";
import useFetchGifs from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const { data, loading } = useFetchGifs(category);

  return (
    <div className="card-grid">
      <h3>{category} </h3> <br />
      {data.map(
          (image) => ( <GifGridItem key={image.id} image={image} /> )
      )
      }
    </div>
  );
};
