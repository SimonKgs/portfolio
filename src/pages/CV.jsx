import { Descripcion, Experiencia, Skills, Titulos } from "../components/CV";

export const CV = () => {
  return (
    <div className="CV Page invisible-scrollbar">
      <div className="CV__descripcion invisible-scrollbar">
        <Descripcion />
      </div>
      <div className="CV__titulos invisible-scrollbar">
        <Titulos />
      </div>
      <div className="CV__experiencia invisible-scrollbar">
        <Experiencia />
      </div>
      <div className="CV__skills invisible-scrollbar">
        <Skills />
      </div>
    </div>
  );
};
