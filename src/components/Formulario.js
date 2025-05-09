import React, { useState } from 'react';
import Error from './Error';

const Formulario = ({ setBusqueda }) => {
  const [input, setInput] = useState('');
  const [categoria, setCategoria] = useState('');
  const [error, setError] = useState(false);

  const buscarImagen = (e) => {
    e.preventDefault();

    // Validación
    if (input.trim() === '' && categoria === '') {
      setError(true);
      return;
    }
    setError(false);

    // Pasamos la búsqueda con texto y categoría
    setBusqueda({
      texto: input,
      categoria
    });
  };

  return (
    <form onSubmit={buscarImagen}>
      <div className='row'>
        <div className='form-group col-md-5 mb-2'>
          <input
            type='text'
            className='form-control form-control-lg'
            placeholder='Buscar imágenes...'
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>

        <div className='form-group col-md-4 mb-2'>
          <select
            className='form-control form-control-lg'
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value=''>-- Categoría --</option>
            <option value='backgrounds'>Fondos</option>
            <option value='fashion'>Moda</option>
            <option value='nature'>Naturaleza</option>
            <option value='science'>Ciencia</option>
            <option value='education'>Educación</option>
            <option value='feelings'>Sentimientos</option>
            <option value='health'>Salud</option>
            <option value='people'>Personas</option>
            <option value='religion'>Religión</option>
            <option value='places'>Lugares</option>
            <option value='animals'>Animales</option>
            <option value='industry'>Industria</option>
            <option value='computer'>Computación</option>
            <option value='food'>Comida</option>
            <option value='sports'>Deportes</option>
            <option value='transportation'>Transporte</option>
            <option value='travel'>Viajes</option>
            <option value='buildings'>Edificios</option>
            <option value='business'>Negocios</option>
            <option value='music'>Música</option>
          </select>
        </div>

        <div className='form-group col-md-3 mb-2'>
          <input
            type='submit'
            className='btn btn-lg btn-danger btn-block w-100'
            value='Buscar'
          />
        </div>
      </div>

      {error && (
        <Error mensaje='Debes ingresar un texto o seleccionar una categoría' />
      )}
    </form>
  );
};

export default Formulario;
