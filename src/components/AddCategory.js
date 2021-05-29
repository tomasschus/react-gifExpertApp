import React from "react";
import PropTypes from "prop-types";

const AddCategory = ({ categorias, setCategorias }) => {
  const handleAdd = () => {
    const nuevaCategoria = document.getElementById("nuevaCategoria").value;
    if (nuevaCategoria !== "") {
      setCategorias([nuevaCategoria, ...categorias]);
    }
    document.getElementById("nuevaCategoria").value = "";
  };

  return (
    <div className="center">
      <input id="nuevaCategoria" placeholder="Buscar imagen.."></input>
      <p></p>
      <button className="buttonSearch" onClick={handleAdd}>Buscar</button>
    </div>
  );
};

AddCategory.propTypes = {
  categorias: PropTypes.array.isRequired,
  setCategorias: PropTypes.func.isRequired,
};

export default AddCategory;
