import React from "react";

export const SkillTipo = ({ tipo }) => {
  const { cabecera, tipos } = tipo;
  return (
    <>
      <li className="CV__experiencia__cabecera">{cabecera}</li>
      <dl>
        {/* Retorna todos los tipos por cada habilidad */}
        {tipos.map((tipo) => (
          <dt key={tipo}>{tipo}</dt>
        ))}
      </dl>
    </>
  );
};
