
import { titulosObjeto } from './titulosObjetos'
import { TitulosTipo } from './TitulosTipo';

export const Titulos = () => {
  return (
    <>
      <h2 className="CV__titulos__titulo">Titulación</h2>
      <ol>
        { titulosObjeto.map( tipo => <TitulosTipo key={tipo.id} tipo={tipo}/>)}
      </ol>
    </>
  );
};
