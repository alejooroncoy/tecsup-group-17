import { useState } from 'react';
import photosJSON from  '../json/photos.json';

/**
 * Agrupa fotos a partir de la cantidad indicada en parámetro.
 * @param {Number} amountGroup Cantidad de fotos en cada grupo.
 * @returns {{ src: String, id: String }[]} Devuelve un array con las fotos agrupadas.
 */
export default function usePhotos(amountGroup) {
  const [photos] = useState(photosJSON);

  let subIndex = 0;

  const photosGrouped = [];
  
  const addGroupPhoto = (photo, i) => {
    if(i % amountGroup === 0) subIndex++;
    if(!photosGrouped.at(subIndex)) photosGrouped[subIndex] = {
      photos: [],
      id: crypto.randomUUID(),
    };
    photosGrouped.at(subIndex).photos.push(photo);  
  }

  photos.forEach(addGroupPhoto);
  
  return photosGrouped;
}