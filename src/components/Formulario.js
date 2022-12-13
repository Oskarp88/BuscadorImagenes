import React, { useState } from 'react'
import Error from './Error';

const Formulario = ({setBusqueda}) => {

    const [input, setInput] = useState('');
    const [error, setError] = useState(false);

    const buscarImagen = (e) =>{
        e.preventDefault();

        //validar
        if(input.trim()===''){
           setError(true);
           return;
        }
        setError(false);

        setBusqueda(input);
    }
    return ( 
        <form onSubmit={buscarImagen}>
            <div className='row'>
                <div className='form-group col-md-8'>
                   <input 
                      type='text'
                      className='form-control form-control-lg'
                      placeholder='Buscar Imagenes'
                      onChange={(e)=>setInput(e.target.value)}
                   />
                </div>
                <div className='form-group col-md-4'>
                   <input 
                      type='submit'
                      className='btn btn-lg btn-danger btn-block'
                     value='Buscar'
                   />
                </div>               
            </div>
            {error ? <Error mensaje='El campo de busqueda no debe estar vacio'/>:null}
        </form>
     );
}
 
export default Formulario;