import { useState } from 'react'
import { AgregaCategoria, GifGrid} from './componentes';
// 
export const GifExpertApp = () => {

  const [categorias, setCategorias] = useState(['One puch'])
  const onAgregaCategoria = (iCategoria) => {
    if (categorias.includes(iCategoria)) return;

    setCategorias([iCategoria, ...categorias]);
  }
  return (
    <>
      <h1>Gif Expert App</h1>
      <AgregaCategoria
        onAgregaNuevaCategoria={onAgregaCategoria}
      />
      {
        categorias.map(
          categoria => (
            <GifGrid key={categoria} categoria={categoria} />
          )
        )
      }
    </>
  )
}
