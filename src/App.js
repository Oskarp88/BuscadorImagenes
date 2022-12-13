import { useEffect, useState } from "react";
import Formulario from "./components/Formulario";
import ListadoImagenes from "./components/ListadoImagenes";


function App() {

  const [busqueda,setBusqueda]=useState('');
  const [imagen, setImagen]=useState([]);
  const [pagina_actual, setPaginaAtual] = useState(1);
  const [total_pagina, setTotalPaginas] = useState(1);
  

  useEffect(()=>{
    const consultarApi = async()=>{
      if(busqueda==='')return;

    const imagenesPorPaginas = 30;
    const apiKey = '31731518-ba625be4b648e502eadb35f4e';
    const url = `https://pixabay.com/api/?key=${apiKey}&q=${busqueda}&per_pag=${imagenesPorPaginas}&page=${pagina_actual}`;
    const result = await fetch(url);
    const response = await result.json();
    setImagen(response.hits);

    //calcular el total de paginas
    const CantidadPaginas = Math.ceil(response.totalHits / imagenesPorPaginas);
    setTotalPaginas(CantidadPaginas);
    //al actualizar que la pantalla se muestre desde arriba
    const jumbotron = document.querySelector('.jumbotron');
    jumbotron.scrollIntoView({ behavior: 'smooth'})
    }
    consultarApi();
  },[busqueda, pagina_actual]);

  //definir pagina anterior
  const paginaAnterior = ()=>{
     const nuevaPaginaActual = pagina_actual - 1;
     if(nuevaPaginaActual===0) return;
     setPaginaAtual(nuevaPaginaActual);
  }
  //definir pagina siguiente
  const paginaSiguiente = () => {
    const pagCurrent = pagina_actual + 1;
    if(pagCurrent === total_pagina +1)return;
    setPaginaAtual(pagCurrent);
  }

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de Imagenes</p>
        <Formulario setBusqueda={setBusqueda}/>
      </div>
      <div className="row justify-content-center">
        <ListadoImagenes imagenes={imagen} />
        {pagina_actual > 1 ?
            <button
            type='button'
            className="bbtn btn-info mr-1"
            onClick={paginaAnterior}
         >&laquo; Anterior </button> : null
        }
        
        {
          pagina_actual < total_pagina ? 
          <button
           type='button'
           className="bbtn btn-info"
           onClick={paginaSiguiente}
        >Siguiente &raquo;</button>: null
        }
      </div>
    </div>
  );
}

export default App;
