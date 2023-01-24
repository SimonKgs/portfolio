export const TitulosTipo = ({ tipo }) => {
  const { nivel, especialidades } = tipo;

  return (
    <>
      <li className="CV__titulos__cabecera">
        { nivel }
      </li>
      <ul>
        {especialidades.map((especialidad) => (
          <li key={especialidad}>{especialidad}</li>
        ))}
      </ul>
      <br />
    </>
  );
};
