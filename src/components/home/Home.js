import React, { useEffect, useState } from 'react';
import Formulario from '../Formulario';
import ListadoImagenes from '../ListadoImagenes';
import Paginacion from './Paginacion';

function Home() {
  const [busqueda, setBusqueda] = useState({
    texto: 'general',
    categoria: ''
  });
  const [imagen, setImagen] = useState([]);
  const [pagina_actual, setPaginaAtual] = useState(1);
  const [total_pagina, setTotalPaginas] = useState(1);

  useEffect(() => {
    const consultarApi = async () => {
      if (busqueda.texto === '') return;

      const imagenesPorPaginas = 30;
      const apiKey = '31731518-ba625be4b648e502eadb35f4e';
      const { texto, categoria } = busqueda;

      const url = `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(texto)}&per_page=${imagenesPorPaginas}&page=${pagina_actual}&category=${categoria}`;

      const result = await fetch(url);
      const response = await result.json();
      setImagen(response.hits);

      const CantidadPaginas = Math.ceil(response.totalHits / imagenesPorPaginas);
      setTotalPaginas(CantidadPaginas);

      const jumbotron = document.querySelector('.jumbotron');
      if (jumbotron) {
        jumbotron.scrollIntoView({ behavior: 'smooth' });
      }
    };

    consultarApi();
  }, [busqueda, pagina_actual]);

  // Funciones de paginación
  const paginaAnterior = () => {
    if (pagina_actual === 1) return;
    setPaginaAtual(pagina_actual - 1);
  };

  const paginaSiguiente = () => {
    if (pagina_actual === total_pagina) return;
    setPaginaAtual(pagina_actual + 1);
  };

  const irAPagina = (numero) => {
    setPaginaAtual(numero);
  };

  return (
    <>
      <div className="bg-light p-4 rounded shadow-sm mb-4 jumbotron">
        <h1 className="text-center mb-3" style={{ fontWeight: '600' }}>📸 Buscador de Imágenes</h1>
        <Formulario setBusqueda={setBusqueda} />
      </div>

      <div className="row justify-content-center">
        <ListadoImagenes imagenes={imagen} />
      </div>

      {total_pagina > 1 && (
        <Paginacion
          pagina_actual={pagina_actual}
          total_pagina={total_pagina}
          paginaAnterior={paginaAnterior}
          paginaSiguiente={paginaSiguiente}
          irAPagina={irAPagina}
        />
      )}
    </>
  );
}

export default Home;

