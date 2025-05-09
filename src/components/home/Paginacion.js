import React from 'react';

const Paginacion = ({ pagina_actual, total_pagina, paginaAnterior, paginaSiguiente, irAPagina }) => {
  const paginas = [];

  // Determina rango de páginas a mostrar
  let inicio = Math.max(1, pagina_actual - 2);
  let fin = Math.min(total_pagina, pagina_actual + 2);

  // Ajuste si estás al inicio o final
  if (pagina_actual <= 3) {
    fin = Math.min(5, total_pagina);
  } else if (pagina_actual >= total_pagina - 2) {
    inicio = Math.max(1, total_pagina - 4);
  }

  // Generar lista de botones
  for (let i = inicio; i <= fin; i++) {
    paginas.push(i);
  }

  return (
    <nav className="my-4">
      <ul className="pagination justify-content-center">
        {pagina_actual > 1 && (
          <li className="page-item">
            <button className="page-link" onClick={paginaAnterior}>
              &laquo; Anterior
            </button>
          </li>
        )}

        {paginas.map((num) => (
          <li
            key={num}
            className={`page-item ${pagina_actual === num ? 'active' : ''}`}
          >
            <button
              className="page-link"
              onClick={() => irAPagina(num)}
            >
              {num}
            </button>
          </li>
        ))}

        {pagina_actual < total_pagina && (
          <li className="page-item">
            <button className="page-link" onClick={paginaSiguiente}>
              Siguiente &raquo;
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Paginacion;
