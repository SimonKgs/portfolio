//  TODO: crear las tarjetas desde aquí
import { cards } from "../components/Cards/cards";


const getGifs = () => {

    const tarjetas = cards.map( async(card) => {
        const url = `https://api.giphy.com/v1/gifs/${card.id}?api_key=0mlTmpWLk10Tft0XyGR2bjkeOZ0EFpUH`;
        const { data } = await (await fetch( url )).json();
        card.src = data.images.downsized.url;

        console.log(card);

        return {
            card
        }
    });

};


export const tarjetas = getGifs(); 