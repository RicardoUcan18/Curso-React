import { render, screen } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Pruebas FirstApp', () => { 
  const titulo = 'titulo desde prueba';

  test('debe ser match con el snapshot ', () => { 
    const {container} = render(<FirstApp titulo={titulo}/>);
    expect(container).toMatchSnapshot();
   });

   test('debe de mostrar el titulo en h1', () => { 
    
     render(<FirstApp titulo={titulo}/>);
     expect(screen.getByText(titulo)).toBeTruthy();
    });
    test('debe de mostrar el titulo en un H1', () => { 
      
     render(<FirstApp titulo={titulo}/>);
      expect(screen.getByRole('heading', {level:1}).innerHTML).toContain(titulo);
     })
 })