//  recibe un array para saber el tamaño
//  mueve el array con 2 funciones una hacia delante y otra hacia atras
//  cada funcion retornara la nueva posicion
export const useCarousel = (conjunto = []) => {
  const longitud = conjunto.length - 1;

  //  ambas funciones deben recibir la posicion para determinar la nueva
  const moveBack = (posicion) => {
    return posicion === 0 ? longitud : posicion - 1;
  };

  const moveNext = (posicion) => {
    return posicion === longitud ? 0 : posicion + 1;
  };

  return {
    moveBack,
    moveNext,
  };
};
