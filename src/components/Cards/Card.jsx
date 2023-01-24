
export const Card = ({ CardInfo }) => {

  const { titulo, description, src} = CardInfo;


  return (
    <div className="Card">
      <div className="Card__Content">
        <h1 className="Card__Titulo">{titulo}</h1>
        <div className="Card__Body">
          <img className="Card__Image" src={src} alt={titulo}/>
          <p className="Card__Description invisible-scrollbar">{description}</p>
        </div>
      </div>
    </div>
  );
};
