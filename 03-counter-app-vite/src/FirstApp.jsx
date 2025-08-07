import PropTypes from 'prop-types';

export const getResultado = () => { return 1 + 1 };

export const FirstApp = ({titulo, subtitulo}) => {

  return (
    <>
      <h1>{ titulo } </h1>
      {/* <h1>{ titulo } </h1> */}
      <p> { subtitulo }</p>
    </>
  )
}

FirstApp.propTypes = { 
  titulo: PropTypes.string.isRequired,
  subtitulo: PropTypes.number
}
FirstApp.defaultProps = {
  titulo: 'no funciona con defaultProps',
  subtitulo: 'subtitulo'
}


