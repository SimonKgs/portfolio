import { SkillTipo } from "./SkillTipo";

import { skillsObjetos } from "./skillsObjetos";

export const Skills = () => {
  return (
    <>
      <h2 className="CV__skills__titulo">Skills</h2>
      <ol>
        {/* Retorna del componente skilltipo todos las habilidades y su tipo, pasandole el array skillsobjetos */}
        {skillsObjetos.map((tipo) => (
          <SkillTipo key={tipo.id} tipo={tipo} />
        ))}
      </ol>
    </>
  );
};
