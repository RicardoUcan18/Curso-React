import { useState } from "react";
import PropTypes from "prop-types";


export function CounterApp({ value }) {

    const [counter, setCounter] = useState( value );

    const handleClick = ()  =>{
      setCounter( counter + 1 );
    }

    const handleClickminus = ()  =>{
      setCounter( counter - 1 );
    }
    
    
      return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>

            <button onClick={ handleClick }> 
                +1 
            </button>

            <button onClick={ handleClickminus }> 
                -1 
            </button>

            <button onClick={ () => setCounter( value ) }>
                Reset
            </button>


        </>
      );
}

//validacion de las propiedades del componente
CounterApp.propTypes = {
    value: PropTypes.number.isRequired, 
};
