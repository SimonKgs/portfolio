import { experienciObjetos } from "./experienciaObjetos";
import { ExperienciaTipo } from "./ExperienciaTipo";

export const Experiencia = () => {
  return (
    <>
      <h2 className="CV__experiencia__titulo">Experiencia</h2>
      <ol>
        {/* Retorna del componente ExperienciaTipo toda la experiencia pandole cada valor de la "db" simulada como un arvhivo de objetos*/}
        {/* como key seria ideal el id unico */}
        {experienciObjetos.map((tipo) => (
          <ExperienciaTipo key={tipo.id} tipo={tipo} />
        ))}
      </ol>
    </>
  );
};
