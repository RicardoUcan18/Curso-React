import { render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Pruebas FirstApp', () => { 
  // test('debe ser match con el snapshot ', () => { 
  //   const titulo = 'titulo desde prueba';
  //   const {container} = render(<FirstApp titulo={titulo}/>);
  //   expect(container).toMatchSnapshot();
  //  });

   test('debe de mostrar el titulo en h1', () => { 
    
    const titulo = 'titulo desde prueba';
    const {container, getByText, getAllByText } = render(<FirstApp titulo={titulo}/>);
    expect(getByText(titulo)).toBeTruthy();

    const h1 = container.querySelector('h1');
    expect(h1.innerHTML).toContain(titulo);

    // expect(getAllByText(titulo).length).toBe(2); // para validar si tiene 2 o mas elemenos con lo mismo
    })
 })