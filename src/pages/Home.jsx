import { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Card } from "../components/Cards/Card";
import { cards } from "../components/Cards/cards";
import { useCarousel } from "../Hooks/useCarousel";

export const Home = () => {
  const [posicion, setPosicion] = useState(0);
  const [CardInfo, setCardInfo] = useState(cards[posicion]);

  const { moveBack, moveNext } = useCarousel(cards);

  //  maneja el evento para cambiar la tarjeta 
  const handleClick = (tipo = "") => {
    if (tipo === "back") {
      setPosicion((posicion) => moveBack(posicion));
    } else if (tipo === "next") {
      setPosicion((posicion) => moveNext(posicion));
    }
  };

  //  Pasa las tarjetas en auto
  useEffect(() => {
    const autoCarousel = setTimeout( () => setPosicion((posicion) => moveNext(posicion)), 10000);
    return () => clearTimeout(autoCarousel);
  }, [ posicion, moveNext ])
  
  //  actualiza la tarjeta actual siempre que haya un cambio, sea auto o con handleClick
  useEffect(() => {
    setCardInfo((CardInfo) => cards[posicion]);
  }, [posicion]);

  return (
    <div className="Home Page">
      <button className="Home__Button" onClick={() => handleClick("back")}>
        <IoIosArrowBack />
      </button>
      <div className="ContainerHome">
        <Card CardInfo={CardInfo} />
      </div>
      <button className="Home__Button" onClick={() => handleClick("next")}>
        <IoIosArrowForward />
      </button>
    </div>
  );
};
