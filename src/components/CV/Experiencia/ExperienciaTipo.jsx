import React from "react";

export const ExperienciaTipo = ({ tipo }) => {
  const { cabecera, descripcion, tecnologias } = tipo;
  return (
    <>
      <li className="CV__experiencia__cabecera">{cabecera}</li>
      <dl>
        <dd>{descripcion}</dd>
        {tecnologias.map(({id, tecnologia}) => (
          <dt key={id}>{tecnologia}</dt>
        ))}
      </dl>
    </>
  );
};
