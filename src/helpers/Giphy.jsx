
export const Giphy = () => {

    const getGif = async() => {
        const urlFetch = `https://api.giphy.com/v1/gifs/vjjCsx3izfSyQ?api_key=${process.env.REACT_APP_API}`;
        const resp = await fetch( urlFetch );
        const { data } = await resp.json();

        const { id, title, images } = data;
         

        console.log(id, title, images.downsized.url);
    }

    //  api.giphy.com/v1/gifs/vjjCsx3izfSyQ?api_key=0mlTmpWLk10Tft0XyGR2bjkeOZ0EFpUH calavera
    //  api.giphy.com/v1/gifs/W0c3xcZ3F1d0EYYb0f?api_key=0mlTmpWLk10Tft0XyGR2bjkeOZ0EFpUH alone
    //  api.giphy.com/v1/gifs/IdmfEtnMWPzOg?api_key=0mlTmpWLk10Tft0XyGR2bjkeOZ0EFpUH ignored

    getGif()

  return (
    <div></div>
  )
}

