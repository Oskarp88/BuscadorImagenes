import React from 'react'
import { AiFillLike, AiOutlineEye, AiOutlineDownload } from 'react-icons/ai';
import { FiDownload } from 'react-icons/fi';

const Imagen = ({ imagen }) => {
  const { largeImageURL, likes, previewURL, tags, views, downloads } = imagen;

  const descargarImagen = async (url) => {
    try {
      const response = await fetch(url, { mode: 'cors' });
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = 'imagen-descargada.jpg';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error('Error al descargar la imagen:', error);
    }
  };

  return (
    <div className='col-12 col-sm-6 col-md-4 col-lg-3 mb-4'>
      <div className='card shadow'>
        <img src={previewURL} alt={tags} className='card-img-top' />

        <div className='card-body'>
          <div className='d-flex justify-content-around text-center'>
            <div>
              <AiFillLike size={20} style={{ color: '#E1306C' }} />
              <p className='mb-0' style={{ fontSize: '13px' }}>{likes}</p>
            </div>

            <div>
              <AiOutlineEye size={20} style={{ color: '#36486b' }} />
              <p className='mb-0' style={{ fontSize: '13px' }}>{views}</p>
            </div>

            <div>
              <AiOutlineDownload size={20} style={{ color: '#28a745' }} />
              <p className='mb-0' style={{ fontSize: '13px' }}>{downloads}</p>
            </div>
          </div>
        </div>

        <div className='card-footer d-flex justify-content-between'>
          <a
            href={largeImageURL}
            target='_blank'
            rel='noopener noreferrer'
            className='btn btn-primary btn-sm w-50'
          >
            Ver Imagen
          </a>

          <button
            className='btn btn-success btn-sm w-45'
            onClick={() => descargarImagen(largeImageURL)}
          >
            <FiDownload /> Descargar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Imagen;
