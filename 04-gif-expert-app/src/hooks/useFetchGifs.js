import { useEffect, useState } from "react";
import { getGifs } from "../ayudas/getGifs";

export const useFetchGifs = (categoria) => {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
    const getImagenes =  async () => {
      const imagenes = await getGifs(categoria);
      setImages(imagenes);
      setIsLoading(false);
    }
    useEffect(() => {
      getImagenes();
    }, []);
  return {
    images,
    isLoading
  }
}
