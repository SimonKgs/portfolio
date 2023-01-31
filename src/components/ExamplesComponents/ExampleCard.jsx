import { Link } from "react-router-dom";

export const ExampleCard = ({ example }) => {
  const { description, name, route } = example;
  return (
    <Link to={route}>
      <div className="Examples__Card">
        <h4 className="Examples__Card__Name">{name}</h4>
        <p className="Examples__Card__Description">{description}</p>
      </div>
    </Link>
  );
};
