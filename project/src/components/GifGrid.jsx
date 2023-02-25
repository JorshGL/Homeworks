import { useEffect, useState } from "react";
import GifItem from "./GifItem";

const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=GQIQXiKdkTkaqguoECRJS2k0GMJRH7Yp&q=${category}&limit=25&offset=0&rating=g&lang=en`;
  const res = await fetch(url);
  const { data } = await res.json();
  const gifs = data.map((gif) => {
    return {
      id: gif.id,
      title: gif.title,
      url: gif.images.downsized_medium.url,
    };
  });

  return gifs;
};

const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  const fetchGifs = () => {
    getGifs(category).then((gifs) => {
      console.log(gifs);
      setImages(gifs);
    });
  };

  useEffect(() => {
    fetchGifs();
  }, []);

  return (
    <div className="grid grid-cols-3 items-stretch gap-6 justify-center">
      {
        images.map((image, index) => {
          return <GifItem {...image} key={index}/>
        })
      }
    </div>
  );
};

export default GifGrid;
