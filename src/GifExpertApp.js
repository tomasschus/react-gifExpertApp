import React, { useState } from "react";
import AddCategory from "./components/AddCategory.js";
import { GifGrid } from "./components/GifGrid.js";

function GifExpertApp() {
  const [categorias, setCategorias] = useState([]);

  return (
    <>
      <h2>GifExpertApp</h2>
      <hr />
      <AddCategory categorias={categorias} setCategorias={setCategorias} />
      <ol>
        {categorias.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
}

export default GifExpertApp;
