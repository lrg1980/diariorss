import React from 'react';
import PropTypes from 'prop-types';

const Noticia = (props) => {
     const { urlToImage, url, title, description, source } = props.noticia;

     const imagen = (urlToImage) ?
          <div className="card-image">
               <img src={urlToImage} alt={title} />
               <span className="card-title">
                    {source.name}
               </span>
          </div>
     : '';

     console.log(urlToImage);
     return (
          <div className="col s12 m6 l4">
               <div className="card">
                    {imagen}
                    <div className="card-content">
                         <h2>{title}</h2>
                         <h5>{description}</h5>
                         <a href={url} target="_blank" className="waves-effects waves-light btn">Leer completa</a>
                    </div>
               </div>
               
          </div>
     );
};

Noticia.propTypes = {
     noticia: PropTypes.shape({
          urlToImage: PropTypes.string,
          url: PropTypes.string,
          title: PropTypes.string,
          description: PropTypes.string,
          source: PropTypes.object
     })
}
export default Noticia;