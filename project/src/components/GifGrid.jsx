import {useEffect, useState} from "react";
import useFetch from "../hooks/UseFetch";
import GifItem from "./GifItem";


const GifGrid = ({ category }) => {
  const [images, setImages] = useState([])

  const {
    data,
    isLoading
  } = useFetch(`https://api.giphy.com/v1/gifs/search?api_key=GQIQXiKdkTkaqguoECRJS2k0GMJRH7Yp&q=${category}&limit=25&offset=0&rating=g&lang=en`)

  useEffect(() => {
    if (data?.data) setImages(data.data)
  }, [data])

  return (
    <div>
      <h3>{category}</h3>
      <div className="grid grid-cols-3 gap-3">
        {images.map((image, index) => {
          return <GifItem key={index} title={image.title} url={image?.images?.downsized_medium?.url} />;
        })}
      </div>
    </div>
  );
};

export default GifGrid;
