import React from 'react';

const Paginacion = ({ pagina_actual, total_pagina, paginaAnterior, paginaSiguiente }) => {
  return (
    <div className="my-3 text-center">
      {pagina_actual > 1 && (
        <button
          type="button"
          className="btn btn-info mr-2"
          onClick={paginaAnterior}
        >
          &laquo; Anterior
        </button>
      )}

      {pagina_actual < total_pagina && (
        <button
          type="button"
          className="btn btn-info"
          onClick={paginaSiguiente}
        >
          Siguiente &raquo;
        </button>
      )}
    </div>
  );
};

export default Paginacion;
