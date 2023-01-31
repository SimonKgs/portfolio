import { ExampleCard } from "../components/ExamplesComponents/ExampleCard";
import { examplesObjects } from "../components/ExamplesComponents/examplesObjects";

export const Examples = () => {
  return (
    <div className="Examples Page invisible-scrollbar">
      <div className="Examples__Container">
        <div className="Examples__Header">
          <h3 className="Examples__Header__Title">Título:</h3>
          <h3 className="Examples__Header__Title">Descripción:</h3>
        </div>
        {examplesObjects.map((example) => (
          <ExampleCard key={example.id} example={example} />
        ))}
      </div>
    </div>
  );
};