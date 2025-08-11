import { useState } from "react"

export const AgregaCategoria = ({ onAgregaNuevaCategoria }) => {
  const [inputValue, setInputValue] = useState('')
  const onCambiaValor = ({ target }) => {
    setInputValue(target.value)
  }
  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;

    // onSetCategoria(categorias => [inputValue, ...categorias]);
    onAgregaNuevaCategoria(inputValue.trim());
    setInputValue('');
  }



  return (
    <form onSubmit={onSubmit}>
      <input type="input" placeholder="Buscar gifs" value={inputValue} onChange={(event) => onCambiaValor(event)} />
    </form>
  )
}
