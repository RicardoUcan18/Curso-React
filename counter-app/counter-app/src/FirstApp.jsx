import {Fragment} from 'react';

import PropTypes from 'prop-types';

const newMessage = 'Hola, soy un mensaje nuevo';
const newMessage2 = [1,2,3,4,5,6,7,8,9,10];
const newMessage3 = {
    mensaje: 'Hola, soy Alvaro',
    titulo : 'Nombre',
};

const getResult = () => {
    return 'Hola, soy un mensaje desde una funcion';
}

export function FirstApp({ title, subtitle }) {
    
      return (
        <>
          {/* <h1>{ JSON.stringify(newMessage3) }</h1> */}
          <h1>{ title }</h1>
          <p>{ subtitle }</p>
        </>
      );
}

//validacion de las propiedades del componente
FirstApp.propTypes = {
    title: PropTypes.string.isRequired, 
};

//propiedades por defecto
FirstApp.defaultProps = {
    subtitle: 'No hay subtitulo',
    title: 'No hay titulo',
};

