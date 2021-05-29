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
    <>
      <input id="nuevaCategoria" placeholder="Buscar imagen.."></input>{" "}
      <button onClick={handleAdd}>Buscar</button>
    </>
  );
};

AddCategory.propTypes = {
  categorias: PropTypes.array.isRequired,
  setCategorias: PropTypes.func.isRequired,
};

export default AddCategory;
